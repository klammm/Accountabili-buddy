#!/usr/bin/env bash

SOURCE_ENV_FILE="${BUDDYBUILD_SECURE_FILES:-.}/.env.production"
TARGET_ENV_FILE="./.env.production"

cp -v $SOURCE_ENV_FILE $TARGET_ENV_FILE
