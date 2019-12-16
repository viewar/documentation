---
id: quickstart
title: Quickstart
---

> _have a look at the ViewAR's [interactive live example](https://webversion.viewar.com/com.viewar.sandbox/100/)._

The ViewAR JavaScript API lets you access the Scene, Models, Cameras and Tracking Systems functionalities offered by the ViewAR Core from the ViewAR Application. In other words - it serves as an abstraction layer between the HTML UI and the C++ ViewAR Core. It allows you to utilize functionalitites of different services (think - ARKit, ARCore, Placenote, ...) with a unified set of JS commands. What it means, is that no platform-specific or device-specific knowledge is neccessary and that you may seamlessly switch between different technolgies (e.g. tracking systems).

It would be a good idea to get an overview of the ViewAR API logic before diving into this chapter.
If you haven't done it yet, give our [Basic Concepts](./basic_concepts) section a moment.

## Scene Manager

[Scene](./basic_concepts#scene) is a collection of all virtual objects. Objects may be organised into Ungrouped and Grouped Containers. Scene Manipulation is possible through a Scene Manager.

### Insert a Container into a Scene

A Container is able to contain multiple models or other containers. To insert a new Container use the statement bellow. The method `insertContainer` returns the inserted instance, so you can use it later on.

```js
const pose = {
  position: { x: 100, y: 200, z: 300 },
};

const container = await sceneManager.insertContainer({ pose });
```

### Insert a model into a scene

You can insert a model into a Scene by passing the model as the first argument into the `insertModel` method.
The optional second argument is an object which holds configurations, for example the pose of the model. The method `insertModel` returns the inserted instance, so that you can use it later on.

```js
const pose = {
  position: { x: 100, y: 200, z: 300 },
  scale: { x: 10, y: 10, z: 10 },
  orientation: { x: 0, y: 0, z: 0, w: 1 },
};

await sceneManager.insertModel(model, { pose });
```

To insert a model into a container you can use the `insertModel` method and pass the container instance as a `parent` property into the configuration object.

```js
const pose = {
  position: { x: 100, y: 200, z: 300 },
  scale: { x: 10, y: 10, z: 10 },
  orientation: { x: 0, y: 0, z: 0, w: 1 },
};

const instance = await sceneManager.insertModel(model, { parent: container });
```

### Remove a node from a scene

A Node can be an [Instance](./basic_concepts#model-instances) of a Model or [Container](./basic_concepts#containers). To remove a Node from a Scene, you need to pass the Instance into a `removeNode` method. You can access Scene Nodes by using the children property of the scene property.

```js
const instance = sceneManager.scene.children[0];
await sceneManager.removeNode(instance);
```

## Scene State

The Scene State holds all the information about the current setup of the Scene, such as inserted Nodes and their current state e.g. pose and visibility. At any point during the runtime, it is possible to serialise the current Scene State. Keep in mind that the Animation State and Tracking State do not get serialised, meaning that they cannot be saved (although their initial values may be defined for example at app start). The serialised State can than be stored and recovered later on, for example in order to provide Save/Load functionality. Furthermore, it is possible to synchronise Scene States between devices.

### get current Scene State

To retrieve and save the current Scene State to the local storage, use the following statement:

```js
const sceneState = sceneManager.getSceneState();
localStorage.setItem('sceneState', JSON.stringify(sceneState));
```

Optionally, use the safe, asynchronous `getSceneStateSafe` method, which only gets the Scene State after other current scene manipualtions are finished:

```js
const sceneState = await sceneManager.getSceneStateSafe();
localStorage.setItem('sceneState', JSON.stringify(sceneState));
```

### Set a Scene State

To set a Scene State, use the `setSceneState` method and pass the `sceneState` object as an argument. In this example we load the Scene State saved locally in from the example above.

```js
const sceneState = JSON.parse(localStorage.getItem('sceneState'));
await sceneManager.setSceneState(sceneState);
```

## Model Manager

### Model

A 3D Model is a collection of data, resources, and assets that describe a virtual object. In the ViewAR System, models are created externally by 3D designers and uploaded to ViewAR 3D CMS.

**The Model Manager** provides access to all loaded [Models](./basic_concepts#models) and can fetch additional ones from repository.

> _The Model Manager offers a convenient method `downloadAll\(\)` that downloads and caches all models and their assets used by an application. This way, the program may be fully usable offline._

### Fetch a Model from the Catalogue

In order to be able to insert a Model into a Scene, you may retrieve it from the 3D Catalogue. The findModel method does not download the actual model files, but only the Model description. This means that, in order to actually insert it in your scene, you'll need an addditional command ([sceneManager.insertModel]). The Model download happens when inserting.

To retrieve a Model from the Catalogue, use either its Model ID or Foreign Key.

```js
const model = modelManager.findModelById(20); // by Model ID
```

```js
const model = modelManager.findModelByForeignKey('sheep'); // by Foreign Key
```

> _Keep in mind that every Model ID is unique in the scale of the whole ViewAR CMS, whereas the same Foreign Key may be assigned to multiple Models. The Foreign Key may be defined in the Model Editor_  
> under _[ViewAR Developer Portal](https://developer.viewar.com) > My Content > All Items > Model Editor > Foreign Key_

### Accessing Categories

Every Model visible in a ViewAR App must be assigned to a [Category](./basic_concepts#model-categories).  
_[ViewAR Developer Portal](https://developer.viewar.com) > My Content > All Items > Model Editor > Category_

To access the Model's Root Category use:

```js
modelManager.rootCategory;
```

To access the Category's children (they can be models or other Categories), use:

```js
// access categories children
modelManager.rootCategory.children;
// access deeper levels of the sceneTree
modelManager.rootCategory.children[0].children;
```

### Download all App Models

In order to fetch all Models (and their assets) used by the Application, so that the program would be fully usable offline, go for:

```js
await modelManager.downloadAll();
```

## Tracking

Tracking Systems try to estimate the world pose \(position and orientation\) of a mobile device \(e.g. phone, tablet, head mounted display\) in real-time. ViewAR System integrates numerous technological solutions and offers them through a coherent JavaScript API, so that you wouldn't have to worry about details of a particular technology integration. Furthermore, if a more robust Tracking System appears on the market, you can switch to it with a minimal effort.

### Activate, Deactivate and Reset

> _There can only be one tracking active at a time._  
> _If one tracker gets enabled, the previous active tracker gets deactivated automatically._

A chosen Tracking System may be managed as follows:

```js
await viewarApi.trackers.ARKit.activate(); // Enable tracking.
await viewarApi.trackers.ARKit.reset(); // Reset tracking.
await viewarApi.trackers.ARKit.deactivate(); // Disable tracking.
```

### Trackers list

The used trackers list may be accessed as follows:

```js
let trackers = Object.values(viewarApi.trackers);
```

Some trackers need to be initialized and detect the ground plane before they can start working. In such a case, you can listen to the `trackingTargetStatusChanged` event for a tracker. After the ground is detected, its position needs to be confirmed \(either automatically or with using a user's input\). It applies for ARKit, ARCore, Placenote, Wikitude (manual), Structure.io (manual), 6D (manual).

```js
let tracker = Object.values(viewarApi.trackers)[0];

const onTrackingTargetStatusChanged = async function() {
  // Check if tracker is tracking and confirm ground.
  if (tracker.tracking) {
    tracker.off('trackingTargetStatusChanged', onTrackingTargetStatusChanged); // Ground plane needs to be confirmed only once.
    await tracker.confirmGround(); // Automatically confirm ground when ground plane is found.
  }
};

// Listen for tracking changed status.
tracker.on('trackingTargetStatusChanged', onTrackingTargetStatusChanged);
```

> _After deactivating or resetting a tracker, it needs to be calibrated again._  
> _This means that the detected and/or confirmed ground plane gets lost._

## Cameras

[Cameras](./basic_concepts#cameras) control how the current scene is viewed.  
In ViewAR System, there are three types of Cameras, all held in and controlled by the Camera Object:

- **Perspective Camera** (perspectiveCamera)
- **Virtual Reality Camera** (vrCamera)
- **Augmented Reality Camera** (arCamera)

### Activating a Camera

To activate a Camera, call the corresponding asynchronous function.  
The Camera's internal state will be automatically set to _active_.

```javascript
const camera = cameras.arCamera; // Activate the Augmented Reality Camera.
await camera.activate();
```

```javascript
let camera = cameras.vrCamera; // Activate the Virtual Reality Camera.
await camera.activate();
```

```javascript
let camera = cameras.perspectiveCamera; // Activate the Perspective Camera.
await camera.activate();
```

### Check the Camera state

One can easily check if a specific camera is active at the moment:

```javascript
// Check if Augmented Reality Camera is active.
const camera = cameras.arCamera;
if (camera.active) {
  console.log('Augmented Reality Camera is active.');
} else {
  console.log('Augmented Reality Camera is not active.');
}
```

### Enable/disable stereoscopic rendering

For Head-Mounted Displays \(HMD\), the stereoscopic rendering should be enabled. Then two pictures, horizontally next to each other, will be rendered to the display instead of one. This setting must be enabled/disabled for each camera individually.

```javascript
const camera = cameras.perspectiveCamera;

await camera.enableHmdMode(); // Enable stereoscopic rendering for head-mounted displays.

await camera.disableHmdMode(); // Disable stereoscopic rendering for head-mounted displays.
```

### Camera Pose

The Camera Pose defines the position and orientation of the camera in the 3D space \(virtual or real world, respectively\). It is defined differently for each Camera.

#### Perspective Camera (perspectiveCamera)

The Perspective Camera's Pose is defined with the use of:

- position (3d vector)
- lookAt (3d vector)

```javascript
{
    position: { x, y, z },
    lookAt: { x, y, z }
}
```

#### Virtual Reality Camera (vrCamera)

The Virtual Reality Camera's Pose is defined with the use of:

- position (3d vector)
- orientation ([Quaternion](additional_information/quaternion.md))

```javascript
{
position: { x, y, z },
orientation: { w, x, y, z }
}
```

#### Augmented Reality Camera (arCamera)

The Augmented Reality Camera's Pose is defined with the use of:

- position (3d vector)
- orientation ([Quaternion](additional_information/quaternion.md))

```javascript
{
position: { x, y, z },
orientation: { w, x, y, z }
}
```

### Get the current Camera Pose

For performance reasons, if a user moves around with the device or within the scene, the Pose is _not_ updated automatically. Therefore, before working with the Camera Pose, it is necessary to retrieve and update it.

```javascript
const camera = camera.vrCamera;

// Retrieve pose from last update (this will NOT return the current camera pose)
const pose = camera.pose;

// Update and get the current camera pose
const pose = await camera.updatePose();
```

The Camera Pose may be updated with a fixed interval.

```javascript
const camera = cameras.vrCamera;

// Start the continous pose update with updates every 100ms.
const interval = 100;
camera.startPoseUpdate(interval);

// Stop the previously started continous pose update.
camera.stopPoseUpdate();
```

### Get Pose in the viewing direction

Sometimes it comes in handy to get the Pose at a certain distance in front of the Camera (e.g. to insert a Model Instance in front of the user). The asynchronous method `getPoseInViewingDirection` calculates a point in the 3D space in front of the Camera at a specified distance and returns its Pose assigning the Camera's orientation. Keep in mind that, no matter the Camera orientation, the distance is measured horizontally taking the Camera Origin as the start point. The function may be used for every Camera.

It function takes two arguments:

- distance [mm]
- projectToFloor [Boolean] - if true, the resulting point will be projected to the ground XZ plane (in other words - it will have the vertical coordinate of a value "0")

See the example below:

```javascript
// Retrieve the Pose 5 metres in front of the Augmented Reality Camera, projected to the floor
const camera = cameras.arCamera;
const projectToFloor = true;
const distanceInMM = 5000;

const pose = await camera.getPoseInViewingDirection(distanceInMM, projectToFloor);
```

### Freeze Frames

At the current state of technology, it is extremely impractical to faithfully scan and store real-world environments. Therefore, capturing and restoring of an Augmented Reality experience is practically impossible. ViewAR SDK offers a compromise in the form of Freeze Frames.

AR Camera supports freezing and unfreezing of the Camera View. While frozen, Camera feed and Pose do not get updated, so that the image may easily be saved. Freeze Frames may be switched between while preserving the spatial relations between scene objects as expected. They can also be uploaded to the cloud storage and shared between users of the app.

A Freeze Frame is an Object consisting of:

- Camera Image
- Tracking information

```js
freezeFrame = {
  name: 'freezeFrame-1',
  thumbnailUrl: 'example.com/freezeFrame-1-thumb.jpg',
  imageUrl: 'example.com/freezeFrame-1-large.jpg',
};
```

#### Freeze & unfreeze the View

```js
const camera = cameras.arCamera;
await camera.freeze(); // Freeze the AR Camera
await camera.unfreeze(); // Unfreeze the AR Camera
```

#### Save a Freeze Frame

The following method freezes the arCamera feed, then saves and returns a saved Freeze Frame, to finally unfreeze the Camera.

```js
const camera = cameras.arCamera;
await camera.saveFreezeFrame();
```

#### List of saved Freeze Frames

All saved Freeze Frames are saved in a freezeFrames Array and may be accessed with:

```js
const camera = cameras.arCamera;
await camera.freezeFrames;
```

#### Load a Freeze Frame

A saved Freeze Frame may be loaded to the Scene in a form of a freezeFrame Object. In such a case the Scene Nodes (Containers and Model Instances) may still be moved and interacted with, however, the Camera Pose cannot be altered.

```js
const camera = cameras.arCamera;
await camera.downloadFreezeFrame('freezeFrame-1');
```

## Touches

Touches are one of the User Input types.
Scene and Model Instances can be manipulated by touching the screen.

The following touches of the Model Instance are recognised:

- **Single finger** - select & move
- **Two fingers** - rotate
- **Three fingers** - change the height

The following interactions with the Camera are recognized by touching any space in the scene that is not occupied by the model:

- **Single finger** - rotate
- **Two fingers** - move

The default behavior can also be changed manually by using our [JavaScript API Reference](http://test2.3.viewar.com/docs/index.html).

### Touches & UI Elements

Touches interpretation works top-down, menaing that - unless specified otherwise - they are caught by the first element on their way. In order to make an element "invisible" to the Touches, use a CSS class property `pointer-events`:

```css
.exampleClass {
  pointer-events: none;
}
```

Keep in mind that the approach above will also affect all Children of the `exampleClass` UI element. In such a case events like `onclick` or `ontouchstart` will not fire. Therefore, for each HTML element that needs these events (e.g. a button) pointer events should be activated manually. The example below solves the problem on an HTML element level:

```css
.exampleClass {
  pointer-events: none;
}

button {
  pointer-events: auto;
}
```

## instances

[Model Instance](./basic_concepts#model-instances) is a unique occurence of a model inserted in a ViewAR App. It is basically a copy of a Model loaded from the Model Catalogue and assigned to a variable in the application. While the original Model remains unchanged, the Model Instance may be manipulated inside the program.

### Change pose

Every Model Instance has a pose, describing its position, orientation and scale. It can be accessed through the `pose` property of an Instance.

```js
instance.pose = {
  position: { x: 0, y: 0, z: 0 },
  orientation: { w: 1, x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
};
```

To change the position of an instance you can pass a pose object into the `setPose` method. The new pose object is merged with the old one, so you do not need to provide every single pose property.

```js
const oldPosition = instance.pose.position;

await instance.setPose({
  position: {
    x: oldPosition.x + 100,
    y: 100,
    z: 100,
  },
});
```

### Change visibility

Every Model Instance has a Boolean `visible` property which may be changed using the `setVisibility`:

```js
await instance.setVisibility(true);
await instance.setVisibility(false);
```

Conveniently, the Model Instance or Container visibility may be set at the moment of their insertion into the Scene, by passing the `visible` property into the configuration object:

```js
const model = await modelManager.getModelFromRepository(20);
await sceneManager.insertModel(model, { visible: false });
```

### Read next

- [ViewAR JavaScript API Playground](https://webversion.viewar.com/com.viewar.sandbox/100/)
- [ViewAR API References](http://test2.3.viewar.com/docs/index.html)
