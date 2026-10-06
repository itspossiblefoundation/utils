#!/bin/sh

repo="$(cat .env | grep 'REMOTE_REPO' | cut -f2- -d '=')"

curl -sL "$repo" | grep "zipball_url" | cut -d ':' -f2-3 | tr -d '", ' | wget -q -O 'remote_resources/remote.zip' -i -

name="$(unzip -l 'remote_resources/remote.zip' | grep -v 'Archive' | grep / | head -n1 | sed -e 's/^[ \t]*//g' | tr -s '[:space:]' | cut -d ' ' -f4 | cut -d '/' -f1)"
unzip -q -o "remote_resources/remote.zip" -d "remote_resources"

mv remote_resources/$name/* remote_resources/
rmdir remote_resources/$name
rm "remote_resources/remote.zip"

