# LoopBack Todo App with Docker

## Production

### 1. Build the Docker-Image
```sh
docker build -t ktsanaka/strongloop .
```

### 2. Run Server Container
```sh
docker run -d -p 3000:3000 ktsanaka/strongloop
```

## Development

### 1. Build the Docker-Image
```sh
docker build -t ktsanaka/strongloop-dev -f ./Dockerfile.dev .
```

### 2. Run Development Container
```sh
docker run -i -t -p 3000:3000 -p 3001:3001 -v /c/Users/strongloop/loopback-todo-app:/app-server ktsanaka/strongloop-dev
```

#### Start MySQL Server && create Todo-DB && copy node_modules
```sh
service mysql start && mysql < db.sql && cp -a /tmp/node_modules /app-server
```

### Run StrongLoop ARC interface
```sh
PORT=3001 slc arc
```
#### Access StrongLoop ARC interface
```sh
http://192.168.59.103:3001
```

### Run Server
```sh
node .
```
#### Access Server
```sh
http://192.168.59.103:3000/index.html
http://192.168.59.103:3000/explorer
```