#!/bin/sh

# set DISPLAY variable to the IP automatically assigned to WSL2
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2; exit;}'):0.0
echo using display: $DISPLAY

# Automatically start D-Bus to allow communication with Cypress GUI app
sudo /etc/init.d/dbus start &> /dev/null

# compile and run
# npm run build
# npm run start  # this will never finish and own the terminal
echo Assuming the webapp to test is already running in a different window!

# go
npm run tests:interactive
