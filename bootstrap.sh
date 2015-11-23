#!/usr/bin/env bash

sudo apt-get update
sudo apt-get -qq update

sudo apt-get install -y nginx
sudo apt-get install -qq -y git curl libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++