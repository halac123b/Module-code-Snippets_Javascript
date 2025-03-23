#!/bin/bash

# Redirecting console.log to log file.
# Please visit ./logs/app to view the application logs and visit the ./logs/db to view the Database logs and visit the ./log/console for the console.log
# Log rotating for every 7 days.

echo "************************************************************************************"
echo "**************************** Hyperledger Explorer **********************************"
echo "************************************************************************************"

export LOG_LEVEL_APP=${LOG_LEVEL_APP:-debug}