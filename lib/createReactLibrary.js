'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const program = require('commander');
const spawn = require('cross-spawn');
const chalk = require('chalk');
const rimraf = require('rimraf');
const fs = require('fs-extra');

const validateLibName = require('./utils/validateLibName');
const cloneRepository = require('./utils/cloneRepository');
const updatePackageJson = require('./utils/updatePackageJson');
const tryGitInit = require('./utils/tryGitInit');
const isYarnInstalled = require('./utils/isYarnInstalled');

const packageJson = require('./package.json');

let projectName;

program
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')}`)
  .action(name => {
    projectName = name;
  })
  .on('--help', () => {
    console.log();
    console.log(`Only ${chalk.green('<project-directory>')} is required.`);
  });

program.parse(process.argv);

const createLibrary = () => {
  validateLibName(projectName, program);

  // Clone template from github
  if (!cloneRepository(packageJson, projectName)) {
    console.log();
    console.log(chalk.red('Error: Cloning of the repository failed.'));
    process.exit(1);
  }

  // Remove unneeded files and folders
  rimraf.sync(`${projectName}/.git`);
  rimraf.sync(`${projectName}/lib`);

  rimraf.sync(`${projectName}/LICENSE.md`);
  rimraf.sync(`${projectName}/CONTRIBUTING.md`);
  rimraf.sync(`${projectName}/CODE_OF_CONDUCT.md`);
  rimraf.sync(`${projectName}/CHANGELOG.md`);
  rimraf.sync(`${projectName}/UPGRADE.md`);
  rimraf.sync(`${projectName}/README.md`);

  rimraf.sync(`${projectName}/.github`);

  // Move all files from template to root folder
  fs.moveSync(`${projectName}/template/config`, `${projectName}/config`);
  fs.moveSync(`${projectName}/template/public`, `${projectName}/public`);
  fs.moveSync(`${projectName}/template/scripts`, `${projectName}/scripts`);
  fs.moveSync(`${projectName}/template/src`, `${projectName}/src`);

  fs.moveSync(
    `${projectName}/template/.npmignore`,
    `${projectName}/.npmignore`
  );
  fs.moveSync(
    `${projectName}/template/.gitignore`,
    `${projectName}/.gitignore`
  );
  fs.moveSync(`${projectName}/template/yarn.lock`, `${projectName}/yarn.lock`);
  fs.moveSync(
    `${projectName}/template/package.json`,
    `${projectName}/package.json`
  );
  fs.moveSync(`${projectName}/template/README.md`, `${projectName}/README.md`);

  // Delete empty template folder
  rimraf.sync(`${projectName}/template`);

  // Update package.json name
  updatePackageJson(`${projectName}/package.json`, projectName);

  // Choose which package manager to use
  const packageManager = isYarnInstalled() ? 'yarn' : 'npm';

  // Install dependencies
  console.log();
  console.log('Installing dependencies');
  console.log();
  spawn.sync(packageManager, ['install'], {
    cwd: `${projectName}`,
    stdio: 'inherit',
  });

  // Try to initialize new git repository
  if (tryGitInit(projectName)) {
    console.log();
    console.log('Initialized a git repository.');
  }

  // Success
  console.log();
  console.log(
    chalk.green('Success!'),
    `Created ${projectName} at ${process.cwd()}`
  );
  console.log();

  console.log(
    `To start the application, ${chalk.cyan(
      'cd'
    )} inside the newly created project and run ${chalk.cyan(
      packageManager + ' start'
    )} `
  );
  console.log();
  console.log(chalk.cyan(`    cd ${projectName}`));
  console.log(chalk.cyan(`    ${packageManager} start`));
  console.log();
};

createLibrary();
