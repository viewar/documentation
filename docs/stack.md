---
id: stack
title: Technology Stack
---

ViewAR System is a platform-independent modular structure integrating the majority of hard- and software field-specific components available on the market.

![](/img/SystemStructureSketch.jpg)

ViewAR Apps consist of:

- **ViewAR Core**
- **UI layer**
- **ViewAR API** (JavaScript-based, used for communication between the two upper)

The ViewAR System also provides a backend with a **3D CMS** and **Developer Portal** for managing applications and content.

#### ViewAR Core

ViewAR Core is **C++ based, lightweight and highly performant.**  
It runs on iOS, Android, web browsers and HMD (like HoloLens) allowing for multi-platform solutions.

It is mainly responsible for:

- **rendering** - advanced shading technologies integration, custom shaders, PBR materials.
- **tracking** - over 14 tracking solutions integration, giving you an ability to seamlessly switch between them.
- **resources management** - downloading and handling 3D models, materials etc.
- **user input handling** - 3D scene interaction (e.g. touches, swipes).

#### UI layer

The C++ core is overlapped with an HTML layer containing the UI for an application with a transparent background. UI elements and logic are created with HTML, CSS and JavaScript.  
Using state-of-the-art frameworks like React, Angular or Vue.js will let you create application UI as efficient and quick as with no other system.

#### ViewAR API

ViewAR API is an object-oriented JavaScript-based API, offering an interface for the communication between the UI and the core. It can be used to get access to the features offered by the ViewAR Core:

- [Scene Manager](/docs/sdk/basic_concepts/scene_management)
- [Model Manager](/docs/sdk/basic_concepts/models)
- [Cameras](/docs/sdk/basic_concepts/cameras)
- [Freeze Frames](/docs/sdk/basic_concepts/freeze_frames)
- [Tracking](/docs/sdk/basic_concepts/tracking)
- App Utilities.

#### ViewAR Backend

It stores and provides the 3D data, configurations and UIs for ViewAR Applications. By default, ViewAR Apps use a central ViewAR server. If required, it may be set up within the client’s own infrastructure. A ViewAR proxy server ([see on GitHub](https://github.com/viewar/viewar-proxy)) may also be set up in order to serve downloads from your server infrastructure.

#### Developer Portal & 3D CMS

Using the Developer Portal you can create and manage your applications and upload 3D data.
