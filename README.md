# LoopBack Todo App with Docker

### 1. Build the Docker-Image
```sh
docker build -t ktsanaka/strongloop .
```

### 2a. Run arc with local sources (server not working! need fix)
```sh
docker run -d -p 3001:3001 -v /c/Users/strongloop/loopback-todo-app:/app-server ktsanaka/strongloop
```

### 2b. Run arc
```sh
docker run -d -p 3000:3000 -p 3001:3001 ktsanaka/strongloop
```

### 2c. Run server
```sh
docker run -d -p 3000:3000 ktsanaka/strongloop node .
```