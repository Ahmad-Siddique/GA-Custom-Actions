const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const bucket = core.getInput('bucket');
    const region = core.getInput('region');
    const dist = core.getInput('dist-folder');

    console.log("Deploying to S3...");
    
    await exec.exec(`aws s3 sync ${dist} s3://${bucket} --delete`);

    const siteUrl = `http://${bucket}.s3-website-${region}.amazonaws.com`;

    core.setOutput("site-url", siteUrl);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
