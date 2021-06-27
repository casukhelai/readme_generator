// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Create dictionary of license name to link
  const badge = {
    "MIT": "https://img.shields.io/badge/License-MIT-yellow.svg",
    "GNU v3" : "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "Apache 2.0" : "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    "Mozilla Public License 2.0" : "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
    
  }
  if (license in badge){
    return `[![License: ${license}](${badge[license]})](${renderLicenseLink(license)})`;
  } else 
  // if unlicensed
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // put the corresponding link w/out parenthesis
  return {
    "MIT" : "https://opensource.org/licenses/MIT",
    "GNU v3" : "https://www.gnu.org/licenses/gpl-3.0",
    "Apache 2.0" : "https://opensource.org/licenses/Apache-2.0",
    "Mozilla Public License 2.0" : "https://opensource.org/licenses/MPL-2.0"
  }[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // This is the block of text about the license
  if(license != "Unlicense"){
    return `
    This repository is under the [${license}](${renderLicenseLink(license)}).`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](##installation)
  * [Usage](##usage)
  * [Contribution](##contribution)
  * [Test Instructions](##testing)
  * [Question](##questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribution Guidelines
  ${data.contribution}

  ## Test Instruction
  ${data.testing}

  ## Questions
  If you have any further questions please contact me at [${data.email}](mailto:${data.email}). View more of my work at [${data.username}](https://github.com/${data.username}).
  

`;

}

module.exports = generateMarkdown;
