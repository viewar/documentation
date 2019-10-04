### Freeze Frames
At the current state of technology, it is extremely impractical to faithfully scan and store real-world environments. Therefore, capturing and restoring of an Augmented Reality experience is practically impossible. ViewAR SDK offers a compromise in the form of Freeze Frames.

AR Camera supports freezing and unfreezing of the Camera View. While frozen, Camera feed and Pose do not get updated, so that the image may easily be saved. Freeze Frames may be switched between while preserving the spatial relations between scene objects as expected. They can also be uploaded to the cloud storage and shared between users of the app.

A Freeze Frame is an Object consisting of:
* Camera Image
* Tracking information

```js
freezeFrame = {
    name: "freezeFrame-1",
    thumbnailUrl: "example.com/freezeFrame-1-thumb.jpg",
    imageUrl: "example.com/freezeFrame-1-large.jpg",
}
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
await camera.downloadFreezeFrame("freezeFrame-1");
```


### Read next
[ViewAR API References](http://test2.3.viewar.com/docs/index.html) - Complete list of the ViewAR API References
[ViewAR JavaScript API Playground](https://webversion.viewar.com/com.viewar.sandbox/100/) - ViewAR API interactive tutorial
