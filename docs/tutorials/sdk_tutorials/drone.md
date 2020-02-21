---
id: drone
title: Drone Control
---

## Overview

The Drone Control App is a single-page React application built with the help of the ViewAR SDK. It allows a user to control a drone's movement with two virtual joysticks displayed on the screen.

#### What will you build?

The app will be streaming the image from your device's back camera, with a 3D model of a drone placed in the real-scale. You'll be able to control the drone's movement with two virtual joysticks displayed on the screen.

To check out the final effect, download the **ViewAR SDK App** (either from the App Store or Google Play Store) on an ARKit/ARCore compatible device and input the following data:

Bundle ID: **com.viewar.drone**
Version: **1**

![](assets/drone-phone-step3-v02-web.jpg)
_Screenshot from the Drone Control App_

#### What exactly will you do & learn?

You'll checkout the unfinished Drone Control App from our Git Repository and finish it, following our step by step instructions. At the end of this tutorial you'll know how to:

- activate the AR camera and tracking,
- import a 3D model, activate its animation and manipulate pose,
- use user input (from joysticks) to influence the behavior of the app.

#### How long will it take?

1-2 hours.

### What will you need?

#### Skillset:

- basic HTML & CSS knowledge,
- intermediate JS skills,
- know your way around any chosen IDE and GitHub.
- **good to have:** basic React skills.

_If you don't feel entirely comfortable in the skillset above, you might benefit more from trying the [Templates Tutorials](/tutorials/overview) first._

#### Hardware:

- ARKit compatible iOS device
  <br>OR
- ARCore compatible Android device

_Check the list of [compatible devices](/docs/additional_information/hardware)._

## Getting Started

Make sure that you have the following installed and ready:

- [CLI Setup](/docs/getting_started/cli_setup)
- [Mobile Device Setup](/docs/getting_started/phone_setup)

#### Checkout the Drone App boilerplate

### Login

Before we start, make sure you're logged in with your [ViewAR Account](https://portal.viewar.com) because this is where your app will be linked to. The registration is easy and free.

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

### Initialize the boilerplate app

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

#### What is going on under the hood?

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

### See the app running

#### Working version

##### Web version

You may now switch into the directory and start the development server in the mock mode:

```bash
cd directoryName
npm run start:mock
```

Since we are building an AR application, it is important for this example that you started the mocked server. Otherwise the web 3D engine would be started, which would collide with the 3D engine on a phone.

###### Mobile device

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

![](assets/drone-phone-step0-v02-web.jpg)
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

## Camera and Tracking

Open the app.js file and find the _useEffect_ function.
If you aren't familiar with [Hooks](https://reactjs.org/docs/hooks-intro.html), you may want to read up on the topic first.

```js
useEffect(() => {
  (async function() {
    // TODO: Insert initialization code here:
  })();
}, []);
```

### Activate AR camera

Use the ViewAR API functionality to activate the AR camera. Notice the empty square brackets as the second argument of the `useEffect` function - it is due to the fact that the function is only called once at the app start.

```js
useEffect(() => {
  (async function() {
    // Activate AR camera
    await viewarApi.cameras.arCamera.activate();
  })();
}, []);
```

### Activate tracking provider

Use the ViewAR API functionality to activate the appropriate tracking provider.

```js
useEffect(() => {
  (async function() {
    // Activate ar camera
    viewarApi.cameras.arCamera.activate();

    // Activate tracking (if tracker available).
    if (viewarApi.tracker) {
      viewarApi.tracker.on('trackingTargetStatusChanged', updateTracking);
      await viewarApi.tracker.activate();
    } else {
      setTracking(true);
    }
  })();
}, []);
```

and

```js
export default () => {
  const [tracking, setTracking] = useState(false); // make sure you are familiar with React Hooks
  const [instance, setInstance] = useState(false);

  const updateTracking = () => {
    setTracking(viewarApi.tracker.tracking);
  };
```

#### Test it!

At this point, you should be able to run the app on you mobile device and see the image from its back camera.

![](assets/drone-phone-step1-v03-web.jpg)
_Screenshot from the Drone Control App_

#### Useful reads

- [Working with the Cameras](/docs/quickstart/cameras)

## Model

In this part you'll fetch a ready drone model (including animations) from the repository and make it hover in front of the user. If you aren't familiar with working with the [instances](/docs/quickstart/instances), it's a good idea to read up on it first.

### Fetch model from repository

Still in the _useEffect_ function, use the ViewAR API functionality to [fetch the drone 3D model from the repository](/docs/quickstart/model_manager).

```js
const droneModel = await viewarApi.modelManager.fetchModelFromRepository('74334');
```

Define the drone's initial position and set it to the instance in the scene. It's a good idea to get and use the pose in front of the camera in order to position the drone in the field of view of the user.

```js
const pose = await viewarApi.cameras.arCamera.getPoseInViewingDirection(2000, true);
```

Insert an instance of the model into the scene:

```js
const instance = await viewarApi.sceneManager.insertModel(droneModel, { pose });
setInstance(instance);
```

#### Start the instance's animation (optional)

