---
id: helpar_user
title: Helpar User
---

### Manual

We’ll show you how to use a helpar app.

#### What you'll need

- An **iOS ARKit compatible mobile device**.  
  <br>You may verify the compatibility [here](/docs/sdk/additional_information/hardware).
- Up-to-date version of the **ViewAR SDK App** (available from the App Store (iOS)).

#### What you'll learn to do:

- Initialise a **remote assistance connection ** in Augmented Reality.
- **Browse the helpar database** for ready solutions.

#### Let's get started!

##### Setup:

Download the ViewAR SDK App from the App Store or Google Play Store.

##### Using the app:

Start the ViewAR SDK App. You can either use our sample demo (App ID: **helpar.demo**, version: **100**) or your own app [created with the App Builder](tutorials/helpar/app_builder) or [with the CLI](tutorials/helpar/cli).

Click on _Call Support_ to initiate a remote assistance call.

Film the object and move a bit (steps sideways left and right) to initiate the call.

![helpar - User Manual - Screenshots - 1](assets/helpar%20-%20Tutorial%20-%201.jpg)

When the call gets answered, the camera image will come back. Film the object from different sides in order to let the application create a decent number of feature points. _(Feature points are characteristic points in the camera image - clear changes of colour, object edges etc. They are used to create a 3D representation of the object/scene used for the tracking to hold in place.)_

In the meantime, you may start a conversation with the assistant who has answered your call. S/he can also see the camera image from your device.

![helpar - User Manual - Screenshots - 2](assets/helpar%20-%20Tutorial%20-%202.jpg)

##### Annotations

When the feature points are in place both of you may placing annotations on the object. Your touches will be marked with red dots (see the first image from the left, below), while the assistant will have a variety of different graphic elements to choose from (see the middle image below).

Due to the nature of tracking, at the moment the annotations may only be placed on and in between the feature points. Try thinking about the feature points as a tool to determine the depth of your touch in the 3D space. We are constantly working on improving the system, therefore don't get frustrated if you cannot get something right the first time ;)

Due to the 3D tracking you may walk around it without losing the notes.

After getting all the necessary information, you may end the call.

![helpar - User Manual - Screenshots - 3](assets/helpar%20-%20Tutorial%20-%203.jpg)

##### Browsing the database

Getting remote assistance is useful, but what if we could make a good use of those already made calls?

That's exactly why we have introduced a **helpar database**. On the home screen you have a button saying _Search Database_. It lets you browse through a library of saved and highest rated annotations. Be aware that you need to film the object it was recorded with, in order to see the annotations.

![helpar - User Manual - Screenshots - 4](assets/helpar%20-%20Tutorial%20-%204.jpg)

##### More to come

We are still working on improvements for this template, adding new features every week.
