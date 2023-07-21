// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "GNU AGPLv3") {
    return "![AGPL v3 License](svg/License-AGPLv3-blue.svg)";
  } else if (license === "GNU GPLv3") {
    return "![GPL v3 License](./svg/License-GPLv3-blue.svg)";
  } else if (license === "GNU LGPLv3") {
    return "![License: LGPL v3](./svg/License-LGPLv3-blue.svg)";
  } else if (license === "Mozilla Public License 2.0") {
    return "![Mozilla Public License 2.0](./svg/License-MPL2.0-brightgreen.svg)";
  } else if (license === "MIT License") {
    return "![License: MIT](./svg/License-MIT-yellow.svg)";
  } else if (license === "Apache License 2.0") {
    return "![License:Apache License 2.0](./svg/License-Apache2.0-blue.svg)";
  } else if (license === "The Unlicense") {
    return "![License: Unlicense](./svg/Unlicense_Blue_Badge.svg)";
  } else if (license === "Boost Software License 1.0") {
    return "![Boost License](./svg/License-Boost201.0-lightblue.svg)";
  } else {
    return `No License Selected`;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {

  if (license === "GNU AGPLv3") {
    return "[GNU AFFERO GENERAL PUBLIC LICENSE](https://choosealicense.com/licenses/agpl-3.0/)";
  } else if (license === "GNU GPLv3") {
    return "[GNU GENERAL PUBLIC LICENSE](https://choosealicense.com/licenses/gpl-3.0/)";
  } else if (license === "GNU LGPLv3") {
    return "[GNU LESSER GENERAL PUBLIC LICENSE](https://choosealicense.com/licenses/lgpl-3.0/)";
  } else if (license === "Mozilla Public License 2.0") {
    return "[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)";
  } else if (license === "Apache License 2.0") {
    return "[Apache License](https://choosealicense.com/licenses/apache-2.0/)";
  } else if (license === "MIT License") {
    return "[MIT License](https://choosealicense.com/licenses/mit/)";
  } else if (license === "The Unlicense") {
    return "[The Unlicense](https://choosealicense.com/licenses/unlicense/)";
  } else if (license === "Boost Software License 1.0") {
    return "[Boost Software License](https://choosealicense.com/licenses/bsl-1.0/)";
  } else {
    
    return `No License Selected`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
## License

This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.projecttitle}
  
  ${data.description}

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## User Story

  ${data.userstory}

## Acceptance Criteria

  ${data.criteria}

## Usage

    [Deployment URL](${data.deploy})

  ${data.usage}

## Screenshot

  ${data.screenshot}

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

  ${data.tests}
  ...

## Questions

My name is ${data.username}. ${'\n'} If you have any questions about the repo, open an issue or contact me directly at ${data.emailID}. ${'\n'}You can find more of my work at ${data.github}

Thank you for reading till the end.


${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}`;
};

module.exports = generateMarkdown;