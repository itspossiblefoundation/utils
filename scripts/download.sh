#!/bin/bash

SCRIPT_VERSION="v0.2.9"

REPO_URL=""
ZIP_URL=""
SKIP_REFRESH=false
DIRECTORY="remote_resources"
RENAME="latest"
REMOTE_REPO_KEY="REMOTE_REPO"
USE_SHARED_KEY="REMOTE_USE_SHARED"
SHARED_FOLDER_KEY="REMOTE_SHARED_FOLDER"
ZIP_URL_KEY="REMOTE_ZIP_URL"
SYM_LINK_JS="external"
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
Symlink JS#-l#--link#Link name#"external"
Direct ZIP URL#-z#--zip-url#URL to ZIP Archive#(none)
EOF
}

function get_env() {
  cat .env | grep "$1" | cut -f2- -d '='
}

function has_env() {
  if [[ "$(cat .env | grep "$1")" == "" ]]; then
    echo 0
  else
    echo 1
  fi
}

function download() {
  download_url="$ZIP_URL"

  if [[ "$download_url" == "" ]]; then
    if [[ $(has_env "$ZIP_URL_KEY") == 1 ]]; then
      download_url="$(get_env "$ZIP_URL_KEY")"
    fi
  fi

  if [[ "$download_url" == "" ]]; then
    download_release
  else
    download_zip "$download_url"
  fi
}

function download_release() {
  if [[ "$REPO_URL" == "" ]]; then
    if [[ $(has_env "$REMOTE_REPO_KEY") == 0 ]]; then
        echo "Add $REMOTE_REPO_KEY to .env"
        exit 1
    fi

    repo="$(get_env "$REMOTE_REPO_KEY")"

    if [[ "$repo" == "" ]]; then
        echo "$REMOTE_REPO_KEY in .env not set!"
        exit 1
    fi
  else
    repo="$REPO_URL"
  fi

  zip_url="$(curl -sL "$repo" | grep "zipball_url" | cut -d ':' -f2-3 | tr -d '", ')"

  download_zip "$zip_url"
}

function download_zip() {
  wget -q -O "$DIRECTORY/remote.zip" "$1"
  extract_zip
}

function extract_zip() {
  name="$(unzip -l "$DIRECTORY/remote.zip" | grep -v 'Archive' | grep / | head -n1 | sed -e 's/^[ \t]*//g' | tr -s '[:space:]' | cut -d ' ' -f4 | cut -d '/' -f1)"
  unzip -q -o "$DIRECTORY/remote.zip" -d "$DIRECTORY"

  if [[ -d $DIRECTORY/$RENAME ]]; then
      rm -rf "$DIRECTORY/$RENAME"
  fi

  mv $DIRECTORY/$name $DIRECTORY/$RENAME
  rm "$DIRECTORY/remote.zip"
}

function link_shared() {
  if [[ $(has_env "$SHARED_FOLDER_KEY") == 0 ]]; then
    echo "Cannot find $SHARED_FOLDER_KEY in .env and trying to use shared folder."
    exit 1
  fi

  folder="$(get_env "$SHARED_FOLDER_KEY")"

  if [[ ! -d "$folder" ]]; then
    echo "$folder does not exist."
    exit 1
  fi

  rm -rf "./$DIRECTORY/$RENAME"

  ln -s "$(realpath $folder)" "./$DIRECTORY/$RENAME"
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
      REPO_URL="$2"
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
      REMOTE_REPO_KEY="$2"
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
    -l|--link)
      SYM_LINK_JS="$2"
      shift
      shift
      ;;
    -z|--zip-url)
      ZIP_URL="$2"
      shift
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

if [[ "$(get_env "$USE_SHARED_KEY")" == "true" ]]; then
  link_shared
else
  download
fi

if [[ -d "./resources/js/$SYM_LINK_JS" ]]; then
    rm -rf "./resources/js/$SYM_LINK_JS"
fi

mkdir -p "./resources/js/$SYM_LINK_JS"
echo "*" > "./resources/js/$SYM_LINK_JS/.gitignore"

for f in $(pwd)/$DIRECTORY/$RENAME/js/*; do
    file="$(basename $f)"
    ln -s "$f" "./resources/js/$SYM_LINK_JS/$file"
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

