# cucumber-playwright-starter

Starter project cucumber-js features using playwright in TypeScript

## After cloning the repo

- run the command `npm install`.

## Execute the tests locally

- run the command `npm test src/tests/features/<FEATURES>` to execute a feature.
- run the command `npm run test:all` to execute all scenarios.
- run the command `npm run test:parallel <NUMBER_OF_WORKERS>` to execute all scenarios in parallel.

## Configure cucumber

In the [cucumber.js](cucumber.js) file, you can modify the cucumber configuration

## Configure playwright

In the [playwright.config.ts](playwright.config.ts) file, you can modify timeouts/headless/screenshot/trace/etc. on the playwright configuration.

## Create a new step

- first write the Given/When/Then sentence:

  ```gherkin
  Given I push "foo" on "bar"
  ```

- run the npm script:

  ```sh
  npm run snippets
  ```

- the script will report the missing step(s): you just need to copy and paste them in the step definitions file:

  ```sh
  Given('I push {string} on {string}', async function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
  ```