---
id: about
title: About
---

#### Goal

Learn how to create a GuideBOT indoor navigation application.
Two tracking versions available: using QR codes or the Placenote tracking.

- More about the [GuideBOT Template](https://www.viewar.com/template/guidebot/)
- Learn to setup GuideBOT Template with the [App Builder](./app_builder) or [CLI](./cli).

#### INTRODUCTION

**Indoor navigation - how does it actually work..?**

We’ll get started just in a minute, but first - a word of introduction to make you aware of what you will be doing.

The goal of the great majority of AR applications is overlaying virtual information on the physical world. Whether it is a streamed image from the device’s camera or a semi-translucent screen of Microsoft HoloLens, the general concept stays the same. In order to inform the device about the desired location of projected information, a tracking system is used (see a [table](/docs/sdk/basic-concepts) with the Tracking Systems Summary).

As for indoor navigation applications, an additional challenge is posed by the fact that the area of service is relatively large, at the same time keeping the precision high. While for outdoor navigations apps, like Google Maps, correctness provided by GPS suffices, it is not the case here.

The release of Apple’s ARKit significantly improved the robustness of AR apps, turning the calibration process into a seamless and effortless experience. Still, in the subject of spatial orientation, there is one more obstacle to overcome – coordination system liability.

The coordination system created by the ARKit has its origin in the starting point of the application, resulting in coordinates being reset with each start of the app. Therefore, although a coherent modelling environment may be visualised, it is not anyhow localised or reproducible. Establishing a stable connection with the real world is necessary to position an AR scene.

ViewAR developed a set of solutions to solve this problem, two of which have been implemented in the GuideBOT app. First one - with the use of QR codes, second - Placenote, a pointcloud based tracking.

However, the application is able to use different tracking approaches, depending on the scenario and the environment and may be adjusted.

**Visual Recognition**
The app learns how an environment looks, creates a pointcloud and re-localizes based on this. This only works in smaller areas (200 square meters) and the environment should not change.
Not really applicable for exhibitions but we could recognize and augment a booth using this approach:  
**[GuideBOT - How it works](https://youtu.be/huHFRSPN5es)**

**Markers/QR Codes**
Placing markers and saving a location of that marker lets the app know where the user is. We tend to use QR codes since the QR code is then already used for app downloads. Users can walk for a distance of 30 meters after filming a QR Code with a drift of 0,5-1,0 meter. This approach is simple, does not require installations and will work stable.

**GPS**
GPS works well outdoors with an accuracy of 5-15 meters. We can also combine GPS with visual recognition of buildings to have accurate AR overlays. This only works outdoors, of course.

**Beacons (standard)**
Using beacons, we can identify the position of the user with an accuracy of 2-3 meters and use compass for directions. The compass has massive drifts indoors and it not that ideal for AR. Still, we are considering implementing a compass correction based on the movement & gyroscope tracking data in combination with multiple measurements.

**Beacons (directional)**
Using directional beacons, we can get the user’s position with an accuracy of a few centimeters. Such installations are way more complex than standard beacons since every beacon-point is wired with network cables. This approach also requires some work in regards to the compass correction but it would be seen as the ideal technology since its accurate and users can enter the experience from everywhere. We are currently looking for potential pilot cases of this technology.

This technology may be easily adapted to serve multiple purposes with indoor navigation, building maintenance, and construction site management being just a beginning.

#### Pricing

Pricing available on request: <sdk@viewar.com>
