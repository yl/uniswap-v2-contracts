#!/bin/bash

output=$(npm run deploy-factory)
echo "$output"

export FACTORY=${output##*$'\n'}
npm run deploy-router

npm run deploy-multicall

npm run deploy-token