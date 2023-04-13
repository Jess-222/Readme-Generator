function renderLicenseBadge(data) {
  if (data.license === "None") {
    ''
  }
  if (data.license === "MIT") {
    return '![License](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
  if (data.license === "Apache") {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }
  if (data.license === "Boost") {
    return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
  }
}

function renderLicenseLink(data) {
  if (data.license === "None") {
    ''
  }
  if (data.license === "MIT") {
    return '[Link To License](https://opensource.org/licenses/MIT)'
  }
  if (data.license === "Apache") {
    return '[Link To License](https://opensource.org/licenses/Apache-2.0)'
  }
  if (data.license === "Boost") {
    return '[Link To License](https://www.boost.org/LICENSE_1_0.txt)'
  }
}

function renderLicenseSection(data) {
  if (data.license === "None") {
    return ''
  } else {
    return `## License
${renderLicenseBadge(data)} - ${renderLicenseLink(data)}`
  }
}

function tableOfContentsLicenseLink(data) {
  if (data.license === "None") {
    return ''
  } else {
    return `* [license](#license)`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  * [Description](#description)
  ${tableOfContentsLicenseLink(data)}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Test](#test)

  ${renderLicenseSection(data)}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## Test
  ${data.test}
`;
}

module.exports = generateMarkdown;
