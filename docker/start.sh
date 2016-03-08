#!/bin/bash

cd /usr/src

if [ -z "$staging" ]; then
  echo "Checking out develop branch";
  git checkout develop
fi

git pull
npm install
npm run start