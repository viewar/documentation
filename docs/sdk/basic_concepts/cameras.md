---
id: cameras
title: Cameras
---

Cameras control how the current scene is viewed. In ViewAR System, there are three types of Cameras, all held in and controlled by the Camera Object:

#### Perspective Camera

Offers a bird’s eye view of the scene in a VR environment. Its main feature is an ability to change its pose (moving, rotating, dollying, etc.) by the user interaction with the viewport, either with touches or a mouse. A grid view is used.

#### Virtual Reality Camera

Offers a first-person view of the scene. It reads gyroscope input for rotation, but its movement needs to be passed programmatically. Movement can be implemented by on-screen joysticks for handheld devices, keyboard input for browser platforms, and bluetooth joysticks when using the HMD mode.

#### Augmented Reality Camera

Takes input from device’s camera and gyroscope. Combined with state-of-the-art environment tracking systems, it provides an immersive AR experience. It is currently not available on the browser platform.

###### Tip

_Every Camera has a Stereoscopic Mode, also called a HMD (Head-Mounted Display) Mode, that allows for the apps to be used within headsets._

#### Read next

[API Quickstart - Cameras](sdk/quickstart/cameras)
