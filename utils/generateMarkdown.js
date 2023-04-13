function renderLicenseBadge(data) {}

function renderLicenseLink(data) {}

function renderLicenseSection(data) {
  if(data.license === "None") {
    return ''
  } else {
    return `##License
${renderLicenseBadge(data)} - ${renderLicenseLink(data)}`
  }
}

function tableOfContentsLicenseLink(data) {
  if(data.license === "None") {
    return ''
  } else {
    return `* [license](#license)`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  * [description](#description)
  * [installation](#installation)
  * [usage](#usage)
  * [credits](#credits)
  ${tableOfContentsLicenseLink(data)}
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
