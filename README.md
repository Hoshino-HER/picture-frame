# This is Next.js PWA sample project.

References: 
  - https://zenn.dev/tns_00/articles/next-pwa-install


## Create Docker

Create container:
```sh
mkdir src
docker-compose run --rm app yarn create next-app --ts --eslint --tailwind --use-yarn .
```
Select default values for all questions at the time of creation.

Execute container:
```sh
docker-compose up
```

Show page: http://localhost:3000/


## Add modules

```sh
docker-compose run -w /usr/app --rm app yarn add @mui/material @emotion/react @emotion/styled
```
