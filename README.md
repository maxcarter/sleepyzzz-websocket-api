# SleepyZzz WebSocket API

## Deployment

### Build Docker Container
```
docker build -t sleepyzzz-websocket-api .
```

### Map Server Port to Docker Container
```
docker run -d -p 80:80 sleepyzzz-websocket-api
```

## Development

### Docker

#### List all Docker Containers
```
docker ps -a
```

#### List all Docker Images
```
docker images -a
```

#### Remove a Docker Container
```
docker stop <Container ID>
docker rm <Container ID>
```

#### Remove a Docker Image
```
docker rmi <Image Id>
```
