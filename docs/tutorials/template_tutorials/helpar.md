---
id: helpar
title: helpar
---

Remote support has never been easier. Incorporate one-to-one calls into a user-friendly application and enhance the communication with synchronised touch transmission and visualisation. The application is even able to save annotations for later usage in a self-service approach. More about the [helpar Template](https://www.viewar.com/template/helpar-remote-assistance/)

<!-- TODO: add TOC -->

## App Builder

[ViewAR™ AppBuilder](https://www.viewar.com/app-builder/) is the easiest way to build your augmented reality apps. It allows developers to build augmented reality and virtual reality apps based on HTML templates. It is a modular structure, utilising our almost 10-years-long development experience and lessons learned from over 50 projects. Ready-to-use templates allow for the user focus to be shifted to styling and content. The System is suitable for professional programmers as well as for beginners.

### Prerequisites

All you need is a web browser and a web connection. No programming knowledge required.

### Create an account

Create a free user account on the [ViewAR Developer portal](https://developer.viewar.com).

### Choose a template

Browse through a list of available templates to find the **helpar**.

### Add app information

Choose a unique app ID that will be used to access your application. It is a good idea to use a syntax like: _company.project_ or _project.topic_.

### Style your app

Customise your application with a user-friendly Configurator view. It is an easy and intuitive way to change colours of backgrounds, buttons and text. If you are familiar with CSS, check out the second tab. Properties of each element may be accessed Left-Click while holding Shift.

### Test the app

That's it! You may now test your App! Download the ViewAR SDK Application from the App Store or Google Play store and type in the App ID defined in the Information tab. Should you not have access to a mobile device, many functionalities may also be tested in a browser by using the link provided.

## CLI

Create your own app using the ViewAR CLI.

### Prerequisites

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

### Initialise a new project

Let's initialise a project in a dedicated directory:

`viewar init PROJECTNAME`

### Initialise a template project

- _Select the user account for this app:_ navigate to your account.<br>
- _Select a project type:_ Choose the _Sample Template_ to access the Template List.<br>
- _Choose a sample template:_ <br>`Helpar Remote Assistance`<br>
- _Enter the app ID:_ Define the _App ID_ you will be using to access your application through the SDK App. We suggest using a syntax of _company.project_.<br>
- _Enter the app version:_ Unless you have a really good reason, stick to 1.0 as default.<br>
- _Select tracker(s)_: In order to use the _helpar_ template you need to activate 2 tracking systems:<br>
  `Placenote`<br>
  `Remote`<br>
  You can select multiple trackers by hitting _Space_ and then confirming with the _Enter_ key.

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

### Experiment!

Now that you have your app all set and running, it's time to play around with it a bit. Feel free to alter the existing functionalities or extend the app with some of your own choosing!

Browse our SDK Documentation for more information.

Here are some topics to get you started:
<br>[Basic Concepts](../../sdk/basic_concepts.md)
<br>[JavaScript API Quickstart](http://test2.3.viewar.com/docs/index.html)

### UI Config

Following settings are available in the ui config:

```js
{
  serverUrl: '', // Server url to connect to.
  demo: false    // Enable demo login.
}
```
