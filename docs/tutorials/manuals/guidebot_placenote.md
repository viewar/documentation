---
id: guidebot_placenote
title: GuideBOT Placenote
---

### Manual

Following this tutorial you'll learn how to use a GuideBOT indoor navigation app using the Placenote tracking.

##### Device requirements

- An iOS, ARKit compatible device - see: [supported hardware](/docs/sdk/advanced_guides/hardware).
- Up-to-date version of the ViewAR SDK App (available from the App Store (iOS)).  
  You can use our sample demo App ID: **guidebot.placenote.demo**, version: **100**.

##### What you'll do

- Configure the Placenote tracking.
- Define POIs (Points Of Interest) through the GuideBOT App.
- Define Paths (for the users to follow) through the GuideBOT App.

#### Let's get started!

##### A couple of words about Placenote

Placenote is a tracking system which uses a cloud of feature points defined basing on the camera image to place content in physical locations. It does not rely on GPS, markers or beacons for geolocation and may therefore be used both indoors and outdoors without any additional equipment.

It integrates with ARKit on iOS devices by wrapping ARKit's tracking functionality in a cloud-based computer vision and machine-learning API that lets you build Persistent AR apps quickly and easily.

More information about [Placenote](https://placenote.com/).

##### Create a new map / record location

- Go to the point in space which you'd like to be the start of your app. Theoretically the app may be initialised from whatever point you want, however, it will only detect in similar angles to what you have recorded.

- Open the application, click on the padlock icon and type in your [Developer Portal](https://developer.viewar.com) credentials.
- Click on _New map_. Give it an easily recognisable name and save.

![](assets/GuideBOT - Tutorial - 1.jpg)

##### Configure tracking

- You'll now be asked to configure the tracking.

- First, **ARKit** needs to be initialised. Do it by moving your device slowly in a sideways manner. As soon as the calibration graphic disappears, you'll know that the ARKit tracking has been configured - the ground has been detected and the relative coordinates system has been created.

- Now it's the time to train the **Placenote** tracking.  
  Placenote uses the environment as a one big 3D marker. It needs to detect feature points to hold on to. Feature points are created at points of high contrast, corners of sharp edges etc. For example - when filming a door, the line defining its edge will not be used, in contrary to the key hole or corners. A messy work desk will work good.  
  In order to create a high-quality map for a user, record a feature-rich environment close to the point where the map is meant to be initialised most often. Walk a couple of steps around each object, filming it slowly and from different viewing angles (move your device up an down, still aiming at the centre of the filmed model).  
  Be aware that the tracking will struggle and may fail if the environment changes a lot.  
  You should also try to avoid filming a learned area twice since tracking drift might have added up, learning the same area again. This will result in jumps in the tracking.

![](assets/Wikitude-Instant-Tracking-Scene-Mapping.png)
<br>_Picture credits: Wikitude_

<br>Don't worry, you don't have to blind-guess whether the feature points are getting defined properly! The app gives you feedback marking every created point with a red cube.

![](assets/GuideBOT - Tutorial - 2 - Placenote.jpg)

<br><br>When you're ready, move on to defining **paths** for the users to follow.

##### Define Paths

- Now let’s define paths for users to follow. There is no imposed rule about the distances between waypoints. In fact, depending on the size and shape of your space, the optimal distances vary, so feel free to experiment. It is recommended that they are no closer than 50cm and not further than 10m from each other.

- Aim with the ring and tap the **Create Waypoints** button to place a waypoint. Do this multiple times to create the points of a path. Every next point will be connected to the previous one. You can also tap a way point to select it and to start placing waypoints from there.

![](assets/GuideBOT - Tutorial - 3.jpg)

- **TIP:** As you keep moving through the scene, the Placenote tracking is constantly learning the environment. To improve its performance, help it learn most efficiently: from time to time (every couple of meters) repeat the environment recording procedure described above (in the **Configure Tracking** point).

##### Define **POIs** (Points Of Interest)

A **Point Of Interest** marks a location you want to navigate your users to.
It may be for example an object at an exhibition, a conference room or a hotel reception.

- Hold the phone to where you want the POI to be located at and tap on the POI icon to place it.The POI will be placed _exactly_ at the phone position.
- Next, you can optionally take a photo of the POI as a guideance for users and admins.
- Enter a title for the POI. This name will be used for recognition (when you ask the GuideBOT a question).
- Save it and continue with setting up your path or the next POI.

![](assets/GuideBOT - Tutorial - 4.jpg)

- When you're done with setting up all data, save the map.

#### Navigate in your map

Restart your application, choose your map and tap on navigate. Now film a previously learned area (from a learned perspective) to let the tracking initialize. Tracking works best if you a bit of movements to side (do a step left and right, not just turn the camera!).

### Select your map as a default

When you are logged in, you have access to all maps. As a user you only have access to the active/default map by pressing the "start" button on the home screen. You can select a map and use the "activate" button to set it as a default.

- **TIP:** This will only work if you are using your own app, it does not work in the public demo app.

#### Congrats!

That’s all.
We are constantly improving this template. Also tracking will become better and more robust for such scenarios.
