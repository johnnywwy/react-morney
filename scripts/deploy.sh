#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote remove origin
git remote add origin git@github.com:johnnywwy/react-morney-website.git &&
git branch -M main
git push -u origin main
cd ..
