### Add an Introduction

In this step we want to improve the user experience by adding an introduction view as well as an indicator show that the users has to move the camera.

#### Introduction View

We want to give the user a preview of the chairs, tell them what they can do and a button to get started. The screen requires some styling, but apart from that is rather simple.

![](https://user-images.githubusercontent.com/223045/49935922-b0f16f00-fed2-11e8-8ec1-5ad9a3b3e290.png)

We create a file `Welcome.js` and add the code below. Be aware that this time we again need to set the pointer-events to auto for the button.

```js
import React from "react";
import styled from "styled-components";

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
import React, { useState } from "react";
import ReactDOM from "react-dom";
import viewarApi from "viewar-api";
import { createGlobalStyle } from "styled-components";
import Ar from "./Ar";
import Welcome from "./Welcome";

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
      {isWelcomeScreen ? (
        <Welcome onClose={() => setIsWelcomeScreen(false)} />
      ) : (
        <Ar />
      )}
    </React.Fragment>
  );
}

async function init() {
  await viewarApi.init();
  ReactDOM.render(<App />, document.getElementById("app"));
}

init();
```

Now the only missing thing is our AR component. While the view-ar logic is exactly the same as before it's not encapsulated into a useEffect, which is running only once after the first initial render due the empty array as second parameter in useEffect.

```js
import React, { useState, useReducer, useEffect } from "react";
import viewarApi from "viewar-api";
import MaterialSelector from "./MaterialSelector";

const useForceUpdate = () => useReducer(state => state + 1, 0)[1];

export default function Ar(props) {
  const forceUpdate = useForceUpdate();
  const [chair, setChair] = useState(null);

  useEffect(() => {
    async function onTrackingChanges(evt) {
      if (!evt.tracked) return false;
      const chairModel = await viewarApi.modelManager.fetchModelFromRepository(
        "65343"
      );
      const pose = await viewarApi.cameras.arCamera.getPoseInViewingDirection(
        1800,
        true
      );
      const chair = await viewarApi.sceneManager.insertModel(chairModel, {
        pose
      });
      setChair(chair);
    }

    async function activateTracking() {
      await viewarApi.cameras.arCamera.activate();
      viewarApi.tracker.on("trackingTargetStatusChanged", onTrackingChanges);
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
    <MaterialSelector
      materials={chair.properties}
      onUpdateMaterial={updateMaterial}
    />
  );
}
```

#### Tracking Indicator

When switching to the Ar component the user should move his phone until the tracker can identify the floor. To indicate this we want to show a tracker hint. The Gif we are using can be downloaded here [https://github.com/nikgraf/ar-app/blob/master/assets/tracking_animation_phone_portrait.gif](https://github.com/nikgraf/ar-app/blob/master/assets/tracking_animation_phone_portrait.gif).

In `Ar.js` we can add the following additions:

```js
// … other imports
import styled from "styled-components";
import phonePortraitPath from "../assets/tracking_animation_phone_portrait.gif";

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
    <MaterialSelector
      materials={chair.properties}
      onUpdateMaterial={updateMaterial}
    />
  );
}
```

The result should look like this:

![](https://user-images.githubusercontent.com/223045/49935956-c797c600-fed2-11e8-8517-cbed97cff07e.gif)

Congratulations, you successfully finished the whole tutorial!

We hope this was helpful to you and looking forward to hear and see what you built with the ViewAR SDK.
