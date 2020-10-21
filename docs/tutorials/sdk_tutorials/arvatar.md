---
id: arvatar
title: Arvatar
---

### Virtual Character with AI

This is a tutorial to create an app with the ViewAR system that will display an interactive AR avatar \(Arvatar\) at your current location. For this tutorial you'll need:

- ViewAR SDK App
- ViewAR CLI \(@viewar/cli node package\)
- portal.viewar.com account
- React 16.8.0 or newer

### Checkout Sample App

First of all, we need to initialize a bare react sample app via @viewar/cli in our destination folder &lt;appFolder&gt;:

```bash
viewar login <email>      # Login with your account.
viewar init <appFolder>   # Initialize the app (see initialization settings below).
cd <appFolder>                # Change into your project directory.
```

Select project type 'React' , enter a \(globally\) unique app ID (something like yourname.arvatar) and select ARKit \(iOS\) and ARCore \(Android\) as trackers. The project directory needs to be empty and will be created if it's not existing.

Make sure you have at least react version 16.8.0 installed, since we'll use react hooks. Otherwise please install the most recent react version.

```
npm install --save react@latest    # Install latest react version.
```

To see your live code changes, run:

```bash
npm run start:mock            # Run app in browser (with mocked viewar-core).
```

This will start a local development server which allows you to see all your UI changes while developing \(with hot reloading\). You can also start the app directly on your mobile device by running the ViewAR SDK app \(available in the app store\). Inside the SDK app just enter your app ID, select "LAN Development Mode" and your local development server's IP "http://your-ip-address:8080".

### Activate Tracking

The first step is to activate the device's camera and initialize our tracking system. The following changes will take place in app.js, where all the rendering is happening. For camera and tracking control we will use the viewar-api. The sample app already initializes the viewar-api in index.js. All we need to do is to import the viewar-api inside our app.js and create a function to activate the tracking:

```js
import viewarApi from 'viewar-api';

async function activateTracking() {
  await viewarApi.cameras.arCamera.activate(); // Activate AR camera.
  viewarApi.tracker.on('trackingTargetStatusChanged', onTrackingChanges); // Listen for tracking changes.
  await viewarApi.tracker.activate(); // Activate the default tracker.
}
```

The available tracker depending on your device \(iOS or Android\) will be automatically selected by using viewarApi.tracker. Alternatively you can also use viewarApi.trackers.ARKit or viewarApi.trackers.ARCore \(not recommended, since you'll lose the easy cross-platform capability\).

To run the code above after the component did mount, we'll use react's useEffect. To display different messages \(according to the tracking state\) we will use react's useState. The whole app.js will now look like this:

```js
import React, { useState, useEffect } from 'react';
import viewarApi from 'viewar-api';
import styles from './app.scss';

export default (props) => {
  // State variable holding the tracking status (default false).
  const [tracking, setTracking] = useState(false);

  useEffect(() => {
    async function onTrackingChanges(evt) {
      setTracking(evt.tracked); // Update any tracking changes.
    }

    async function activateTracking() {
      await viewarApi.cameras.arCamera.activate(); // Activate AR camera.
      viewarApi.tracker.on('trackingTargetStatusChanged', onTrackingChanges); // Listen for tracking changes.
      await viewarApi.tracker.activate(); // Activate the default tracker.
    }

    // Activate the tracking.
    activateTracking();
  }, []); // Empty array => run only on component did mount.

  // Render different message dependend on tracking status.
  if (tracking) {
    return <div className={styles.TrackingHint}>Tracking initialized.</div>;
  } else {
    return (
      <div className={styles.TrackingHint}>
        Please film the floor and move your device sideways.
      </div>
    );
  }
};
```

And our newly created app.scss with the tracking hint stylings:

```css
.TrackingHint {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 1em 2em;
  border-radius: 1em;
}
```

Congratulations! Now you should be able to see some inserted sample model instance on the floor. Without the tracking provider the model instances would float around the floor.

### Insert Arvatar

The next step is to use the Arvatar instead of the sample models. The first thing we do is to remove the sample model insertion from our code. It's located in src/index.js.

```js
// Remove our comment out all the lines below.
const sheepModel = await viewarApi.modelManager.fetchModelFromRepository('20');

for (let x = 0; x < 20; ++x) {
  await viewarApi.sceneManager.insertModel(sheepModel, {
    pose: {
      position: {
        x: Math.random() * 4000 - 2000,
        y: 0,
        z: Math.random() * 4000 - 2000,
      },
    },
  });
}
```

Then we install the viewar-guide package, containing the logic for our arvatar.

```bash
npm install --save viewar-guide     # Install viewar-guide dependency.
```

We need to setup the guide first, so we create a new function "initGuide", right below our existing "activateTracking" function:

```js
import viewarGuide from 'viewar-guide';

async function activateTracking() {
  /* Existing code. */
}

async function initGuide() {
  viewarGuide.setup({
    // Setup the guide.
    viewarApi,
    config: {
      language: 'en-GB', // Speech language.
      text: {
        greetUser: `Hello, I'm your Arvatar.`, // Custom greet message.
      },
    },
  });

  await viewarGuide.init(); // Initialize all the resources (e.g. insert model).
}

