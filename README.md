# envoy-dashboard

This project displays a simple dashboard of the production and consumption of electricity from an Enphase Envoy device.

To use the dashboard, serve it from a web server. To test locally you can run `npm run serve`.

The dashboard will not get data from the Envoy device unless you can add an CORS header to the response from the device. I used HAProxy to achieve this.


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

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration
