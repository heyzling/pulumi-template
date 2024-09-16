#!/bin/bash

set -o errexit -o nounset -o pipefail

SCRIPT=$(readlink -f "$BASH_SOURCE")
SCRIPT_DIR=$(dirname "$SCRIPT")

echo "====> Install dependencies"
npm i

echo "====> Init stacks"
stacks=("test" "prod")
for stack in "${stacks[@]}"; do
  echo "Init $stack"
  if ! pulumi stack ls | grep -q $stack; then
    pulumi stack init $stack
  fi;
done

echo "====> Delete init script: ./init.sh"
rm -f $SCRIPT