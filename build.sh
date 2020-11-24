#!/usr/bin/env sh
DIR="$( cd "$( dirname "$0" )" && pwd )"
# abort on errors
set -e

cd $DIR/docs
# build
npm run build

# navigate into the build output directory
rm -rf $DIR/dist
mv $DIR/docs/src/.vuepress/dist $DIR