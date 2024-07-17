# NoSQL Social Network API

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description

This NoSQL social network API is a dynamic Node.js application programming interface (API). This robust interface enables users to effortlessly execute CRUD operations on various social networking data models utilizing a flexible NoSQL database architecture. The data models encompass an array of elements such as friends, users, thoughts, and reaction data models, which can be effortlessly accessed either individually by their unique IDs or comprehensively as a whole. This API, meticulously crafted with Node.js and fortified by Mongoose, empowers a streamlined and scalable approach to managing social networking data, unshackled from the confines imposed by traditional relational databases.

## Table of Contents

- [NoSQL Social Network API](#nosql-social-network-api)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage/Test Instructions](#usagetest-instructions)
  - [Walkthrough Video](#walkthrough-video)
  - [License](#license)
  - [Questions](#questions)

## Installation

In order to install this project you should have node.js version v16.20.1 installed on your device before attempting to run the application. To install this project please clone the GitHub repository. After cloning the repo the user should run the following text npm install into the terminal to download the necessary node packages.

## Usage/Test Instructions

To use this project it is recommended that you use Insomnia, Swagger, or Postman to test the API.

    User Routes:
    1. To create a new user: POST (http://localhost:3001/api/users)

    2. Find all users: GET http://localhost:3001/api/users

    3. To find one user, insert the user's ID after api/users/ : GET http://localhost:3001/api/users/:userId

    4. In order to update one user, insert the user's ID after api/users/ : PUT http://localhost:3001/api/users/:userId and update the information needed

    5. To delete a user, insert the user's ID after api/users/ : DELETE http://localhost:3001/api/users/:userId and update the information needed

    Thought Routes:
    1. To create a new thought: POST http://localhost:3001/api/thoughts

    2. Find all thoughts: GET http://localhost:3001/api/thoughts/


    3. In order to find a single thought,  replace the ":thoughtId" text at the end of the URL with the thought ID you'd like to find: GET http://localhost:3001/api/thoughts/:thoughtId


    4. To update a single thought, replace the ":thoughtId" text at the end of the URL with the thought ID you'd like to update: GET http://localhost:3001/api/thoughts/:thoughtId
   
    5. If you'd like to delete a single thought, replace the ":thoughtId" text at the end of the URL with the thought ID you'd like to delete: GET http://localhost:3001/api/thoughts/:thoughtId
  
    Reaction Routes:
    1. POST:   \api\thoughts\:thoughtsID\reactions\:reactionID (add reaction to thoughts)
   
    2. DELETE: \api\thoughts\:thoughtsID\reactions\:reactionID (remove reaction from thoughts)

## Walkthrough Video

Here's a walkthrough video in order to help users:

- <https://drive.google.com/file/d/1nKDD-bB25UrLv3Mgi8nRRvXD7bxidD6A/view?usp=sharing>

## License

This application is covered under: Apache License 2.0

## Questions

My GitHub username is: LukeDenHartog <https://github.com/lukedenhartog/>

If anyone has a question to ask they can reach me via email at <LukeADenHartog@gmail.com>
