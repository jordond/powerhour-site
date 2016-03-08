#!/bin/bash

cd /usr/src

if [ -z "$staging" ]; then
  echo "Checking out master branch";
  git checkout master
else
  echo "Checking out develop branch";
  git checkout develop
fi

git pull
npm install --unsafe-perm
npm run build
npm start