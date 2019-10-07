---
id: cameras
title: Cameras
---

[Cameras](sdk/sdk--basic-concepts/sdk--basic-concepts--cameras.md) control how the current scene is viewed. In ViewAR System, there are three types of Cameras, all held in and controlled by the Camera Object:

- **Perspective Camera** (perspectiveCamera)
- **Virtual Reality Camera** (vrCamera)
- **Augmented Reality Camera** (arCamera)

#### Activating a Camera

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

#### Check the Camera state

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

#### Enable/disable stereoscopic rendering

For Head-Mounted Displays \(HMD\), the stereoscopic rendering should be enabled. Then two pictures, horizontally next to each other, will be rendered to the display instead of one. This setting must be enabled/disabled for each camera individually.

```javascript
const camera = cameras.perspectiveCamera;

await camera.enableHmdMode(); // Enable stereoscopic rendering for head-mounted displays.

await camera.disableHmdMode(); // Disable stereoscopic rendering for head-mounted displays.
```

#### Camera Pose

The Camera Pose defines the position and orientation of the camera in the 3D space \(virtual or real world, respectively\). It is defined differently for each Camera.

##### Perspective Camera (perspectiveCamera)

The Perspective Camera's Pose is defined with the use of:

- position (3d vector)
- lookAt (3d vector)

```javascript
{
    position: { x, y, z },
    lookAt: { x, y, z }
}
```

##### Virtual Reality Camera (vrCamera)

The Virtual Reality Camera's Pose is defined with the use of:

- position (3d vector)
- orientation ([Quaternion](advanced-guides/advanced-guides--quaternion.md))

```javascript
{
position: { x, y, z },
orientation: { w, x, y, z }
}
```

##### Augmented Reality Camera (arCamera)

The Augmented Reality Camera's Pose is defined with the use of:

- position (3d vector)
- orientation ([Quaternion](advanced-guides/advanced-guides--quaternion.md))

```javascript
{
position: { x, y, z },
orientation: { w, x, y, z }
}
```

#### Get the current Camera Pose

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

#### Get Pose in the viewing direction

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

### Read next

- [ViewAR API References](http://test2.3.viewar.com/docs/index.html)
- [ViewAR JavaScript API Playground](https://webversion.viewar.com/com.viewar.sandbox/100/)
