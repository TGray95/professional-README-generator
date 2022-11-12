// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
 return `![badge](https://img.shields.io/badge/license-${license}-blue.svg)`
} else {return ''}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)`
  } else {return ''}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
  This application is covered by the ${license} license.`
  } else {return ''}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
 return README = `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Description

  ${data.description}
  ## Installation

  ${data.installation}
  ## Usage

  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing

  ${data.contribution}
  ## Tests

  ${data.tests}
  ## Questions

  [GitHub](https://github.com/${data.username}) <br>
  Send any questions to ${data.email}
`;
}

module.exports = generateMarkdown;
