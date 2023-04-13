// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license === "None") {
    return ''
  } else {
    return `##License
${renderLicenseBadge(data)} - ${renderLicenseLink(data)}`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  * [description](#description)
  * [installation](#installation)
  * [usage](#usage)
  * [credits](#credits)
  * [license](#license)
  * [test](#test)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ${renderLicenseSection(data)}
  ## Test
  ${data.test}
`;
}

module.exports = generateMarkdown;
