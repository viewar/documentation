---
id: testing
title: Testing
---

There are two options for testing your application - you may either do it directly in the web browser or run it on a mobile device.

#### Testing in the web browser

A big part of application features \(except for AR functionalities\) may be tested in a web browser.

There are several ways to access the app:

##### URL

If you know exactly which app and version you wish to load, all you need to do is to use a URL of a following syntax: [https://webversion.viewar.com/\[BundleID\]/\[Version\]/](https://webversion.viewar.com/[BundleID]/[Version]/)

##### Using My Apps list

If you are unsure what data to input go to _My Apps_, find the appropriate application and click on the _Test_ icon: ![](/img/test-icon.png)

You will see a following pop-up message:![](/img/test-the-app.png)  
Click on the _Test web Version_ button. A new window will pop up and load your app in the browser.

##### From App Wizard

Go to _My Apps_, find the appropriate application and click on the _Edit_ icon: ![](/img/edit-icon.png)

Follow to the _Testing_ step in the app wizard, click on the _Test web Version_ button. A new window will pop up and load your app in the browser.

#### Testing in the ViewAR SDK App

In order to facilitate testing, we have developed a dedicated ViewAR SDK App. Given the _App ID_ of your project, it morphs into your application, containing all its functionalities, tracking systems and custom UI. Easy, right?

##### Quick Start

All you need to do it download it either from the App Store of Google Play Store, type in the _App ID_ you have earlier defined for the project and hit _Start_. This will launch the most up to date deployed version of your app.

_HINT: The App ID is the defined in the Settings Section of the configuration wizard and cannot be changed. It may be found in the top-right corner of all the app configuration wizard steps._

##### Running a previous version

If you have created multiple version of your application \(all must be using the same App ID\), you may access each of the separately through the ViewAR SDK App. It is a feature if you want to test changes in a safe way or give your client two versions to compare.

All you need to do is to input the App _Version_ in the field below the _App ID_ in the Start Screen of the ViewAR SDK App. The numbers may be found in _Contents &gt; Your Apps._

##### LAN Development Mode

If you have made changes requiring testing on a mobile device \(probably related to AR features\) but don't want to deploy them yet, you may use a LAN development mode in the ViewAR SDK App. First, run the app you would like to test on your computer. Start a local web server by typing in:

```
npm run start:mock
```

Now, all you need to do is open the ViewAR SDK App, input your _App ID_, leave the _Version_ field empty \(or set to "100"\) and activate the _LAN Development Mode_ feature. A new input field will appear. Type in your _local IP address_ and hit _Start._ You should now be able to test and debug your app.

_HINT: Your mobile device and computer need to be in the same network._

## Testing

There are two options for testing your application - you may either do it directly in the web browser or run it on a mobile device.

#### Testing in the web browser

A big part of application features \(except for AR functionalities\) may be tested in a web browser.

There are several ways to access the app:

##### URL

If you know exactly which app and version you wish to load, all you need to do is to use a URL of a following syntax: [https://webversion.viewar.com/\[BundleID\]/\[Version\]/](https://webversion.viewar.com/[BundleID]/[Version]/)

##### Using My Apps list

If you are unsure what data to input go to _My Apps_, find the appropriate application and click on the _Test_ icon: ![](/img/test-icon.png)

You will see a following pop-up message:

![](/img/test-the-app.png)  
Click on the _Test web Version_ button. A new window will pop up and load your app in the browser.

##### From App Wizard

Go to _My Apps_, find the appropriate application and click on the _Edit_ icon: ![](/img/edit-icon.png)

Follow to the _Testing_ step in the app wizard, click on the _Test web Version_ button. A new window will pop up and load your app in the browser.

#### Testing in the ViewAR SDK App

In order to facilitate testing, we have developed a dedicated ViewAR SDK App. Given the _App ID_ of your project, it morphs into your application, containing all its functionalities, tracking systems and custom UI. Easy, right?

##### Quick Start

All you need to do it download it either from the App Store of Google Play Store, type in the _App ID_ you have earlier defined for the project and hit _Start_. This will launch the most up to date deployed version of your app.

_HINT: The App ID is the defined in the Settings Section of the configuration wizard and cannot be changed. It may be found in the top-right corner of all the app configuration wizard steps._

##### Running a previous version

If you have created multiple version of your application \(all must be using the same App ID\), you may access each of the separately through the ViewAR SDK App. It is a feature if you want to test changes in a safe way or give your client two versions to compare.

All you need to do is to input the App _Version_ in the field below the _App ID_ in the Start Screen of the ViewAR SDK App. The numbers may be found in _Contents &gt; Your Apps._

##### LAN Development Mode

If you have made changes requiring testing on a mobile device \(probably related to AR features\) but don't want to deploy them yet, you may use a LAN development mode in the ViewAR SDK App. First, run the app you would like to test on your computer. Start a local web server by typing in:

```
npm run start:mock
```

Now, all you need to do is open the ViewAR SDK App, input your _App ID_, leave the _Version_ field empty \(or set to "100"\) and activate the _LAN Development Mode_ feature. A new input field will appear. Type in your _local IP address_ and hit _Start._ You should now be able to test and debug your app.

_HINT: Your mobile device and computer need to be in the same network._
