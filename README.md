# Interview Question: Group Array Elements

## Project overview

This is a tiny HTML and JavaScript web app, bundled with [ParcelJS](https://parceljs.org/), which I chose since it is low-config and quick to set up.

A bundler feels a little overkill for this problem but I chose to use one so I can include unit testing, as well as minification for production.

[Jest](https://jestjs.io/) is used for unit tests.

Time spent: just over 1.5 hours (about 4 [pomodoros](https://en.wikipedia.org/wiki/Pomodoro_Technique) 🍅), not including writing this README.

## Important Files

The main `groupArrayElements` method is defined in `src/groupArrayEls.js`. Its unit tests are defined in `test/groupArrayEls.test.js`.

## Running the project

### You will need

- [NodeJS](https://nodejs.org/en/)
- [npm CLI](https://docs.npmjs.com/cli/v7)

### Running the app

1. Clone the repository and `cd` into the new directory.
    ```bash
    git clone git@github.com:aileen-r/group-array-elements-interview-question.git
    cd group-array-elements-interview-question
    ```
    - alternatively, you can download the `.zip` from GitHub.
2. Run `npm install` to install the dev dependencies.
3. Run `npm start` and open http://localhost:1234 in your web browser.

The method `groupArrayElements(array, n)` is available on the `window` object so you can call it from the browser console.

### Running unit tests

Run `npm run test` to run the test suite, or `npm run test:watch` to run tests while watching for code changes.

### Production build

`npm run build` generates the production-ready files in the `dist` folder. 

You can run the `dist` folder in a local server for testing (I like the [LiveServer vscode extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)). Alternatively, I have deployed this to https://aileen-r-group-array-elements-interview-question.netlify.app/ for easy viewing.