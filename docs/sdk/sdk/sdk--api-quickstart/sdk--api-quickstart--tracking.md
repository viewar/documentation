### Tracking
Tracking Systems try to estimate the world pose \(position and orientation\) of a mobile device \(e.g. phone, tablet, head mounted display\) in real-time. ViewAR System integrates numerous technological solutions and offers them through a coherent JavaScript API, so that you wouldn't have to worry about details of a particular technology integration. Furthermore, if a more robust Tracking System appears on the market, you can switch to it with a minimal effort.

#### Activating, Deactivating & Resetting tracking
A chosen Tracking System may be managed as follows:
```js
await viewarApi.trackers.ARKit.activate(); // Enable tracking.
await viewarApi.trackers.ARKit.reset(); // Reset tracking.
await viewarApi.trackers.ARKit.deactivate(); // Disable tracking.
```
###### Tip
_There can only be one tracking active at a time. If one tracker gets enabled, the previous active tracker gets deactivated automatically._

#### Trackers list
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

###### Tip
_After deactivating or resetting a tracker, it needs to be calibrated again. This means that the detected and/or confirmed ground plane gets lost._

### Read next
[ViewAR API Quickstart - Cameras](sdk/sdk--api-quickstart/sdk--api-quickstart--cameras.md) - ViewAR API Cameras guide
[ViewAR API References](http://test2.3.viewar.com/docs/index.html) - Complete list of the ViewAR API References
[ViewAR JavaScript API Playground](https://webversion.viewar.com/com.viewar.sandbox/100/) - ViewAR API interactive tutorial
