// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !=="none"){
  return `[License](#license)`;
}
return "";
}
// TODO: Create a function that returns the license section of READMEa
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return ` License under the ${license} license.`;

  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.fullName}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Instalation](#installation)
  - [Usage](#usage)
  - [Contact Me](#email)
  - [Credits](#credit)
  - [Testing](#test)
  - [License](#license)

  ## Instalation requirement
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contact Me
 - Full Name: ${data.fullName}
 - Email: ${data.email}
 - Github: ${data.username}
 
  ## Credits
  ${data.credit}
  ## Testing
  ${data.test}
  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
