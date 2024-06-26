function renderLicenseBadge(license) {
    if (license !== 'no license') {
        return `
      ![badge](https://img.shields.io/badge/license-${license}-blue)
        `;
      } else {
        return ' ';
      }
}

function renderLicenseLink(license) {
    if (license !== 'no license') {
        return `
        [${license}](https://choosealicense.com/licenses/${license})
          `;
        } else {
          return ' ';
        }
}

function renderLicenseSection(license) {
    if (license !== 'no license') {
        return `
        ## [License](#table-of-contents)
      
        The application is covered under the following license:
      
        ${renderLicenseLink(license)}
          `;
        } else {
          return ' ';
        }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ${data.description}

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}
  
  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)
  
  ${renderContributingSection(data.confirmContributers, data.contribute)}

  ## [Tests](#table-of-contents)

  ${data.test}

  ## [Questions](#table-of-contents)

  If you have any further questions, please reach out to me on:
  
  [Email: ${data.email}](mailto:${data.email})
  
  [GitHub](https://github.com/${data.githubUsername})
 
`;
}

module.exports = generateMarkdown;