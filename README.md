# vue-demo-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### IMPORTANT! Specify backend (api server) url
### go to src/services/data-service.js and change serverUrl variable to 'http://<your-cluster-ip>:31651'

### How to build and push docker image
```
sudo docker build -t vue-demo-app .
sudo docker tag vue-demo-app <your-docker-hub-username>/vue-demo-app:latest
sudo docker push <your-docker-hub-username>/vue-demo-app:latest
```