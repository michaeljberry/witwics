# witwics

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile, Hot-Reload and Host for Development

```sh
npm run host
```

Hosting allows the app to be accessed from another device on the same LAN.

If your development machine is using MacOS, ensure that you have "Remote Management"
enabled in your settings. Then run `npm run host` on the development machine. At this
point, you should see something similar to this:

```
> witwics@0.0.0 host
> vite --host


  VITE v5.4.8  ready in 148 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.86.238:5173/
  ➜  Network: http://192.168.63.1:5173/
  ➜  press h + enter to show help
```

Now, using another device in the same LAN, open a browser and enter one of the
network URI's in the address bar.

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
