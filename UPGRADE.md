# Upgrade guide

## Upgrading a library based on create-react-library

To upgrade a library based on `create-react-library`
- Clone updated `create-react-library` in a new folder
  ```sh
  git clone https://github.com/DimiMikadze/create-react-library.git new-create-react-library
  ```
- Copy `config`, `public`, `scripts` folders over to your project
- Copy `.gitignore`, `.npmignore` files over to your project
- Copy and adapt `src/demo` folders over to your project
- Copy and adapt `.travis.yml`, `package.json` files over to your project
- Update dependencies
  ```sh
  yarn install
  ```

<br/>
<br/>

## Upgrading create-react-library

To upgrade `create-react-library` project
- Fork [DimiMikadze/create-react-library](https://github.com/DimiMikadze/create-react-library.git) repository
- Clone your fork
- Create a new `create-react-app` project in another folder and `eject`
  ```sh
  npx create-react-app my-app-tmp

  cd my-app-tmp

  yarn eject
  ```

- Copy `config`, `public`, `scripts` folders over to your `create-react-library` fork folder
- Check each changed file and restore changes marked with `// CRL` comments

- Copy `scripts/build.js` from `create-react-app` to `scripts/demo.js` of your `create-react-library` fork folder
- Edit changes to `scripts/demo.js` and restore changes marked with `// CRL` comments

- Copy files inside `src` from `create-react-app` to `src/demo` of your `create-react-library` fork folder
- Edit changes to files inside `src/demo` to keep `create-react-library` changes

- Copy `.gitignore` to your `create-react-library` fork folder
- Edit `.gitignore` to keep `create-react-library` changes

- Copy `package.json` from `create-react-app`
- Edit `package.json` to keep `create-react-library` changes
- Edit `package.json` to have version equals to `create-react-app` version

- Check that `yarn start`, `yarn test`, `yarn build` and `yarn demo` scripts still work and produce the same output as before.

- Open a `PR` to [DimiMikadze/create-react-library](https://github.com/DimiMikadze/create-react-library.git) repository