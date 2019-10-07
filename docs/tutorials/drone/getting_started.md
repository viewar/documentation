---
id: getting_started
title: Getting started
---

Make sure that you have the following installed and ready:

- ViewAR CLI - [(more...)](command-line-interface-cli/viewar-cli-setup.md)
- ViewAR SDK App on your mobile device set up - [(more...)](command-line-interface-cli/phone-setup.md)

### Checkout the Drone App boilerplate

#### Login

Before we start, make sure you're logged in with your [ViewAR Account](http://developer.viewar.com) because this is where your app will be linked to. The registration is easy and free.

As soon as you're registered, into your terminal/command prompt go for:

```bash
viewar login
```

Now, create a directory and initialize a new project inside it:

```bash
viewar init directoryName
```

Choose your user from the list displayed.

```bash
Select the user account for this app. Navigate through the list with the up/down arrow keys.
❯ userName <userName@viewar.com>
```

####Initialize the boilerplate app
Now, the CLI will ask a couple of questions to configure an app for you.
Go with the following settings:

```bash
-> Select a project type:
   > Project: Sample Project/Template
-> Select a template project:
   > Other…
-> Repository URL:
   > https://github.com/viewar/viewar-boilerplate-joystick-react.git
-> Enter the App ID: // Pick a name you prefer
   > drone.controls.v01
-> Enter the App Version: // continue by pressing enter or set the version manually
   > 1.0

```

####What is going on under the hood?
A new JavaScript project has just got initialized, containing:

- `src`directory with:
  - `index.html`and `index.js` ( + some additional files imported from the `index.js`)
  - additional resources you'll need later:
    - `joysticks` component
    - `math`
- config files:
  - common config files like `package.json`,
  - viewAR-specific config files, e.g.:
    - `.viewar-config` - containing the app-specific and deployment information (e.g. AppID, deployment token)

####See the app running
#####Working version
######Web version

You may now switch into the directory and start the development server in the mock mode:

```bash
cd directoryName
npm run start:mock
```

Since we are building an AR application, it is important for this example that you started the mocked server. Otherwise the web 3D engine would be started, which would collide with the 3D engine on a phone.

######Mobile device
First, make sure that your phone and computer are in the same local network.

Next start the ViewAR SDK app, switch to LAN Development Mode and fill the fields with:

1. Your App ID
2. App Version - may be empty
3. IP and port of your mocked server

#####Deployed version
The last deployed version (in this case - the original boilerplate version, since you haven't made any improvements yet), should already be available online!
Start the ViewAR SDK App on you mobile device, turn off the LAN mode and fill in the fileds with:

1. Your App ID
2. App Version (leaving this field empty will result in the app using the default setting: <=100)

![](/assets/drone-phone-step0-v02-web.jpg)
_Screenshot from the Drone Control Boilerplate App_

Try removing the "Hello World." message and seeing the changes on your mobile device in the LAN mode before going further.

```js
// Remove this whole part
const Hello = () => <div className={styles.Hint}>Hello world.</div>;
```

Remember to remove both the definition and the rendering.

```js
  // Render jsx.
  return (
    <Fragment>
      <Hello /> // Remove me!

      <div className={styles.LeftJoystick}>
        <Joystick onChange={handleLeftJoystickInput} />
      </div>
```

[< Previous Step](tutorials/tutorials--drone/00--tutorials--drone--overview.md) ｜ [Next Step >](tutorials/tutorials--drone/tutorials--drone--02--camera.md)

##### Useful reads:

[> ViewAR CLI](command-line-interface-cli/viewar-cli-setup.md)
[> Mobile Device](command-line-interface-cli/phone-setup.md)
[> ViewAR Developer Account](http://developer.viewar.com)
