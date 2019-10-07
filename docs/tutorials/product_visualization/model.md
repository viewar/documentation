---
id: model
title: Load and Insert a Model
---

As a next step we want to leverage that we can keep track of the position by placing a 3D model right in front of us. Therefor we need to do 3 things:

1. Load a model

2. Determine the ground position in front of us

3. Insert the model into the scene

#### Load a model

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

#### Insert the model into the scene

Last but not least we need to insert the model into the scene. Therefor we now need the model as well as the pose:

```js
await viewarApi.sceneManager.insertModel(chairModel, { pose });
```

#### Working Example

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

![](/assets/ar-tutorial-camera-chair.png)

The best part here is that by default each model is draggable. You only need to touch the model on the screen and move it around. Using two fingers you can even rotate the model.

![](/img/model_dragable.gif)
