# Create React Library ![npm](https://img.shields.io/npm/dm/@udilia/create-react-library) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)

Create React NPM Library with no build configuration, based on Facebook's [Create React App](https://github.com/facebook/create-react-app). We are constantly updating the repository with the updates of create-react-app, so we have all new features and bug fixes of it.

## Quick Overview

```sh
npx @udilia/create-react-library my-lib
cd my-lib
npm start
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/DimiMikadze/f984a074acea510e91b445fae9b39b44))_

Then open [http://localhost:3000](http://localhost:3000) to see demo library running in the browser.

<p align='center'>
<img src='https://res.cloudinary.com/dkkf9iqnd/image/upload/v1570617179/screencast-crl_fdjtyt.gif' alt='npm start'>
</p>

## Creating a Library

You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine.

To create a new library, you may choose one of the following methods:

### npx

```sh
npx @udilia/create-react-library my-lib
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/DimiMikadze/f984a074acea510e91b445fae9b39b44))_

### npm

```sh
npm init @udilia/react-library my-lib
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create @udilia/react-library my-lib
```

_`yarn create` is available in Yarn 0.25+_

It will create a directory called `my-lib` inside the current folder.
Inside that directory, it will generate the initial project structure and install dependencies.

```
my-lib
├── config
├── node_modules
├── public
├── scripts
├── src
    ├── demo
    ├── lib
├── .gitignore
├── package.json
├── README.md
```

All library files are located inside **src/lib** folder.

Inside **src/demo** folder, you can test your library while developing.

Once the installation is done, you can open your project folder:

```
cd my-lib
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the library in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test` or `yarn run test`

Runs the test watcher in an interactive mode.

### `npm run build` or `yarn build`

Builds the library for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm publish`

Publishes the library to NPM.

## Contributing

Please read our [CONTRIBUTING.md](https://github.com/dimimikadze/create-react-library/blob/master/CONTRIBUTING.md) before submitting a Pull Request to the project.

## Typescript

[Adding Typescript support](https://gist.github.com/DimiMikadze/f25e1c5c70fa003953afd40fa9042517)

## Troubleshooting

### Usage of other libraries within your library

- Add the library as a peer dependency in package.json (effectively requiring the calling project to provide this dependency)
- Add the library as a dev dependency in package.json (effectively allowing this library to successfully build without complaining about not having this dependency)
- Add the library to the externals config in your webpack.config file(s). By default, only react and react-dom are there, meaning that those are the only two libraries that you can use within your new shared library.

## Example libraries built with Create React Library

https://github.com/DimiMikadze/react-under-construction

## License

[MIT License](https://github.com/dimimikadze/create-react-library/blob/master/LICENSE.md) Copyright (c) 2019 [Dimi Mikadze](https://dimimikadze.com/)
