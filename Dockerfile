# sudo docker build -t sleepyzzz-websocket-api .
# sudo docker run -d -p 80:80 sleepyzzz-websocket-api
# sudo docker ps
# sudo docker exec -it <container id> bash

FROM ubuntu
RUN apt-get update
RUN apt-get -y install apt-utils curl

# Configure NGINX
RUN apt-get -y install nginx
RUN rm -v /etc/nginx/nginx.conf
ADD deploy/nginx.conf /etc/nginx/

# Install node.js and pm2
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get -y install nodejs
RUN npm install pm2 -g
ADD deploy/ecosystem.config.js /
RUN mkdir /var/www/production

# Build Backend
ADD server /var/www/production/sleepyzzz-websocket-api
RUN cd /var/www/production/sleepyzzz-websocket-api && npm install

EXPOSE 80

CMD pm2 start ecosystem.config.js && /usr/sbin/nginx
