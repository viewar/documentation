---
id: cli
title: CLI Usage
---

## Prerequisites

First, make sure that you have the following prerequisites installed:

- [node.js](https://nodejs.org/en/download/) (&gt;= 10.13.0)
- [npm](https://www.npmjs.com/) (&gt;= v5.6.0)
- [git](https://git-scm.com/)

#### install viewar-cli

Next, install the viewar-cli globally by entering the following command into your terminal:

`npm install -g viewar-cli`

> if you have problems, installing 'viewar-cli', have a look at the [troubleshooting](./troubleshooting) page.

#### create account

Create a free ViewAR [account](https://portal.viewar.com/register). You will need the credentials to be able to create new apps, upload and manage 3D content and much more. You may log in directly from the terminal:

`viewar login`

#### initialize a project

Initialize a new JavaScript application by opening the terminal in your project directory and entering the following command:

`viewar init destinationFolder`

If you want to start with one of our Templates, read more [here](https://www.viewar.com/templates/).

## viewar-cli

The viewar-cli is a command line tool, which allows you to initialize new boilerplate ViewAR applications based on pure JavaScript or React. Viewar-cli lets you also deploy your application so it can be accessed from an iOS/Android device. In this section we show you how to install the viewar-cli in order to create and deploy a viewar-application.

### Installation

Before installing the developer tools, you'll need to make sure that you have two prerequisites installed:

- node.js version 6.0.0 or higher
- the npm \(&gt;= v3.0.0\) package manager

Next, install the viewar-cli globally by entering the following command into your terminal:  
`npm install -g viewar-cli`

> run `viewar --version` to verify installation.

You will only need to install this tool once.  
It will alert you when it's out of date, and provide instruction on how to update it.

### Initialization

Initialize a new javascript application by opening the terminal in your project directory and entering the following command:

`viewar init PROJECT_NAME`

where PROJECT_NAME is the name of your new application. Once it's been created and the dependencies are installed, change you working directory to PROJECT_NAME, and start the development server by entering `npm start.`

Navigate in your web browser to `http://localhost:8080/` to access the application. To edit the application's code start from `src/index.js` .

## SDK App

![](assets/viewar%20sdk2.svg 'float')

Next you need to setup your phone.  
While the mock mode allows you to develop the UI quickly using mocked tracking events, especially for the first try it's more fun using a real phone.

**Download the ViewAR SDK App**

- [Apple Store](https://itunes.apple.com/us/app/viewar-sdk/id1097511807)
- [Google Play Store](https://play.google.com/store/apps/details?id=com.viewar.sdk)

Make sure that your phone and computer are in the same local network.

Next start the app, switch to LAN Development Mode and fill the fields with

1. Your App ID
2. Version can be empty
3. IP and port of your mocked server

## Run your app

ViewAR System comes with a local development environment letting you program, debug and test AR applications directly in your browser. Once an app has been created and the dependencies are installed, change the working directory to PROJECT_NAME, and start the development server.

##### WebGL support

You can start the development server with WebGL support:

`npm start`

##### mock mode

You can also run your template in so-called _mock mode_. It will not load any 3D content but still enable you to simulate all calls, notifications and behaviours directly in your browser.

It comes with 2 buttons in the bottom-right corner, letting you simulate _tracking found_ and _tracking lost_. Furthermore, it displays thumbnails for scene elements, letting you mimic object selections. This is the fastest way to develop and debug AR applications.

`npm run start:mock`

Your web browser will open `http://localhost:8080/` to access the application.

#### Start creating your app

To edit the application's code start from `src/index.js` .  
Or have a look at the [Tutorials](../tutorials/overview)

## Deployment

To deploy the app you first need to create an empty application at [https://portal.viewar.com](https://portal.viewar.com). Than open the application directory in the terminal and enter `viewar show-token`. Enter the first part of the displayed token \(until the dash\) into the application settings on the application website, to connect the boilerplate application with the system.

In order to activate your template to an app, you need to run:  
`viewar deploy APP-ID APP-VERSION`

Finally you have to enter `npm run deploy`via terminal to deploy the app. You can now download the ViewAR SDK app from AppStore on your iOS device and enter the App ID you entered while creating the empty application to launch the app on the device.

<!---
**\[ I have not found the option to enter the token, plus we should maybe only display the public and important part of the token\]**
--->
