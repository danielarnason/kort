#!/bin/bash
# Script til at deploye det her i en nginx docker container på port 8080

sudo rm -rf dist/
sudo git pull
sudo npm run build
sudo docker run -it --rm -d -p 8080:80 --name slagelse-kortmaskine -v /home/daarn/kort/dist:/usr/share/nginx/html nginx