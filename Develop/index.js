const inquirer = require("inquirer");

const fs = require("fs");

function generateLicense(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache 2.0 License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "IBM Public License Version 1.0") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

function writeToFile(fileName, data) {
  var fileText = "";
  fileText += ` # ${data.title}\n\n`;
  fileText += `${generateLicense(data.license)}\n\n`;
  fileText += `## Table of Contents\n\n`;
  fileText += ` [Description](#description)\n\n [Installation](#installation)\n\n [Usage-Information](#usage-information)\n\n [Contribution-Guidelines](#contribution-guidelines)\n\n [Test-Instructions](#test-instructions)\n\n [License](#license)\n\n [Questions](#questions)\n\n`;
  fileText += `## Description\n\n${data.description}\n\n`;
  fileText += `## Installation\n\n${data.installation}\n\n`;
  fileText += `## Usage Information\n\n${data.usage}\n\n`;
  fileText += `## Contribution Guidelines\n\n${data.contribution}\n\n`;
  fileText += `## Test Instructions\n\n${data.test}\n\n`;
  fileText += `## License\n\nNOTICE: This application is covered under the ${data.license}\n\n`;
  fileText += `## Questions\n\nIf you have any further questions, please reach out to me on Email or GitHub\n\n`;
  fileText += `<a href="mailto:${data.email}">${data.email}</a>\n\n`;
  fileText += `[Link to Github](https://github.com/${data.github})\n\n`;
  fs.writeFile(fileName, fileText, (err) =>
    err ? console.error(err) : console.log("Yay, you now have successfully created a README!")
  );
}

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title/name of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Add the description of your project:",
      },
      {
        type: "input",
        name: "installation",
        message: "Add the installation instructions of your project:",
      },
      {
        type: "input",
        name: "usage",
        message: "Add the usage information of your project:",
      },
      {
        type: "input",
        name: "contribution",
        message: "Add the contribution guidelines of your project:",
      },
      {
        type: "input",
        name: "test",
        message: "Add the test instructions of your project:",
      },
      {
        type: "list",
        name: "license",
        message: "Select the type of license you would like for your project:",
        choices: [
          "MIT",
          "Apache 2.0 License",
          "IBM Public License Version 1.0",
          "Mozilla Public License 2.0",
          "Unlicense",
        ],
      },      
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub handle?",
      },
    ])
    .then((data) => {
      writeToFile("README_sample.md", data);
    });
}

init();