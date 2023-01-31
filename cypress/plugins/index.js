const cucumber = require("cypress-cucumber-preprocessor").default;
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
  on("file:preprocessor", cucumber());
  on('before:run', async(details) => {
      console.log('override before:run');
      await beforeRunHook(details);
  });

  on('after:run', async() => {
      console.log('override after:run');
      await afterRunHook();
  });
}
