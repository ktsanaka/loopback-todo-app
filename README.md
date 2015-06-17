# LoopBack Todo App with Docker

### 1. Build the Docker-Image
```sh
docker build -t ktsanaka/strongloop .
```

### 2. Run arc
```sh
docker run -d -p 3000:3000 -p 3001:3001 ktsanaka/strongloop
```

### 3. Run App Controller with arc interface
```sh
http://192.168.59.103:3001
```

### 4. Open client in browser
```sh
http://192.168.59.103:3000/index.html
```

#### TODO. Run arc with local sources (api not working! need fix)
```sh
docker run -d -p 3001:3001 -v /c/Users/strongloop/loopback-todo-app:/app-server ktsanaka/strongloop
```