// Initialize the guide.
initGuide();

// Initialize the tracking (already existing).
activateTracking();
```

We also want to appear our avatar in front of the user when tracking is found. That's why we adapt the "onTrackingChanges" function as following:

```js
async function onTrackingChanges(evt) {
  setTracking(evt.tracked); // Update any tracking changes.

  await viewarGuide.start(); // Start the guide's internal update loop.
  viewarGuide.requestGuide(); // Let the guide appear in front of the user.
}
a;
```

Now you have an app with the arvatar in front of you and greeting you with a message.

### Interact With Your Arvatar

#### Have A Conversation

After the arvatar appeared and said his greeting message, you can communicate with him using speech input. To be able to modify the answers of the arvatar, we have to provide a function which will interpret the user's speech input:

```js
async function interpretSpeechInput({ text, language }) {
  // Return specific message if input text contains "name".
  if (text.toLowerCase().indexOf('name') !== -1) {
    return 'My name is Avatar';
  }

  // Default message.
  return 'Sorry, Please repeat.';
}
```

You can use this asynchronous function for all kind of implementations. You can even query a backend script connected to a database or any chatbot system. All that's left to do is to provide this function to the guide upon setup:

```js
viewarGuide.setup({
  viewarApi,
  config { /* ... */ },
  interpretSpeechInput,                                                   // Pass function to interpret speech input
});
```

#### Let The Arvatar Guide You To A Destination

Another feature we would like to implement is to tell the Arvatar to move to a desired destination and read a sentence. We want to be able to touch the floor position where we want the Arvatar to move to. For this we will need to create a transparent div above the whole screen, so we can get the screen position from a user touch. Therefore we replace "Tracking initialized." message with another message and also add a touch overlay div.

```js
// Render different message dependend on tracking status.
if (tracking) {
  return (
    <React.Fragment>
      <div className={styles.TouchOverlay} onClick={handleTouch} />
      <div className={styles.TrackingHint}>Touch the floor to move your Arvatar.</div>
    </React.Fragment>
  );
} else {
  // Existing code.
}
```

We also need to add a new class to our our app.scss \(we add a z-index so that the touch overlay is rendered on top of the tracking hint\):

```css
.TouchOverlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
```

The "handleTouch" function that is triggered on click will be implemented as following:

```js
async function getTouchFloorPosition(x, y) {
  // Simulate a touch ray on x/y screen position and return the first floor hit.
  const touchResult = await viewarApi.sceneManager.simulateTouchRay(x, y);
  if (touchResult.floors.length) {
    return touchResult.floors[0];
  }
}

async function handleTouch(ev) {
  // Get screen coordinates from touch between 0...1 in x and y direction.
  const x = ev.clientX / ev.target.offsetWidth;
  const y = ev.clientY / ev.target.offsetHeight;

  const position = await getTouchFloorPosition(x, y);
  if (position) {
    // Let the guide follow a path.
    viewarGuide.followPath(
      [
        {
          pose: {
            position, // The touch position.
          },
        },
      ],
      'This is your destination.'
    ); // The sentence the guide will speak upon destionation arrival.
  }
}
```

So what exactly did we do here? First of all, we calculate the screen coordinates from of the click event in "handleTouch". Then we got the floor position from these screen coordinates. The ViewAR API is able to simulate a touch ray from screen coordinates and to return intersections with objects or floors hit by the ray. There we just return the first floor hit \(if existing\).

Imagine to aim with your device to the sky when touching the screen, this will give you no floor hit. But how does our system recognize the floor? This is already done by our tracking system. Now it's probably more understandable why you previously had to film the floor to initialize the tracking.

All we do with this position is to pass it to the viewar-guide. The first argument of followPath is a list \(array\) of waypoints on the path. The second argument is the sentence the guide will speak when he reached the last waypoint.

### Sample Source

app.js:

```js
import React, { useState, useEffect } from 'react';
import viewarApi from 'viewar-api';
import viewarGuide from 'viewar-guide';
import styles from './app.scss';

