#!/bin/bash

SCRIPT_VERSION="v0.2.5"

URL=""
SKIP_REFRESH=false
DIRECTORY="remote_resources"
RENAME="latest"
ENV_KEY="REMOTE_REPO"
POSITIONAL_ARGS=()

function version() {
  echo "$SCRIPT_VERSION"
}

function help() {
  echo "Download Script $SCRIPT_VERSION"
  echo ""
  echo "Command line arguments"
  column -t -s '#' <<'EOF'
Description#Short Argument#Long Argument#Additional Parameters#Default
-----------#--------------#-------------#---------------------#-------
Print the script version#-v#--version#(none)#N/A
Print this help#-h#--help#(none)#N/A
Use provided repository URL#-u#--url#URL pointing to repository#Loads from .env
Set the remote resources directory#-d#--directory#Relative directory to save resources#"remote_resources"
Rename output folder#-r#--rename#Relative to remote directory#"latest"
Key to load repository URL from in .env#-e#--env-key#Key name#"REMOTE_REPO"
Refresh download script#-f#--refresh#(none)#Default behaviour
Skip refreshing download script#-s#--skip-refresh#(none)#false
EOF
}

while [[ $# -gt 0 ]]; do
  case $1 in
    -V|--version)
      version
      exit 0
      ;;
    -h|--help)
      help
      exit 0
      ;;
    -u|--url)
      URL="$2"
      shift
      shift
      ;;
    -d|--directory)
      DIRECTORY="$2"
      shift
      shift
      ;;
    -r|--rename)
      RENAME="$2"
      shift
      shift
      ;;
    -e|--env-key)
      ENV_KEY="$2"
      shift
      shift
      ;;
    -s|--skip-refresh)
      SKIP_REFRESH=true
      shift
      ;;
    -f|--refresh)
      SKIP_REFRESH=false
      shift
      ;;
    -*|--*)
      echo "Unknown option $1"
      exit 1
      ;;
    *)
      POSITIONAL_ARGS+=("$1") # save positional arg
      shift # past argument
      ;;
  esac
done

if [[ -f ".cleanup.sh" ]]; then
  rm ".cleanup.sh"
fi

if [[ ! -f "package.json" ]]; then
    echo "Move this script to project root before running!"
    exit 1
fi

if [[ ! -d "$DIRECTORY" ]]; then
    mkdir "$DIRECTORY"
    touch "$DIRECTORY/.gitkeep"

    if [[ "$(cat .gitignore | grep "/$DIRECTORY")" == "" ]]; then
        echo "/$DIRECTORY" >> .gitignore
    fi
fi

if [[ "$URL" == "" ]]; then
  if [[ "$(cat .env | grep "$ENV_KEY")" == "" ]]; then
      echo "Add $ENV_KEY to .env"
      exit 1
  fi

  repo="$(cat .env | grep "$ENV_KEY" | cut -f2- -d '=')"

  if [[ "$repo" == "" ]]; then
      echo "$ENV_KEY in .env not set!"
      exit 1
  fi
else
  repo="$URL"
fi

curl -sL "$repo" | grep "zipball_url" | cut -d ':' -f2-3 | tr -d '", ' | wget -q -O "$DIRECTORY/remote.zip" -i -

name="$(unzip -l "$DIRECTORY/remote.zip" | grep -v 'Archive' | grep / | head -n1 | sed -e 's/^[ \t]*//g' | tr -s '[:space:]' | cut -d ' ' -f4 | cut -d '/' -f1)"
unzip -q -o "$DIRECTORY/remote.zip" -d "$DIRECTORY"

if [[ -d "$DIRECTORY/$RENAME" ]]; then
    rm -rf "$DIRECTORY/$RENAME"
fi

mv $DIRECTORY/$name $DIRECTORY/$RENAME
rm "$DIRECTORY/remote.zip"

for f in $DIRECTORY/$RENAME/js/*; do
  ln -s $f resources/js$(basename $f)
done

if [[ "$SKIP_REFRESH" == "false" ]]; then
  ver="$(bash $DIRECTORY/$RENAME/scripts/download.sh --version)"
  if [[ "$ver" != "$SCRIPT_VERSION" ]]; then
    echo "#!/bin/bash" > .cleanup.sh
    echo "rm download.sh" >> .cleanup.sh
    echo "cp \"$DIRECTORY/$RENAME/scripts/download.sh\" \"download.sh\"" >> .cleanup.sh
    echo "rm \".cleanup.sh\" & disown" >> .cleanup.sh
    echo "exit 0" >> .cleanup.sh
    bash .cleanup.sh & disown
  fi
fi

