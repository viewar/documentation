### Initialize an app/template \(plain JavaScript / Vanilla\)

Initialize a new JavaScript application by opening the terminal in your project directory and entering the following command:

`viewar init destinationFolder`

If you want to start with one of our Templates, read more [here](templates.md).

### Run your app for testing and developing

ViewAR System comes with a local development environment letting you program, debug and test AR applications directly in your browser. Once an app has been created and the dependencies are installed, change the working directory to PROJECT\_NAME, and start the development server.

##### WebGL support

You can start the development server with WebGL support:

`npm start`

##### mock mode

You can also run your template in so-called _mock mode_. It will not load any 3D content but still enable you to simulate all calls, notifications and behaviours directly in your browser.

It comes with 2 buttons in the bottom-right corner, letting you simulate _tracking found_ and _tracking lost_. Furthermore, it displays thumbnails for scene elements, letting you mimic object selections. This is the fastest way to develop and debug AR applications.

`npm run start:mock`

Your web browser will open `http://localhost:8080/` to access the application.

### Start creating your app

To edit the application's code start from `src/index.js` .








## viewar-cli

The viewar-cli is a command line tool, which allows you to initialize new boilerplate ViewAR applications based on pure JavaScript or React. Viewar-cli lets you also deploy your application so it can be accessed from an iOS/Android device. In this section we show you how to install the viewar-cli in order to create and deploy a viewar-application.

#### Installation

Before installing the developer tools, you'll need to make sure that you have two prerequisites installed:

* node.js version 6.0.0 or higher
* the npm \(&gt;= v3.0.0\) package manager

Next, install the viewar-cli globally by entering the following command into your terminal:

`npm install -g viewar-cli`

You will only need to install this tool once. It will alert you when it's out of date, and provide instruction on how to update it.

#### Initializing a new ViewAR Application

Initialize a new javascript application by opening the terminal in your project directory and entering the following command:

`viewar init PROJECT_NAME`

where PROJECT\_NAME is the name of your new application. Once it's been created and the dependencies are installed, change you working directory to PROJECT\_NAME, and start the development server by entering `npm start.`

Navigate in your web browser to `http://localhost:8080/` to access the application. To edit the application's code start from `src/index.js` .

#### Deploying

To deploy the app you first need to create an empty application at [http://developer.viewar.com](http://developer.viewar.com). Than open the application directory in the terminal and enter `viewar show-token`. Enter the first part of the displayed token \(until the dash\) into the application settings on the application website, to connect the boilerplate application with the system. **\[I have not found the option to enter the token, plus we should maybe only display the public and important part of the token\]**

Finally you have to enter `npm run deploy`via terminal to deploy the app. You can now download the ViewAR SDK app from AppStore on your iOS device and enter the App ID you entered while creating the empty application to launch the app on the device.

#### Additional Commands

With `viewar set-token` you are able to change the token if you are for example moving between different projects which should use the same App ID. You can also generate a completely new token by entering `viewar generate-token`. You can also look up all the available commands by simply entering `viewar` without any commands.

