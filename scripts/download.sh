#!/bin/sh

if [[ ! -f "package.json" ]]; then
    echo "Move this script to project root before running!"
    exit 1
fi

if [[ ! -d "remote_resources" ]]; then
    mkdir "remote_resources"
    touch "remote_resources/.gitkeep"

    if [[ "$(cat .gitignore | grep '/remote_resources')" == "" ]]; then
        echo "/remote_resources" >> .gitignore
    fi
fi

if [[ "$(cat .cat | grep 'REMOTE_REPO')" == "" ]]; then
    echo "Add REMOTE_REPO to .env"
    exit 1
fi

repo="$(cat .env | grep 'REMOTE_REPO' | cut -f2- -d '=')"

if [[ "$repo" == "" ]]; then
    echo "REMOTE_REPO in .env not set!"
    exit 1
fi

curl -sL "$repo" | grep "zipball_url" | cut -d ':' -f2-3 | tr -d '", ' | wget -q -O 'remote_resources/remote.zip' -i -

name="$(unzip -l 'remote_resources/remote.zip' | grep -v 'Archive' | grep / | head -n1 | sed -e 's/^[ \t]*//g' | tr -s '[:space:]' | cut -d ' ' -f4 | cut -d '/' -f1)"
unzip -q -o "remote_resources/remote.zip" -d "remote_resources"

mv remote_resources/$name/* remote_resources/
rmdir remote_resources/$name
rm "remote_resources/remote.zip"

