<div align="center" id="top"> 
  <h1>DropMail Challenge by <a href="https://coodesh.com/" target="_blank">Coodesh</a></h1>
</div>

<br />
<br />

<p align="center">
  <a href="https://www.linkedin.com/in/timoteopiano/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Timoteo%20Piano-%BD93EC">
  </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/trpiano/DropMailCoodeshChallange?color=%BD93EC">
  <a href="https://github.com/trpiano/DropMailCoodeshChallange/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/trpiano/DropMailCoodeshChallange?color=%BD93EC">
  </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/trpiano/DropMailCoodeshChallange?color=%BD93EC">
</p>

## About

This project aims through an interface to enable the use of temporary emails that are provided by the DropMail API, having the functions of receiving emails and reading incoming emails.

## Screenshots

<div align="center" id="top"> 
  <img src="/.github/img_1.png" alt="dropMail home" />
</div>

## Technologies

The following tools were used in this project:

- [ViteJS](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [Material-UI](https://mui.com/material-ui/) 
- [GraphQL](https://graphql.org/)
- [Apollo](https://www.apollographql.com/docs/react/)

## APIs

The following APIS were used in thid project:

- [DropMail](https://dropmail.me/api/)
- [CORS Anywhere Heroku](https://cors-anywhere.herokuapp.com/)

## Requirements

Before starting 🏁, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## Getting Started

```bash
# Clone this project
$ git clone https://github.com/trpiano/DropMailCoodeshChallange

# Access
$ cd DropMailCoodeshChallange

# Install dependencies
$ yarn

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:5173>
```

<p>⚠️ Access the link below and request temporary access to the CORS Anywhere server as shown in the example image (The application needs this step to work).</p>

- [CORS Anywhere](https://cors-anywhere.herokuapp.com/corsdemo)

<div align="center" id="top"> 
  <img src="/.github/img_2.png" alt="cors anywhere home" />
</div>

## Environment Variables (.env)

```bash

# Rename the .env.example file like the example below
$ cp .env.example .env.local

# Add your information in the variable

VITE_DROPMAIL_API_URL=

```

Here is an example url: https://cors-anywhere.herokuapp.com/https://dropmail.me/api/graphql/${AUTH_TOKEN}
<br />
You can use any unique string of 8 characters or more as ${AUTH_TOKEN} right now, but we will introduce authentication mechanisms later.

<br />

This is a challenge by [Coodesh](https://coodesh.com/)

<br />

Made by <a href="https://github.com/trpiano" target="_blank">Timoteo Reinheimer Piano</a>

&#xa0;

<a href="#top">Back to top</a>
