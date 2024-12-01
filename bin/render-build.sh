#!/usr/bin/env bash
# exit on error
set -o errexit

# Build commands for the frontend
rm -rf public # Clear the existing public folder
npm install --prefix client
npm run build --prefix client
npm run export --prefix client

# Build commands for the backend
bundle install
bundle exec rake db:migrate
bundle exec rake db:seed
