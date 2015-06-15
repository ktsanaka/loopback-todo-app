# Set the base image to Ubuntu
FROM ubuntu

# File Author / Maintainer
MAINTAINER Konstantinos TSANAKAS <konstantinos.tsanakas@soprasteria.com>

# Update the repository sources list
RUN apt-get update

# Install node.js
RUN apt-get -y install nodejs nodejs-legacy npm
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*

# Install StrongLoop
RUN npm install -g strongloop

# Copy LoopBack Projekt
ADD https://github.com/ktsanaka/loopback-todo-app/archive/master.tar.gz /
RUN tar xf master.tar.gz
RUN mv loopback-todo-app-master/ app-server/

# Set workdir
WORKDIR /app-server

# Install npm dependencies
RUN npm install

# Expose the ports
EXPOSE 3000 3001

# Run the arc
CMD PORT=3001 slc arc