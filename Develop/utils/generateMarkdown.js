// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "GPLv2") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `\n
  [MIT License Information](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)`
  }
  if (license === "GPLv2") {
    return `\n
  [GPLv2 License Information](https://github.com/systemd/systemd/blob/main/LICENSE.GPL2)`
  }
  if (license === "Apache") {
    return `\n
  [Apache License Information](https://github.com/moby/moby/blob/master/LICENSE)`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `
    
## License - MIT
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  if (license === "GPLv2") {
    return `
    
## License - GPLv2
The GNU GPL is the most widely used free software license and has a strong copyleft requirement. When distributing derived works, the source code of the work must be made available under the same license. There are multiple variants of the GNU GPL, each with different requirements.`
  }
  if (license === "Apache") {
    return `
    
## License - Apache
A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseSection = renderLicenseSection(data.license);
  let licenseLink = renderLicenseLink(data.license);
  return `# ${data.title}

${licenseBadge}

## Table of Contents
<ol>
  <li><a href="#description">Description</a></li>
  <li><a href="#Installation">Installation</a></li>
  <li><a href="#description">Description</a></li>
</ol>

## Description
${data.description}
${licenseSection} ${licenseLink}
## Installation
${data.install}

## Usage Information
${data.howtouse}

## Contribution Guidelines
${data.contribute}

## Test Instructions
${data.test}

## Questions
[Author: ${data.username}](https://github.com/${data.username})
You can reach me with any questions at my email: [${data.email}](mailto:${data.email})
`;}

module.exports = {generateMarkdown};
