---
id: guidebot
title: Guidebot
---

Learn how to create a GuideBOT indoor navigation application.
Two tracking versions available: using QR codes or the Placenote tracking.

- More about the [GuideBOT Template](https://www.viewar.com/template/guidebot/)
- User Manuals
  - [QR version](../manuals/guidebot_qr.md)
  - [Placenote version](../manuals/guidebot_placenote.md)
- Learn to setup GuideBOT Template with the [App Builder](./app_builder) or [CLI](./cli).

### INTRODUCTION

**Indoor navigation - how does it actually work..?**

We’ll get started just in a minute, but first - a word of introduction to make you aware of what you will be doing.

The goal of the great majority of AR applications is overlaying virtual information on the physical world. Whether it is a streamed image from the device’s camera or a semi-translucent screen of Microsoft HoloLens, the general concept stays the same. In order to inform the device about the desired location of projected information, a tracking system is used (see a [table](/docs/sdk/basic-concepts) with the Tracking Systems Summary).

As for indoor navigation applications, an additional challenge is posed by the fact that the area of service is relatively large, at the same time keeping the precision high. While for outdoor navigations apps, like Google Maps, correctness provided by GPS suffices, it is not the case here.

The release of Apple’s ARKit significantly improved the robustness of AR apps, turning the calibration process into a seamless and effortless experience. Still, in the subject of spatial orientation, there is one more obstacle to overcome – coordination system liability.

The coordination system created by the ARKit has its origin in the starting point of the application, resulting in coordinates being reset with each start of the app. Therefore, although a coherent modelling environment may be visualised, it is not anyhow localised or reproducible. Establishing a stable connection with the real world is necessary to position an AR scene.

ViewAR developed a set of solutions to solve this problem, two of which have been implemented in the GuideBOT app. First one - with the use of QR codes, second - Placenote, a pointcloud based tracking.

However, the application is able to use different tracking approaches, depending on the scenario and the environment and may be adjusted.

**Visual Recognition**
The app learns how an environment looks, creates a pointcloud and re-localizes based on this. This only works in smaller areas (200 square meters) and the environment should not change.
Not really applicable for exhibitions but we could recognize and augment a booth using this approach:  
**[GuideBOT - How it works](https://youtu.be/huHFRSPN5es)**

**Markers/QR Codes**
Placing markers and saving a location of that marker lets the app know where the user is. We tend to use QR codes since the QR code is then already used for app downloads. Users can walk for a distance of 30 meters after filming a QR Code with a drift of 0,5-1,0 meter. This approach is simple, does not require installations and will work stable.

**GPS**
GPS works well outdoors with an accuracy of 5-15 meters. We can also combine GPS with visual recognition of buildings to have accurate AR overlays. This only works outdoors, of course.

**Beacons (standard)**
Using beacons, we can identify the position of the user with an accuracy of 2-3 meters and use compass for directions. The compass has massive drifts indoors and it not that ideal for AR. Still, we are considering implementing a compass correction based on the movement & gyroscope tracking data in combination with multiple measurements.

**Beacons (directional)**
Using directional beacons, we can get the user’s position with an accuracy of a few centimeters. Such installations are way more complex than standard beacons since every beacon-point is wired with network cables. This approach also requires some work in regards to the compass correction but it would be seen as the ideal technology since its accurate and users can enter the experience from everywhere. We are currently looking for potential pilot cases of this technology.

This technology may be easily adapted to serve multiple purposes with indoor navigation, building maintenance, and construction site management being just a beginning.

#### Pricing

Pricing available on request: <sdk@viewar.com>

## App builder

#### Create your own GuideBOT app using the ViewAR App Builder

The ViewAR™ AppBuilder is the easiest way to build your augmented reality apps. It allows developers to build augmented reality and virtual reality apps based on HTML templates. It is a modular structure, utilising our almost 10-years-long development experience and lessons learned from over 50 projects. Ready-to-use templates allow for the user focus to be shifted to styling and content. The System is suitable for professional programmers as well as for beginners.

[More information](https://www.viewar.com/app-builder/)

### Prerequisites

##### Device requirements

- An iOS, ARKit compatible device - more about compatibility in our [Documentation](/docs/sdk/hardware#supported-hardware).
- Up-to-date version of the ViewAR SDK App (available from the App Store (iOS)).
- **For the QR version:** a printed copy of a set of our [demo QR codes](http://www.viewar.com/wp-content/uploads/2018/12/GuideBOT-QRcodes-1.pdf)

##### Skillset

- **Required skills:** -
- **Helpful skills:** HTML & CSS basics

#### Create an account

Create a free user account on the [ViewAR Developer portal](https://developer.viewar.com).

#### Choose a template

Browse through a list of available templates to find the **GuideBOT QR** / **GuideBOT Placenote**.

#### Add app information

Choose a unique app ID that will be used to access your application. It is a good idea to use a syntax like: _company.project_ or _project.topic_.

#### Style your app

Customise your application with a user-friendly Configurator view. It is an easy and intuitive way to change colours of backgrounds, buttons and text. If you are familiar with CSS, check out the second tab. Properties of each element may be accessed Left-Click while holding Shift.

#### Test the app

That's it! You may now test your App! Download the ViewAR SDK Application from the App Store and type in the App ID defined in the Information tab.

More information may be found in the User Manuals:

- [GuideBOT QR](/docs/tutorials/manuals/guidebot_qr)
- [GuideBOT Placenote](/docs/tutorials/manuals/guidebot_placenote)

## CLI

#### Create your own GuideBOT app using the ViewAR CLI

### Prerequisites

In an IDE of your choice (for example WebStorm) navigate to a suitable directory and make sure that you have the following installed:

- Node.js (version 6.0.0 or higher)
- npm package manager (version 3 or higher)

Furthermore, make sure that you have a ViewAR account. It'll provide you storage for your 3D models and an overview of the apps created. Register at: https://developer.viewar.com/

#### Device requirements

- An iOS, ARKit compatible device - more about compatibility in our [Documentation](/docs/sdk/hardware#supported-hardware).
- Up-to-date version of the ViewAR SDK App (available from the App Store (iOS)).
- **For the QR version:** a printed copy of a set of our [demo QR codes](http://www.viewar.com/wp-content/uploads/2018/12/GuideBOT-QRcodes-1.pdf)

#### Skillset

- **Required skills:** HTML, CSS, JavaScript
- **Helpful skills:** Advance 3D editing, UV layouts creation, texturing, basic 3D skills

#### Install the ViewAR CLI

The easiest way to setup a new ViewAR application is to use the ViewAR CLI.
In the terminal run:

`npm install -g viewar`.

#### Login

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
- _Choose a sample template:_ <br>`Guidebot`<br>
- _Enter the app ID:_ Define the _App ID_ you will be using to access your application through the SDK App. We suggest using a syntax of _company.project_.<br>
- _Enter the app version:_ Unless you have a really good reason, stick to 1.0 as default.<br>
- _Select tracker(s)_: GuideBOT is available in 2 tracking system versions - with QR codes or the Placenote tracking. Please choose between them here. <br>
  `Placenote`<br>
  `QR`<br>

### Run your app (development mode)

To develop your app you can run it in your local browser.

`npm run start:mock`

This will start the app without the 3D engine, letting you simulate AR emitters with the buttons in the right lower corner. You will also see a representation of the scene, letting you simulate selections. This mode is ideal for development since it loads very fast. You can also use this mode to connect your device(see further below).

`npm run start`

This will start the app with the 3D engine (WebGL). It takes a bit longer to load but allows you to load 3D scenes and use VR features. This mode is not recommended for development.

#### Test on your mobile device

You can test your application while developing using the ViewAR SDK app from the Appstore or Google Play Store. Start the ViewAR SDK app, enter the App ID, enter version, enable LAN development mode and update your IP address in the input field.

#### Deploy/save your changes

To save your changes to the server, use this command:

`viewar deploy APP-ID VERSION`

This will build your app in release mode and save the changes to the server. After this, your app will be updated and everyone starting it will get the changes.

#### Test the app

There are two options for testing your application: you may either do it directly in the web browser (in the mock or full mode) or run it on a mobile device using the ViewAR SDK app.

Some resources to get you started:

- More info about [testing](testing.md).
- User Manuals: [GuideBOT QR](tutorials/tutorials--manuals/tutorials--manuals--guidebot-qr.md) and [GuideBOT Placenote](tutorials/tutorials--manuals/tutorials--manuals--guidebot-placenote.md).

#### Experiment!

Now that you have your app all set and running, it's time to play around with it a bit. Feel free to alter the existing functionalities or extend the app with some of your own choosing!

Browse our SDK Documentation for more information. Here are some topics to get you started:

- [Basic Concepts](basic-concepts.md)
- [JavaScript API Quickstart](references.md)

#### UI Config

Following settings are available in the ui config:

```js
{
  infoText: '',
  speechDisabled: false,
  chatbotUrl: false,
  greetUser: 'Hi there! How can I help you?',
  followMe: 'Sure, follow me!',
  selectPoi: 'Hi there! Please select a point of interest.',
  }
```
