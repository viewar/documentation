### Initialise the SDK

The ViewAR SDK is a JavaScript module allowing you to interact with native functionality like activating the camera, tracking the environment with ARKit/ARCore or moving 3D objects rendered with the native 3D engine.

Let's get right into it. We remove all files in the`src`directory except`index.html & polyfills.js`. Then we create a new `index.js` file. In there we import the viewar-api and initialise it:

```js
import viewarApi from "viewar-api";

async function init() {
  await viewarApi.init();
  // you can interact with viewar here …
}

init();
```

The \`init\` function is returning an instance of the viewarApi. It is an async function and therefor we need to await for the result.

For example once active we can activate the camera.

```js
import viewarApi from "viewar-api";

async function init() {
  await viewarApi.init();
  await viewarApi.cameras.arCamera.activate();
}

init();
```

Let's verify the application on your phone.

You should see that your application new requests access to your camera and once you approved, you can should see the camera view on your screen.

<img src="/assets/ar-tutorial-camera.png" alt="camera" style="width: 100%; max-width: 213px">


[< Previous Step](/tutorials/react/setup.md)  ｜  [Next Step >](/tutorials/react/activating-the-ar-camera.md)