Some models come with incorporated animations. In order to preview the animations available for the drone model, you may use the [ViewAR Single Product App](https://webversion.viewar.com/com.viewar.singleproductweb/100/#/modelId/74334).

They may be accessed through the modelInstance object. In this case, let's stick to the _Hover_ animation.

```js
await instance.animations.Hover.start({ loop: true });
```

At this point, your code should look similar to this:

```js
useEffect(() => {
  (async function() {
    // Activate AR camera
    await viewarApi.cameras.arCamera.activate();

    // Activate tracking (if tracker available).
    if (viewarApi.tracker) {
      viewarApi.tracker.on('trackingTargetStatusChanged', updateTracking);
      await viewarApi.tracker.activate();
    } else {
      setTracking(true);
    }

    // Get the drone model
    const droneModel = await viewarApi.modelManager.fetchModelFromRepository('74419');

    // Get pose in front of camera (to position drone in front).
    const pose = await viewarApi.cameras.arCamera.getPoseInViewingDirection(2000, true);

    // Insert the drone instance
    const instance = await viewarApi.sceneManager.insertModel(droneModel, { pose });
    setInstance(instance);

    // Start drone hover animation.
    await instance.animations.Hover.start({ loop: true });
  })();
}, []);
```

#### Test it!

At this point, you should be able to run the app on you mobile device and see the image from its back camera with the drone hovering in front of the device.

![](assets/drone-phone-step2-v03-web.jpg)
_Screenshot from the Drone Control App_

##### Useful reads:

- [Working with the Model Manager](/docs/quickstart/model_manager)
- [Working with the Model Instance](/docs/quickstart/instances)

## Joysticks

Now, that we've got the drone hovering in front of the user, we'll use the information from the joysticks to influence it's behavior. Real-life drone movement is a complex topic, therefore, for the purpose of this tutorial, we'll stick to applying axial transitions.

### Right joystick - vertical position

Let's use the right joystick to control our drone's position on the vertical axis. We want the model instance to move up or down every time an input from the joystick is received. It will be handled with a function called `handleRightJoystickInput`.

######Hint
_Because the joystick is 2D, the function will take two parameters (x,y), however, it will use just the vertical coordinate (y). We could skip the (x) value by creating a custom joystick component, however, in this excercise we're re-using the same component for both controls, so let's keep it this way._

The joystick returns (x,y) values in the range of -1.00 to 1.00, depending on how far away from its center it's moved. We want these values to be converted to the scale of -10mm to 10mm, hence the multiplication.

```js
const handleRightJoystickInput = ({ x, y }) => {
  const pose = instance.pose;

  // Update height.
  pose.position.y += y * 10;
  if (pose.position.y < 0) {
    pose.position.y = 0;
  }

  instance.setPose(pose);
};
```

### Left joystick - orientation

Let's use the left joystick to control our drone's orientation. This step is slightly more tricky, but stick with us, it won't be long!

What we need to do:

- Import the necessary math components (`Quaterion`, `Vector3`),
- Store our drone's `orientation` as a [Quaternion](/docs/advanced_concepts/quaternion),
- Convert the `orientation` values into [Euler angles](/docs/advanced_concepts/euler_angles),
- Convert the Quaternion values of `yaw` to [radians](/docs/advanced_concepts/radian),
- Calculate the rotation change to be applied to the drone instance (in radians, preferably setting a multiplication factor to make the change more distinct) and store it in a new constant value
- Apply the new orientation value to the model instance

Import the neccessary math components:

```js
import { Quaternion, Vector3 } from './math';
```

Handle Left Joystick Input:

```js
const handleLeftJoystickInput = ({ x, y }) => {
  const pose = instance.pose;

  // Update orientation
  const orientation = new Quaternion(instance.pose.orientation);
  const { yaw, pitch, roll } = orientation.toEulerAngles(); // convert the Quaterion values to Euler Angles

  const rotationOffsetDegrees = x * 4; // every joystick move in "x" will result in a change of the absolute value of 4deg
  const rotationOffsetRad = (rotationOffsetDegrees * Math.PI) / 180; // convert the Euler Angles to Radians

  const newOrientation = Quaternion.fromEulerAngles({
    yaw: yaw + rotationOffsetRad,
    pitch,
    roll,
  });

  pose.orientation = newOrientation;

  // Apply pose changes to the model instance
  instance.setPose(pose);
};
```

#### Test it!

At this point, you should be able to manipulate the drone instance's position with the use of the joysticks.

![](assets/drone-phone-step3-v02-web.jpg)
_Screenshot from the Drone Control App_

Got everything working?
Great, you're free to go play around with the App already!

#### Useful reads:

- [Working with a Model Instance](/docs/sdk/quickstart/instances).
- [Math - Quaternion](/docs/advanced_concepts/quaternion)
- [Math - Euler angles](/docs/advanced_concepts/euler_angles)
- [Math - Radians](/docs/advanced_concepts/radian)

## Advanced

Wouldn't be so much more fun, if the drone was flying in its look direction? Let's make it happen!

For that we need need to slightly edit the `handleRightJoystickInput` function.
Start right before the pose of the model instance gets updated.

```js
const handleLeftJoystickInput = ({ x, y }) => {
  const pose = instance.pose;
  {...}

// put your code right here!

instance.setPose(pose);
```

#####Get the forward vector
First, we need to analyze the model instance to get its normal forward vector (Vector3.FORWARD).

```js
const position = new Vector3(instance.pose.position);
```

#####Adjust the move direction
Now, we need to and apply the instance's orientation vector to it and adjust it to the speed of the move.

```js
const forward = Vector3.FORWARD;
forward.rotate(newOrientation);
// alternatively: const forward = Vector3.FORWARD.rotate(newOrientation);
forward.scale(y * 20); // You may also use a different value
```

#####Update the position
Don't forget to apply your changes.

```js
pose.position = position.add(forward);
```

#### Test it!

At this point, you should be able to manipulate the drone instance's position with the use of the joysticks.

![](assets/drone-phone-step3-v02-web.jpg)
_Screenshot from the Drone Control App_
