#!/bin/sh
sed -i -r s/"serverUrl\",\"http:\/\/(\b[0-9]{1,3}\.){3}[0-9]{1,3}\b:[0-9]{1,5}"/"serverUrl\",\"http:\/\/$KUBERNETES_IP:$BACKEND_PORT"/ "$(find /nginx/html/js/ -maxdepth 1 -mindepth 1 -name 'app\.*\.js')"

