---
id: guidebot_qr
title: GuideBOT QR
---

### Manual

Following this tutorial you'll learn how to use a GuideBOT indoor navigation app using sample QR codes. QR codes might not be the fanciest things on earth, but they are easy to create and do a good job for indoor navigation. People might say that you would like to use a random marker image as a tracker instead of a QR code, but they don't consider that they would have to generate those images, create a database file for tracking that needs to be transferred and that the random marker image does not lead the people to the app download.

##### Device requirements

- An iOS, ARKit compatible device - see: [supported hardware](/docs/sdk/additional_information/hardware).
- Up-to-date version of the ViewAR SDK App (available from the App Store (iOS)).<br>You can use our sample demo App ID: **guidebot.qr.demo**, version: **100**.
- A printed copy of a set of our [demo QR codes](http://viewar.com/downloads/GuideBOT-QRcodes.pdf)

##### What you'll do

- Place the QR codes in the area you want to navigate around.
- Define POIs (Points Of Interest) through the GuideBOT App
- Define Paths (for the users to follow) through the GuideBOT App

#### Let's get started!

##### Place the QR code set in the area you want to navigate around.

- For the sake of the demo, we’ll use a set of test QR codes (link above). Print them in an A4 format and make sure that the dimensions of the **QR codes** themselves are 18 x 18 cm. It is important to ensure the proper scaling.

![](assets/QR-code-small.png)

- Find appropriate places for your QR codes. The general rule is that the closer they are, the higher the tracking precision will be. At the current state of technology, the ARKit (the tracking system you are using) has an average horizontal drift of 1 m per 20 m. It means that for every 20 meter you walk away from the last point of calibration (QR code), the possible horizontal drift would be 1 m. Depending on the functionality of your app, a certain difference is tolerable. It may be controlled with the maximum distance between QR codes. We suggest placing them with a maximum distance of 20 m to 50 m.

- Place them in easy to find locations, so that the users would not have to go out of their way to read them. Best places are paths intersections, so users can film multiple codes for re-calibration when walking.

  - Print the sample QR code set (link above) in A4 format.
  - Place the first QR code (described as NO.1) on the floor in the area to be navigated around. It will mark the centre of your digital map.
  - There is no need to use all of the provided codes but you are free to use all of them.

##### Create a new map / record location

- Go to the point in space which you'd like to be the start of your app. Theoretically the app may be initialised from whatever point you want, however, it will only detect in similar angles to what you have recorded.

- Open the application, click on the padlock icon and type in your [Developer Portal](https://developer.viewar.com) credentials.
- Click on _New map_. Give it an easily recognisable name and save.

![](assets/GuideBOT%20-%20Tutorial%20-%201.jpg)

##### Configure tracking

- You'll now be asked to configure the tracking.
- First, **ARKit** needs to be initialised. Do it by moving your device slowly in a sideways manner (move a step left and right, don't just turn!). As soon as the calibration graphic disappears, you'll know that the ARKit tracking has been configured - the ground has been detected and the relative coordinates system has been created.

![](assets/GuideBOT%20-%20Tutorial%20-%202%20-%20QR.jpg)

- Now, scan the first **QR code**. Wait for the blue circle to appear. If you have placed more QR codes.

##### Define Paths

- Now let’s define paths for users to follow. There is no imposed rule about the distances between waypoints. In fact, depending on the size and shape of your space, the optimal distances vary, so feel free to experiment. It is recommended that they are no closer than 50cm and not further than 10m from each other.

- Aim with the ring and tap the **Create Waypoints** button to place a waypoint. Do this multiple times to create the points of a path. Every next point will be connected to the previous one. You can also tap a way point to select it and to start placing waypoints from there.

![](assets/GuideBOT%20-%20Tutorial%20-%203.jpg)

##### Define **POIs** (Points Of Interest)

A **Point Of Interest** marks a location you want to navigate your users to.
It may be for example an object at an exhibition, a conference room or a hotel reception.

- Hold the phone to where you want the POI to be located at and tap on the POI icon to place it.The POI will be placed _exactly_ at the phone position.
- Next, you can optionally take a photo of the POI as a guideance for users and admins.
- Enter a title for the POI. This name will be used for recognition (when you ask the GuideBOT a question).
- Save it and continue with setting up your path or the next POI.

![](assets/GuideBOT%20-%20Tutorial%20-%204.jpg)

- When you're done with setting up all data, save the map.

#### Navigate in your map

Restart your application, choose your map and tap on navigate. Film one of the QR codes and start navigating.

### Select your map as a default

When you are logged in, you have access to all maps. As a user you only have access to the active/default map by pressing the "start" button on the home screen. You can select a map and use the "activate" button to set it as a default.

- **TIP:** This will only work if you are using your own app, it does not work in the public demo app.

#### Congrats!

That’s all.
