#!/usr/bin/env bash

apt-get update
apt-get -qq update

sudo apt-get install -qq -y nodejs npm

apt-get install -qq -y curl libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++