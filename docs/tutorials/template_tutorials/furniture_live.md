---
id: furniture_live
title: Furniture live
---

[Furniture Live Template](https://www.viewar.com/template/funiture-live/) is an intuitive, quality product visualisation application. Marker-less tracking system ensures a seamless and realistic experience. The user can create a scene with multiple models, customise their properties and access live-price updates. Products may be listed in a Shopping Cart for later purchase. Moreover, the scene may be saved and loaded on any platform and device after login.

Furniture Live Template is compatible with iOS, Android and runs in the browser (VR only). It may be easily styled with the use of HTML and CSS with changes being automatically applied to all versions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gHh1fyg_AiY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## App Builder

[ViewAR™ AppBuilder](https://www.viewar.com/app-builder/) is the easiest way to build your augmented reality apps. It allows developers to build augmented reality and virtual reality apps based on HTML templates. It is a modular structure, utilising our almost 10-years-long development experience and lessons learned from over 50 projects. Ready-to-use templates allow for the user focus to be shifted to styling and content. The System is suitable for professional programmers as well as for beginners.

### Prerequisites

All you need is a web browser and a web connection. No programming knowledge required, however, being familiar with HTML/CSS might broaden your possibilities.

### Create an account

Create a free user account on the [ViewAR Developer Portal](https://portal.viewar.com).

### Choose a template

Browse through a list of available templates to find the **Furniture Live**.

### Add app information

Type in the Project Name and Company Name. See below for an automatically generated App-ID - it will be used to access your application. You may leave it as-is or customize it.

### Style your app

Customise your application with a user-friendly Style tab. It is an easy and intuitive way to change colours of backgrounds, buttons and text. On the left-hand side you see a Global Menu, giving you an overview of all app screens; on the right-hand side - a Contextual Menu, offering access to styling of particular elements. If you are familiar with CSS, check out the second tab of the Contextual Menu.

### Add content

The Content tab offers various ways to fill your app with content. Some Sample Content is provided to get you started. Don't worry, you will be able to manage your models at any time, even after App publishing!

### Customize

In the Customize tab particular functionalities of the application may be toggled on and off. "Projects" stands for projects saving and loading, while "Shopping Cart" offers a summary of all the models available in your scene. The Google Tracking ID may also be set here.

### Test the app

That's it! You may now test your App! Download the ViewAR SDK Application from the App Store or Google Play store and type in the App ID defined in the Information tab. Should you not have access to a mobile device, many functionalities may also be tested in a browser by using the link provided.

## CLI

#### Create your own app using the ViewAR CLI

Following this tutorial you'll learn how to create your own version of the Furniture Live App using the ViewAR CLI. You'll check out our repository and make adjustments to the code.

### Prerequisites

In an IDE of your choice (for example WebStorm) navigate to a suitable directory and make sure that you have the following installed:

- Node.js (version 11.0.0 or higher)
- npm package manager (version 6 or higher)

Furthermore, make sure that you have a ViewAR account. It'll provide you storage for your 3D models and an overview of the apps created. Register at: https://portal.viewar.com/

### Install the ViewAR CLI

The easiest way to setup a new ViewAR application is to use the ViewAR CLI.
In the terminal run:

`npm install -g viewar-cli`.

#### Login

It's necessary to login with your ViewAR account. Run:

`viewar login`

### Create your first Project

Next we can initialise a project in a dedicated directory:

`viewar init PROJECTNAME`

#### Initialise a template project

- _Select the user account for this app:_ navigate to your account.<br>
- _Select a project type:_ Choose the _Sample Template_ to access the Template List.<br>
- _Choose a sample template:_ <br>`Base6`<br>
- _Enter the app ID:_ Define the _App ID_ you will be using to access your application through the SDK App. We suggest using a syntax of _company.project_.<br>
- _Enter the app version:_ Unless you have a really good reason, stick to 1.0 as a default.<br>

### Run application in the browser

Great, your app is ready! Let's run it.
You have 2 modes to choose from:<br>

- <b>mock mode</b> - no 3D content, mock buttons for AR tracking simulation. Enables testing of AR functionalitites in the browser.
<br>`npm run start:mock` <br>
- <b>full browser mode</b> - downloads 3D content, however, the AR functionalitites testing is not possible.
<br>`npm run start`

### Test on your mobile device

You can test your application while developing using the ViewAR SDK app from the Appstore or Google Play Store. Start the ViewAR SDK app, enter the App ID, enter version, enable LAN development mode and update your IP address in the input field.

### Deploy/save your changes

To save your changes to the server, use this command:

`viewar deploy APP-ID VERSION`

This will build your app in release mode and save the changes to the server. After this, your app will be updated and everyone starting it will get the changes.

### Experiment!

Now that you have your app all set and running, it's time to play around with it a bit. Feel free to alter the existing functionalities or extend the app with some of your own choosing!

## UI Config

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
