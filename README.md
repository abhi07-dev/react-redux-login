# react-redux-login application 
* *Version 1*
* *Date 10 Sept 2019*
* *Email abhishekgupta07@yahoo.com*

## How to run:
1. Install NPM from https://nodejs.org/en/download/
2. Download or clone the project source code from this directory.
3. Run npm install from the command line in the project root folder (where the package.json is located) to install all required npm packages.
4. Start the application by running npm start from the command line in the project root folder, this will launch a browser displaying the application.

## Application Functionality
* User registration and login

## Developer Notes:
* All the login related requests are async.
* Application stores user object in the browser local storage, which can be replaced with a API.
* Application uses fake backend to imitate the behavior of server API. It intercepts the JavaScript Fetc() and mimic the behaviour of a real api by managing data in browser local storage.

## Dependencies
History, React-Redux, Bootstrap, Webpack, Social Icons

## Future Developement:
* Change password functionality in the Homepage.
* Fetching user details through the API, which currently uses local storage.
* Placeholder icons are provided to integrate with the social identity providers (such as Google, Apple, Facebook, etc.). This can be done using Auth0 services.

## Credits:
J. Watmore