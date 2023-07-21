// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "GNU AGPLv3") {

    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU GPLv3") {

    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU LGPLv3") {

    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "Mozilla Public License 2.0") {

    return "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "MIT") {

    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache License 2.0") {

    return "[![License:Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "The Unlicense") {

    return "[License: Unlicense](https://upload.wikimedia.org/wikipedia/commons/e/ee/Unlicense_Blue_Badge.svg)";
  } else if (license === "Boost Software License 1.0") {

    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else {
    return `  No Badge Selected  `;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {

  if (!license) {
    return '';
  }

  return `
  <a href="https://choosealicense.com/licenses/${license}">
    ${license}
  </a>
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ## License

  This project is licensed under the ${license} license.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.projecttitle}
  
  ${data.description}

  ${data.license}

  ...
  
  ## Table of Contents

  - [User Story](#userstory)
  - [Acceptance Criteria](#acceptance)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contibuting)
  - [Tests](#tests)
  - [Questions](#questions)
  ...

  ## User Story

  ${data.userstory}
  ...

  ## Acceptance Criteria

  ${data.criteria}
  ...

  ## Usage 

    [Deployment URL](${data.deploy})

  ${data.usage}
  ...

  ## Screenshot

  // '{data.screenshot}'

  ![]()
  ...

  ## Installation

  The URL will mostly work in all browsers. 
  The preferred Browser is Google Chrome and the extension Chrome DevTools Extension to view the source code. 
  GitHub is a cloud service for projects/repositories. 
  You can simply visit the URL to view the repository in your browser 

  ${data.install}
  ...

  ## Contributing

  Follow the steps below if you wish to contribute to this application:

  - Fork the repository from github
  - Create a new branch and switch to your branch using 'git checkout branchname'
  - Commit your changes
  - Push your branch using 'git push' to GitHub
  - Create a new pull request
  - Your code will get reviewed and your branch will be merged.
  ...

  ## Tests

  ${data.test}
  ...

  ## Questions

  My name is ${data.username}. ${'\n'} If you have any questions about the repo, open an issue or contact me directly at ${data.emailID}. ${'\n'}You can find more of my work at ${data.github}

  Thank you for reading till the end.
  ...

  ## License

  ${data.license}
  ...

    ${renderLicenseBadge(data.license)}
     ...

    ${renderLicenseLink(data.license)}
    ...

    ${renderLicenseSection(data.license)}
    ...
  
    `;
};

module.exports = generateMarkdown;