### Prequestions

Make sure you have:

* Node.js \(version 6.0.0 or higher\)
* npm package manager \(version 3 or higher\)

### Install the ViewAR CLI

The easiest way to setup a new ViewAR application is to use the CLI. In a terminal run:

```bash
npm install -g viewar-cli
```

### Create your first Project

Next we can create a directory and inside it initialise a new project:

```bash
mkdir my-app
cd my-app
viewar init
```

The CLI will ask you a couple of questions. In our case we want to go with the following:

1. Project: **React**
2. App ID: Pick a name you prefer ideally in a the format **com.&lt;yourname&gt;.tutorial**
3. App Version: continue by pressing enter
4. Tracker: Use space to select and enter to complete the tracker selection.
   1. Choose ARKit if you have an iPhone
   2. Choose ARCore if you have an Android Phone

This will create a JavaScript project containing common files like `package.json` a src directory containing an index.html as well as an index.js and couple other JavaScript files imported from the index.js. In addition to that there is a \`.viewar-config\` file containing the appId, appVersion as well as a ViewAR id and token in order to deploy the project. The id and token have been fetched during the creation process.

In order to start the development server run:

```bash
npm run start:mock
```

Since we are building an AR application, it is important for this example that you started the mocked server. Otherwise the web 3D engine would be started, which would collide with the 3D engine on a phone.

### Phone Setup

Next you need to setup your phone. While the mock mode allows you to develop the UI quickly using mocked tracking events, especially for the first try it's more fun using a real phone.

Download the ViewAR SDK App either from the

* Apple Store [https://itunes.apple.com/us/app/viewar-sdk/id1097511807](https://itunes.apple.com/us/app/viewar-sdk/id1097511807)
* Google Play Store [https://play.google.com/store/apps/details?id=com.viewar.sdk](https://play.google.com/store/apps/details?id=com.viewar.sdk)

![](/assets/viewar sdk2.svg)

Make sure that your phone and computer are in the same local network.

Next start the app, switch to LAN Development Mode and fill the fields with

1. Your App ID
2. Version can be empty
3. IP and port of your mocked server


[< Introduction](/tutorials/react/create-your-first-ar-app.md)  ｜  [Next Step >](/tutorials/react/initialising-the-viewar-sdk.md)