export default (props) => {
  // State variable holding the tracking status (default false).
  const [tracking, setTracking] = useState(false);

  useEffect(() => {
    async function onTrackingChanges(evt) {
      setTracking(evt.tracked); // Update any tracking changes.

      await viewarGuide.start(); // Start the guide's internal update loop.
      viewarGuide.requestGuide(); // Let the guide appear in front of the user.
    }

    async function activateTracking() {
      await viewarApi.cameras.arCamera.activate(); // Activate AR camera.
      viewarApi.tracker.on('trackingTargetStatusChanged', onTrackingChanges); // Listen for tracking changes.
      await viewarApi.tracker.activate(); // Activate the default tracker.
    }

    async function interpretSpeechInput({ text, language }) {
      // Return specific message if input text contains "name".
      if (text.toLowerCase().indexOf('name') !== -1) {
        return 'My name is Avatar';
      }

      // Default message.
      return 'Sorry, Please repeat.';
    }

    async function initGuide() {
      viewarGuide.setup({
        // Setup the guide.
        viewarApi,
        config: {
          language: 'en-GB', // Speech language.
          text: {
            greetUser: `Hello, I'm your Arvatar.`, // Custom greet message.
          },
        },
        interpretSpeechInput, // Pass function to interpret speech input
      });

      await viewarGuide.init(); // Initialize all the resources (e.g. insert model).
    }

    // Initialize the guide.
    initGuide();

    // Activate the tracking.
    activateTracking();
  }, []); // Empty array => run only on component did mount.

  async function getTouchFloorPosition(x, y) {
    // Simulate a touch ray on x/y screen position and return the first floor hit.
    const touchResult = await viewarApi.sceneManager.simulateTouchRay(x, y);
    if (touchResult.floors.length) {
      return touchResult.floors[0];
    }
  }

  async function handleTouch(ev) {
    // Get screen coordinates from touch between 0...1 in x and y direction.
    const x = ev.clientX / ev.target.offsetWidth;
    const y = ev.clientY / ev.target.offsetHeight;

    const position = await getTouchFloorPosition(x, y);
    if (position) {
      // Let the guide follow a path.
      viewarGuide.followPath(
        [
          {
            pose: {
              position, // The touch position.
            },
          },
        ],
        'This is your destination.'
      ); // The sentence the guide will speak upon destionation arrival.
    }
  }

  // Render different message dependend on tracking status.
  if (tracking) {
    return (
      <React.Fragment>
        <div className={styles.TouchOverlay} onClick={handleTouch} />
        <div className={styles.TrackingHint}>Touch the floor to move your Arvatar.</div>
      </React.Fragment>
    );
  } else {
    return (
      <div className={styles.TrackingHint}>
        Please film the floor and move your device sideways.
      </div>
    );
  }
};
```

app.scss:

```css
.TrackingHint {
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 1em 2em;
  border-radius: 1em;
}

.TouchOverlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
```

### Deploy Your App

To deploy your app, simply run:

```bash
viewar deploy            # Deploy app files to your app ID.
```

Now you can see your changes on your device without running a local development server \(uncheck the LAN Development Mode in the ViewAR SDK app\).

### Additional Improvements

Are you looking for more improvements? Try to display the guide's speech output as text in the tracking hint! Use:

```js
guide.on('guideSpeaking', (input) => {
  console.log(`[${input.speaker}] ${input.sentence}`);
});
```

Another task would be to record a route while walking with the device in your hands and then let the guide follow this path. Maybe this will come in handy:

```js
const currentPose = await viewarApi.cameras.activeCamera.updatePose();
```

You can use either a timeout based approach \(record route position every n seconds\) or a button based approach \(place a waypoint on button click\).
