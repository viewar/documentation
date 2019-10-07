---
id: cli
title: CLI
---

### Create your own app using the ViewAR CLI

Following this tutorial you'll learn how to create your own version of the Furniture Live App using the ViewAR CLI. You'll check out our repository and make adjustments to the code.

#### Prerequisites

In an IDE of your choice (for example WebStorm) navigate to a suitable directory and make sure that you have the following installed:

- Node.js (version 6.0.0 or higher)
- npm package manager (version 3 or higher)

Furthermore, make sure that you have a ViewAR account. It'll provide you storage for your 3D models and an overview of the apps created. Register at: https://developer.viewar.com/

### Install the ViewAR CLI

The easiest way to setup a new ViewAR application is to use the ViewAR CLI.
In the terminal run:

`npm install -g viewar`.

### Login

It's necessary to login with your ViewAR account. Run:

`viewar login`

### Create your first Project

Now, we need to create a JavaScript project with a copy of all Template files in a proper structure.

There will be common files like `package.json`, a src directory containing an `index.html` as well as an `index.js`, and couple other JavaScript files imported from the `index.js`.

In addition to those, there will be a `.viewar-config` file containing information used to deploy the project: _appId, appVersion, id, and a token_. The _id_ and the _token_ will be unique and are fetched during the new app creation process.

#### Initialise a new project

Let's initialise a project in a dedicated directory:

`viewar init PROJECTNAME`

#### Initialise a template project

- _Select the user account for this app:_ navigate to your account.<br>
- _Select a project type:_ Choose the _Sample Template_ to access the Template List.<br>
- _Choose a sample template:_ <br>`base6`<br>
- _Enter the app ID:_ Define the _App ID_ you will be using to access your application through the SDK App. We suggest using a syntax of _company.project_.<br>
- _Enter the app version:_ Unless you have a really good reason, stick to 1.0 as default.<br>
- _Select tracker(s)_: Choose the _ARKit_ (for iOS) and/or _ARCore_ (for Android).

### Run your app (development mode)

To develop your app you can run it in your local browser.

`npm run start:mock`

This will start the app without the 3D engine, letting you simulate AR emitters with the buttons in the right lower corner. You will also see a representation of the scene, letting you simulate selections. This mode is ideal for development since it loads very fast. You can also use this mode to connect your device(see further below).

`npm run start`

This will start the app with the 3D engine (WebGL). It takes a bit longer to load but allows you to load 3D scenes and use VR features. This mode is not recommended for development.

### Test on your mobile device

You can test your application while developing using the ViewAR SDK app from the Appstore or Google Play Store. Start the ViewAR SDK app, enter the App ID, enter version, enable LAN development mode and update your IP address in the input field.

### Deploy/save your changes

To save your changes to the server, use this command:

`viewar deploy APP-ID VERSION`

This will build your app in release mode and save the changes to the server. After this, your app will be updated and everyone starting it will get the changes.

### Testing release version

There are two options for testing your application: you may either do it directly in the web browser (in the mock or full mode) or run it on a mobile device using the ViewAR SDK app.

More info about testing [here](testing.md).

### Experiment!

Now that you have your app all set and running, it's time to play around with it a bit. Feel free to alter the existing functionalities or extend the app with some of your own choosing!

Browse our SDK Documentation for more information.

Here are some topics to get you started:

- [Basic Concepts](basic-concepts.md)
- [JavaScript API Quickstart](references.md)

#### UI Config

Following settings are available in the ui config of _Furniture Live_:

```js
{
  advancedAuthentication: false, // Use advanced authentication with logins from http://dev2.viewar.com/auth/list.
  auth: false, // Show/hide button in home view to authenticate
  autoSave: true, // auto saving projects in the Room Capture
  checkoutUrl: false, // URL for report generation
  cloudProjects: false, // Enable/disable saving to/loading from cloud storage.
  googleAnalyticsKey: false, // Google analytics api key for logging
  googleMapsKey: false, // Google maps api key
  hideRoomWalls: false, // Insert new walls hidden per default.
  infoText: '', // Text displayed in info view as html
  introVideo: false, // URL to video played in home view background,
  live: true, // Enable/disable AR view
  noCollision: false, // Disable collision with room.
  oldDeviceWarning: true, // Enable warning if device runs with wikitude tracking only.
  originModel: false, // Model to be inserted at origin (0/0/0)
  projects: true, // Enable/disable project saving/loading
  roomExport: false, // Enable room export as obj.
  roomPlanner: true, // Enable/disable room planner
  share: true, // Enable/disable sharing
  shopFinder: false, // Displays shop finder button in home view. Either a string or { url, type }. Possible types: 'external', 'json' or 'iframe'.
  shoppingCart: true, // Enable/disable shopping cart
  showCategoryImages: false, // Show category images instead of a list
  showPropertyList: false, // Show properties as list instead of a slider
}
```
