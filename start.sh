#!/bin/bash

# Start Docker Desktop (macOS only)
open -a Docker

# Start server
cd ./server && yarn dev &

# Start client
cd ./client && yarn dev &