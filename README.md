# This is Next.js PWA sample project.

> ### References:
> - [next.js / examples / with-docker-compose /](https://github.com/vercel/next.js/tree/canary/examples/with-docker-compose)
> - https://zenn.dev/tns_00/articles/next-pwa-install

## Usage

### Open DevContainer in VSCode

As a prerequisite, VSCode must have the Dev Containers extension.

The first time, execute `Dev Containers: Rebuild and Reopen Container` from the command palette of VSC (e.g. [F1]).

Next time, select `Reopen in Container` from the menu of the remote connection icon under the gear icon or from the command palette.

### Debug on VSCode

Select from the following VSCode debug configurations for debugging.

- debug server-side
- debug client-side
- debug full stack


---
---
## Customize Container

### Build docker image

Use commands of "Dev Containers" extension on VSCode command palette.

- Dev Containers: Rebuild and Reopen Container
- Dev Containers: Reopen in Container
- etc.


## Created node modules

This next-app is created by the following:

```sh
docker-compose run --rm app yarn create next-app --ts --eslint --tailwind --use-yarn --src-dir --app  --import-alias "@/*" ./next-app
docker-compose run -w /usr/app --rm app yarn add @mui/material @emotion/react @emotion/styled
```
