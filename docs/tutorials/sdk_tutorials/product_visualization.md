---
id: product_visualization
title: Product Visualization
---

## Create an AR App using React.js

#### Goal

Before we get started we briefly want to demonstrate you what you are going to build during this tutorial.

The application allows us to add a chair to the flow at any position in the room and even drag it around. Further you can select switch between various materials for the chair.

Now that you know what this tutorial is about, let’s start your AR journey!

The final example can be found here for reference: [https://github.com/nikgraf/ar-app](https://github.com/nikgraf/ar-app)

[Let's get started! >](./setup)

## Setup

### Prequestions

Make sure you have:

- Node.js (version 6.0.0 or higher)
- npm package manager (version 3 or higher)

#### Install the ViewAR CLI

The easiest way to setup a new ViewAR application is to use the CLI. In a terminal run:

```bash
npm install -g @viewar/cli
```

#### Create your first Project

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

#### Phone Setup

Next you need to setup your phone. While the mock mode allows you to develop the UI quickly using mocked tracking events, especially for the first try it's more fun using a real phone.

Download the ViewAR SDK App either from the

- Apple Store [https://itunes.apple.com/us/app/viewar-sdk/id1097511807](https://itunes.apple.com/us/app/viewar-sdk/id1097511807)
- Google Play Store [https://play.google.com/store/apps/details?id=com.viewar.sdk](https://play.google.com/store/apps/details?id=com.viewar.sdk)

![](assets/viewar sdk2.svg)

Make sure that your phone and computer are in the same local network.

Next start the app, switch to LAN Development Mode and fill the fields with

1. Your App ID
2. Version can be empty
3. IP and port of your mocked server

## Initialize SDK

The ViewAR SDK is a JavaScript module allowing you to interact with native functionality like activating the camera, tracking the environment with ARKit/ARCore or moving 3D objects rendered with the native 3D engine.

Let's get right into it. We remove all files in the`src`directory except`index.html & polyfills.js`. Then we create a new `index.js` file. In there we import the viewar-api and initialise it:

```js
import viewarApi from 'viewar-api';

async function init() {
  await viewarApi.init();
  // you can interact with viewar here …
}

init();
```

The \`init\` function is returning an instance of the viewarApi. It is an async function and therefor we need to await for the result.

For example once active we can activate the camera.

```js
import viewarApi from 'viewar-api';

async function init() {
  await viewarApi.init();
  await viewarApi.cameras.arCamera.activate();
}

init();
```

Let's verify the application on your phone.

You should see that your application new requests access to your camera and once you approved, you can should see the camera view on your screen.

<img src="/assets/ar-tutorial-camera.png" alt="camera" style="width: 100%; max-width: 213px">

## Activate AR tracking

In order to activate AR tracking we can use the following command:

```js
// on iOS ARKit and on Android ARCore will be used
await viewarApi.tracker.activate();
```

This only triggers the tracker activation. In order to get notified when the tracking is active we need to listen to a the \`trackingTargetStatusChanged\` event.

A full example would look like this:

```js
import viewarApi from 'viewar-api';

async function init() {
  function onTrackingChanges(evt) {
    alert(`is tracking ${evt.tracked}`);
  }

  await viewarApi.init();
  await viewarApi.cameras.arCamera.activate();

  viewarApi.tracker.on('trackingTargetStatusChanged', onTrackingChanges);
  await viewarApi.tracker.activate();
}

init();
```

Restart the application on your phone, then slightly move it to left to right filming the ground in front of you until you see the \`is tracking true\` alert. It should look like this:

![](assets/ar-tutorial-camera-alert.png)

## Model

As a next step we want to leverage that we can keep track of the position by placing a 3D model right in front of us. Therefor we need to do 3 things:

1. Load a model

2. Determine the ground position in front of us

3. Insert the model into the scene

### Load a model

In this case we want to fetch a chair model. It can be fetched using the viewar api call:

```js
const chairModel = await viewarApi.modelManager.fetchModelFromRepository('65343');
```

Note: An application can fetch it's own model, but the model \`65343\` is made available from everywhere.

#### Determine the ground position in front of us

In order to get a position based on the current camera image we can use \`getPoseInViewingDirection\`. It accepts two arguments. The first one being the the distance away from the camera in millimetres. The second one is a boolean flag. If set to to true the ground position will be returned, while if set to false the position is calculated based on the camera orientation.

```js
const pose = await viewarApi.cameras.arCamera.getPoseInViewingDirection(1800, true);
```

The returned value is a pose - an object containing the position, orientation and scale.

```js
{
  position: { x: 0, y: 0, z: 0 },
  orientation: { w: 1, x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 }
}
```

### Insert the model into the scene

Last but not least we need to insert the model into the scene. Therefor we now need the model as well as the pose:

```js
await viewarApi.sceneManager.insertModel(chairModel, { pose });
```

### Working Example

A full example would look like this:

```js
import viewarApi from 'viewar-api';

async function init() {
  async function onTrackingChanges(evt) {
    if (!evt.tracked) return false;
    const chairModel = await viewarApi.modelManager.fetchModelFromRepository('65343');
    const pose = await viewarApi.cameras.arCamera.getPoseInViewingDirection(1800, true);
    await viewarApi.sceneManager.insertModel(chairModel, { pose });
  }

  await viewarApi.init();
  await viewarApi.cameras.arCamera.activate();
  viewarApi.tracker.on('trackingTargetStatusChanged', onTrackingChanges);
  await viewarApi.tracker.activate();
}

init();
```

Restart the application on your phone, then slightly move it to left to right filming the ground in front of you until you see the chair. It should looks like this:

![](assets/ar-tutorial-camera-chair.png)

The best part here is that by default each model is draggable. You only need to touch the model on the screen and move it around. Using two fingers you can even rotate the model.

![](assets/model_dragable.gif)

## Material Selector

In this step we want to a user interface to allow users to switch between the various materials supported by this model.

To do so we want to use React to render our UI. To do this in the same index.js file we can render a Hello world text:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import viewarApi from 'viewar-api';

function App() {
  return <div>Hello World</div>;
}

async function init() {
  await viewarApi.init();
  // viewar code …

  ReactDOM.render(<App />, document.getElementById('app'));
}

init();
```

No we need to know which materials are available for this model. In our case we can extract them from the \`chair.properies\`. All of them are materials and the object contains this information:

```js
{
  "Fabric": {
    "name": "Fabric",
    "values": [
      {
        "key": "123",
        "imageUrl": "https://api.viewar.com/resources/DownloadImage/display:1/id:36662/name:thumb_36662_1481894366%23%23FabricmatMammothFabric1_123.jpg"
      },
      {
        "key": "152",
        "imageUrl": "https://api.viewar.com/resources/DownloadImage/display:1/id:36662/name:thumb_36662_1481894366%23%23FabricmatMammothFabric1_152.jpg"
      },
    ],
    "value": {
      "key": "123",
      "imageUrl": "https://api.viewar.com/resources/DownloadImage/display:1/id:36662/name:thumb_36662_1481894366%23%23FabricmatMammothFabric1_123.jpg"
    }
  },
  "Wood": {
    "name": "Wood",
    "values": [
      {
        "key": "beech",
        "imageUrl": "https://api.viewar.com/resources/DownloadImage/display:1/id:36662/name:thumb_36662_1481894366%23%23WoodmatMammothWood1_beech.jpg"
      },
      {
        "key": "darkrawwood2",
        "imageUrl": "https://api.viewar.com/resources/DownloadImage/display:1/id:36662/name:thumb_36662_1481894366%23%23WoodmatMammothWood1_darkrawwood2.jpg"
      }
    ],
    "value": {
      "key": "beech",
      "imageUrl": "https://api.viewar.com/resources/DownloadImage/display:1/id:36662/name:thumb_36662_1481894366%23%23WoodmatMammothWood1_beech.jpg"
    }
  }
}
```

That said there are more materials and properties in this structure, but based on the above structure we can create a MaterialSelector component.

**Note:** The model was prepared using the ViewAR Material Editor. You can find more information on how to do that in the section [ViewAR Material Editor](../../3d_content/custom_models#MaterialEditor).

We create a file `MaterialSelector.js` allowing us to switch between materials. Before we edit the file we install the package  
styled-components.

```
npm install --save styled-components
```

In `MaterialSelector.js` we import React and create a couple styled components.

```js
import React from 'react';
import styled from 'styled-components';

const MaterialSelect = styled.input`
  width: 50px;
  height: 50px;
  border-radius: 200rem;
  pointer-events: auto;
  margin: 0 0.5rem;
  border: 2px solid ${(props) => (props.active ? '#fff' : 'transparent')};

  :focus {
    outline: 0;
    border: 2px solid '#fff';
  }
`;

const Row = styled.div`
  text-align: center;

  :last-child {
    margin-bottom: 2rem;
  }
`;

const Info = styled.p`
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;
```

Next up we iterate over the list of values and show the one that's active:

```js
export default function MaterialSelector({ materials, onUpdateMaterial }) {
  return (
    <div>
      {Object.values(materials).map((material) => (
        <Row key={material.name}>
          <Info>{material.name}</Info>
          {material.values.map((option) => (
            <MaterialSelect
              type="image"
              src={option.imageUrl}
              alt={option.key}
              key={option.key}
              active={option.key === material.value.key}
              onClick={(evt) => {
                evt.preventDefault();
                onUpdateMaterial(material.name, option.key);
              }}
            />
          ))}
        </Row>
      ))}
    </div>
  );
}
```

Next we can use the material selector once the chair is loaded and inserted into the scene

```js
import MaterialSelector from './MaterialSelector';

function App(props) {
  async function updateMaterial(key, value) {
    await props.chair.setPropertyValues({ [key]: value });
  }

  return (
    <MaterialSelector
      materials={props.chair.properties}
      onUpdateMaterial={updateMaterial}
    />
  );
}
```

Then we need to render our UI. We can do this using ReactDOM and pass the chair instance into the app function as a prop.

```js
const chair = await viewarApi.sceneManager.insertModel(chairModel, { pose });
ReactDOM.render(<App chair={chair} />, document.getElementById('app'));
```

Great, this will already work, in the sense that once we click on a material the chair material will update. Unfortunately the React UI won't since we haven't indicated to React that it should re-render. The issue here is that we basically have two different rendering engines \(the 3D engine and the DOM UI\) not being connected. That's good, because then one doesn't block the other, but it requires us to keep updates in sync.

**Note:** There are multiple ways to tackle this now. For once we could move all the chair properties into the state of a React component and update the chair properties with a callback on state updates. The other way is to stick to updating the properties directly on the model and force a React re-render once we know the model instance changed. In this case we go for the lat

Next up we somehow need to trigger an update whenever the material changes. Therefor we are going to use React Hooks.

Since there is no hook that simply tells React to re-render we create our own. The state is a number and it just increases it by one every time it's invoked and therefor triggering an update.

```js
import React, { useReducer } from 'react';

const useForceUpdate = () => useReducer((state) => state + 1, 0)[1];
```

Now we can update our `updateMaterial` function to force a re-render once the material update succeeded.

```js
import React, { useReducer } from 'react';

const useForceUpdate = () => useReducer((state) => state + 1, 0)[1];

function App(props) {
  const forceUpdate = useForceUpdate();

  async function updateMaterial(key, value) {
    await props.chair.setPropertyValues({ [key]: value });
    forceUpdate();
  }

  return (
    <MaterialSelector
      materials={props.chair.properties}
      onUpdateMaterial={updateMaterial}
    />
  );
}
```

Last but not least we can improve the positioning of our material selector by adding some global styles into our `index.js`.

```js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    position: fixed;
    overflow: hidden;
  }

  #app {
    pointer-events: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
```

**Note: **In the global styles we set the pointer-events to none and for the material inputs we reset it to auto. This is needed to make sure the clicks can bubble through the event down to the 3D view in order to drag the model by touching the screen.

Last but not least we need to add the GobalStyle component to our React tree.

```js
function App(props) {
  const forceUpdate = useForceUpdate();

  async function updateMaterial(key, value) {
    await props.chair.setPropertyValues({ [key]: value });
    forceUpdate();
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <MaterialSelector
        materials={props.chair.properties}
        onUpdateMaterial={updateMaterial}
      />
    </React.Fragment>
  );
}
```

![](assets/material_selector.gif)

## Add an Introduction

In this step we want to improve the user experience by adding an introduction view as well as an indicator show that the users has to move the camera.

#### Introduction View

We want to give the user a preview of the chairs, tell them what they can do and a button to get started. The screen requires some styling, but apart from that is rather simple.

![](assets/mammoth_chair.png)

We create a file `Welcome.js` and add the code below. Be aware that this time we again need to set the pointer-events to auto for the button.

```js
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #fff;
  padding-top: 15%;
  text-align: center;
  height: 100%;
  pointer-events: none;
  font-family: Helvetica, Arial, sans-serif;
`;

const Button = styled.button`
  pointer-events: auto;
  background-color: #4d9cff;
  border: 1px solid #448ae2;
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  font-size: 0.85rem;
  height: 2.2rem;
  line-height: 2.2rem;
  letter-spacing: 0.05rem;
  padding: 0 1.5rem;
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`;

const List = styled.ol`
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li`
  margin-bottom: 0.6rem;
`;

export default function Welcome(props) {
  return (
    <Wrapper>
      <h2>Mammoth Chair</h2>
      <img
        width="256"
        height="256"
        src="https://api.viewar.com/model/downloadImage/display:1/size:large/id:65343"
      />
      <h3>Instructions</h3>
      <List>
        <Item>Start the AR Mode</Item>
        <Item>Scan the environment</Item>
        <Item>Move the chair</Item>
        <Item>Pick your favourite materials</Item>
      </List>
      <Button onClick={props.onClose}>Start AR Mode</Button>
    </Wrapper>
  );
}
```

Our current App structure activates the camera before we initialize the React tree. We want to change this to avoid any delay and want to move all the AR logic to an Ar component. Therefor our App component can look like this. It shows the Welcome or Ar view depending on the isWelcomeScreen state which is initialized with true.

```js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import viewarApi from 'viewar-api';
import { createGlobalStyle } from 'styled-components';
import Ar from './Ar';
import Welcome from './Welcome';

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  overflow: hidden;
}

#app {
  pointer-events: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
`;

function App(props) {
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);

  return (
    <React.Fragment>
      <GlobalStyle />
      {isWelcomeScreen ? <Welcome onClose={() => setIsWelcomeScreen(false)} /> : <Ar />}
    </React.Fragment>
  );
}

async function init() {
  await viewarApi.init();
  ReactDOM.render(<App />, document.getElementById('app'));
}

init();
```

Now the only missing thing is our AR component. While the view-ar logic is exactly the same as before it's not encapsulated into a useEffect, which is running only once after the first initial render due the empty array as second parameter in useEffect.

```js
import React, { useState, useReducer, useEffect } from 'react';
import viewarApi from 'viewar-api';
import MaterialSelector from './MaterialSelector';

const useForceUpdate = () => useReducer((state) => state + 1, 0)[1];

export default function Ar(props) {
  const forceUpdate = useForceUpdate();
  const [chair, setChair] = useState(null);

  useEffect(() => {
    async function onTrackingChanges(evt) {
      if (!evt.tracked) return false;
      const chairModel = await viewarApi.modelManager.fetchModelFromRepository('65343');
      const pose = await viewarApi.cameras.arCamera.getPoseInViewingDirection(1800, true);
      const chair = await viewarApi.sceneManager.insertModel(chairModel, {
        pose,
      });
      setChair(chair);
    }

    async function activateTracking() {
      await viewarApi.cameras.arCamera.activate();
      viewarApi.tracker.on('trackingTargetStatusChanged', onTrackingChanges);
      await viewarApi.tracker.activate();
    }

    activateTracking();
  }, []);

  async function updateMaterial(key, value) {
    await chair.setPropertyValues({ [key]: value });
    forceUpdate();
  }

  if (!chair) return null;

  return (
    <MaterialSelector materials={chair.properties} onUpdateMaterial={updateMaterial} />
  );
}
```

#### Tracking Indicator

When switching to the Ar component the user should move his phone until the tracker can identify the floor. To indicate this we want to show a tracker hint. The Gif we are using can be downloaded here [https://github.com/nikgraf/ar-app/blob/master/assets/tracking_animation_phone_portrait.gif](https://github.com/nikgraf/ar-app/blob/master/assets/tracking_animation_phone_portrait.gif).

In `Ar.js` we can add the following additions:

```js
// … other imports
import styled from 'styled-components';
import phonePortraitPath from '../assets/tracking_animation_phone_portrait.gif';

const TrackingHint = styled.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  background: url(${phonePortraitPath}) 50% no-repeat;
  background-size: 200px 100px;
`;

export default function Ar(props) {
  // … all the other code

  if (!chair) return <TrackingHint />;

  return (
    <MaterialSelector materials={chair.properties} onUpdateMaterial={updateMaterial} />
  );
}
```

The result should look like this:

![](https://user-images.githubusercontent.com/223045/49935956-c797c600-fed2-11e8-8517-cbed97cff07e.gif)

Congratulations, you successfully finished the whole tutorial!

We hope this was helpful to you and looking forward to hear and see what you built with the ViewAR SDK.
