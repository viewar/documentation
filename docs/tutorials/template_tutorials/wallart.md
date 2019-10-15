---
id: wallart
title: Wall-ARt
---

Wall Art is a **product visualisation app** dedicated to 2D objects with of a vertical orientation.  
Following this tutorial you'll learn how to use the demo version and, optionally, create your own from the ViewAR Template.

#### Ready to go?

- [User Manual](/manuals/wallart)  
  Learn to use the App
- [Create with the App Builder](#app_builder)  
  Create your own version with the App Builder

#### Support

- [ViewAR SDK Documentation](/docs/sdk)
- More about the [Wall Art Template](https://www.viewar.com/template/wallart/)

#### Pricing

Pricing available on request: <sdk@viewar.com>

## App Builder

##### Create your own app using the ViewAR App Builder

The ViewAR™ AppBuilder is the easiest way to build your augmented reality apps. It allows developers to build augmented reality and virtual reality apps based on HTML templates. It is a modular structure, utilising our almost 10-years-long development experience and lessons learned from over 50 projects. Ready-to-use templates allow for the user focus to be shifted to styling and content. The System is suitable for professional programmers as well as for beginners.

Following this tutorial you'll learn how to create your own version of the Wall Art App using only the ViewAR App Builder. No programming knowledge required!

[More information](https://www.viewar.com/app-builder/)

### Prerequisites

All you need is a web browser and a web connection. No programming knowledge required, however, being familiar with HTML/CSS might broaden your possibilities.

#### Create an account

Create a free user account on the [ViewAR Developer portal](https://developer.viewar.com)

#### Choose a template

Browse through a list of available templates to find the **Wall Art Template**.

#### Add app information

Choose a unique app ID that will be used to access your application.  
It is a good idea to use a syntax like: _company.project_ or _project.topic_.

#### Style your app

Customise your application with a user-friendly Configurator view. It is an easy and intuitive way to change colours of backgrounds, buttons and text. If you are familiar with CSS, check out the second tab. Properties of each element may be accessed Left-Click while holding Shift.

#### Add content

Add content with the Content Manager. Some Sample Content is provided to get you started. Should you want to add your Custom Content straight away, use the button below. Be aware that you may only use 2D models in this template. Use the Picture Uploader (more about [Model Assistants](/docs/sdk/model-assistants 'Model Assistants')).
Don't worry, you will be able to manage your models at any time, even after App publishing!

#### Test app

That's it! You may now test your App! Download the ViewAR SDK Application from the App Store or Google Play store and type in the App ID defined in the Information tab. Should you not have access to a mobile device, many functionalities may also be tested in a browser by using the link provided.

<!--
TODO: add deployment info
--->

## CLI

Wall Art is a product visualisation app dedicated to 2D objects with of vertical orientation. We'll show you how to use it and, optionally, create your own from the ViewAR Template.

#### Create your own app using the ViewAR Template

### Prerequisites

In an IDE of your choice (for example WebStorm) navigate to a suitable directory and make sure that you have the following installed:

- Node.js (version 6.0.0 or higher)
- npm package manager (version 3 or higher)

#### Install the ViewAR CLI

The easiest way to setup a new ViewAR application is to use the ViewAR CLI.
In the terminal run:

`npm install -g viewar-cli`.

#### Create your first Project

Next we can initialise a project in a dedicated directory:

`viewar init PROJECTNAME`

### Initialise a template project

- _Select the user account for this app:_ navigate to your account.<br>
- _Select a project type:_ Choose the _Sample Template_ to access the Template List.<br>
- _Choose a sample template:_ <br>`wall-art`<br>
- _Enter the app ID:_ Define the _App ID_ you will be using to access your application through the SDK App. We suggest using a syntax of _company.project_.<br>
- _Enter the app version:_ Unless you have a really good reason, stick to 1.0 as default.<br>
- _Select tracker(s)_: Choose the _ARKit_ (for iOS) and/or _ARCore_ (for Android).

#### Run application in the browser

You have 2 modes to choose from:<br>

- <b>mock mode</b> (no 3D content, mock buttons for AR tracking simulation): <br>`npm run start:mock` <br>
- <b>full browser mode</b> (download 3D content, no mock buttons for AR tracking simulation): <br>`npm run start`

### UI Config

Following settings are available in the ui config:

```js
{
  googleAnalyticsKey: false,      // Google analytics api key for logging
  googleMapsKey: false,           // Google maps api key
  auth: false,                    // Show/hide button in home view to authenticate
  originModel: false,             // Model to be inserted at origin (0/0/0)
  infoText: '',                   // Text displayed in info view as html
  live: true,                     // Enable/disable AR view
  roomPlanner: true,              // Enable/disable room planner
  shoppingCart: true,             // Enable/disable shopping cart
  share: true,                    // Enable/disable sharing
  projects: true,                 // Enable/disable project saving/loading
  showPropertyList: false,        // Show properties as list instead of a slider
  showCategoryImages: false,      // Show category images instead of a list
  checkoutUrl: false,             // URL for report generation
  introVideo: false,              // URL to video played in home view background,
  shopFinder: false,              // Displays shop finder button in home view. Either a string or { url, type }. Possible types: 'external', 'json' or 'iframe'.
  cloudProjects: false,           // Enable/disable saving to/loading from cloud storage.
  hideRoomWalls: false,           // Insert new walls hidden per default.
  noCollision: false,             // Disable collision with room.
  roomExport: false,              // Enable room export as obj.
  oldDeviceWarning: true,         // Enable warning if device runs with wikitude tracking only.
  advancedAuthentication: false,  // Use advanced authentication with logins from http://dev2.viewar.com/auth/list.
}
```

### Support

- [Documentation](oveview.md)
- [Tutorials](https://developer.viewar.com/site/tutorials)
