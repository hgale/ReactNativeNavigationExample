#!/bin/bash

echo "**** Installing"

# Homebrew
if ! [ -x "$(command -v brew)" ]; then
  echo "Installing Homebrew....."
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

# NPM
if ! [ -x "$(command -v npm)" ]; then
  echo "Installing npm....."
  brew install npm
fi

# NVM
if ! [ -x "$(command -v nvm)" ]; then
  echo "Install nvm....."
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
fi

# Node
if ! [ -x "$(command -v node)" ]; then
  echo "Install node....."
  nvm install node
  nvm use node
fi

# Node modules
echo "Installing react native modules....."
npm install

echo "Installing linters....."
npm run install-linters

# Bundler for Ruby dependencies
if ! [ -x "$(command -v bundle)" ]; then
  echo "Installing Bundler....."
  gem install bundler
fi

# Node
if ! [ -x "$(command -v pod)" ]; then
  echo "Install cocoapods....."
  gem install cocoapods
fi

echo "Install pods....."
pod install --project-directory=./ios/
