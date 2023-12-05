# This is Next.js PWA sample project.

> ### References:
> - [next.js / examples / with-docker-compose /](https://github.com/vercel/next.js/tree/canary/examples/with-docker-compose)
> - https://zenn.dev/tns_00/articles/next-pwa-install

## Open Devcontainer in VSC

As a prerequisite, VSC must have the Dev Containers extension.

The first time, execute `Dev Containers: Rebuild and Reopen Container` from the command palette of VSC (e.g. [F1]).

Next time, select `Reopen in Container` from the menu of the remote connection icon under the gear icon or from the command palette.


---

## Build docker image

Build docker image
```sh
docker-compose build
```

## Connect to container

Open "Remote Explorer" on the left toolbar of the VSC and attach the development container.


## Start debug

Show page: http://localhost:3000/


## Created docker packages

This next-app is created by the following:
```sh
docker-compose run --rm app yarn create next-app --ts --eslint --tailwind --use-yarn --src-dir --app  --import-alias "@/*" ./next-app
docker-compose run -w /usr/app --rm app yarn add @mui/material @emotion/react @emotion/styled
```

