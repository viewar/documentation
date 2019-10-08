---
id: ar_camera
title: Activate AR tracking
---

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
