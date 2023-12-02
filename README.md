# This is Next.js PWA sample project.

References: 
  - [next.js / examples / with-docker-compose /](https://github.com/vercel/next.js/tree/canary/examples/with-docker-compose)
  - https://zenn.dev/tns_00/articles/next-pwa-install

## Build docker image

Build docker image
```sh
docker-compose build
```

## Run dev environment

Execute container:
```sh
docker-compose up
```

Show page: http://localhost:3000/


## Created docker packages

This next-app is created by the following:
```sh
docker-compose run --rm app yarn create next-app --ts --eslint --tailwind --use-yarn --src-dir --app  --import-alias "@/*" ./next-app
docker-compose run -w /usr/app --rm app yarn add @mui/material @emotion/react @emotion/styled
```

