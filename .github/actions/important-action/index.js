const core = require('@actions/core');

async function run() {
  try {
    const message = "This is output from JS action!";
    core.setOutput("result", message);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
