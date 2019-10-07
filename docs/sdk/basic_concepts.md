---
id: basic_concepts
title: Basic Concepts
---

The ViewAR JavaScript API lets you access the Scene, Models, Cameras and Tracking Systems functionalities offered by the ViewAR Core from the ViewAR Application. In other words - it serves as an abstraction layer between the HTML UI and the C++ ViewAR Core. It allows you to utilize functionalitites of different services (think - ARKit, ARCore, Placenote, ...) with a unified set of JS commands. What it means, is that no platform-specific or device-specific knowledge is neccessary and that you may seamlessly switch between different technolgies (e.g. tracking systems).

## Scene Manager

#### Scene

The collection of all virtual objects contained by the app at any time is called a Scene.

#### Objects

Scene Objects are potentially visible parts of the scene - potentially, because their visibility may be turned off at a given moment. Scene objects may have individually defined Properties, possible to be manipulated programmatically. Properties can affect such things as Object’s materials (e.g. upholstery of a sofa), geometry (e.g. a width of a table), or even transitions between states (e.g. opening and closing of an awning).

#### Containers

Containers are organisational units of a scene.
There are two kinds of Containers:

##### Ungrouped Containers

Ungrouped Containers are used for logical grouping of Scene Objects, however, they do not encapsulate them. This mean that a user may still interact with each of the Container's Children separately. In fact, the whole Scene itself is an ungrouped container. Ungrouped Containers, as an entity, cannot be interacted with, however, but they can still be manipulated programmatically (e.g. by chaning their pose or visibility).

##### Grouped Containers

Grouped Containers encapsulate their children and make them behave as a single object with respect to interaction. This feature is used for creating complex objects using other scene objects as parts. Moreover, they may be manipulated programatically (e.g. by chaning their pose or visibility).

## Models

A Model is a collection of data, resources, and assets that fully describe a virtual 3D object. In the ViewAR System, models are created externally by 3D designers and uploaded to ViewAR CMS, making them available to apps built using ViewAR SDK.

Models often contain semantic information stored in a JSON format, such as:

- names,
- textual descriptions of a product,
- gallery images,
- translations,
- semantic tags.

An example below:

```json
{
  "modelInfo": {
    "name": "Marvin",
    "surname": "The Sheep",
    "breed": "Columbia",
    "activity": "walking"
  },
  "external": {
    "description_en": "This is a cute sheep.",
    "description_de": "Das ist ein süßes Schaf.",
    "description_fr": "Ç'est un mouton mignon."
  },
  "galleryImages": [
    "https://i.pinimg.com/originals/2d/67/9e/2d679e47c5a6838d7ddc80935593637b.jpg"
  ]
}
```

###### Tip

_Additionally, Models may have arbitrary app-specific data attached to them. This data may be used by the app in order to provide further functionality beyond what’s offered by ViewAR SDK. App-specific data has no meaning outside the app itself._

#### Models storage

For performance reasons, it's often recommended not to bundle the models with the App, but store them in ViewAR CMS and download to the App on demand. ViewAR SDK encapsulates resources management (download, upload, caching) and provides access to them through a simple set of commands within ViewAR API. Models may be either fetched on demand or a downloaded as a set (in which case the app would also work offline).

#### Model Categories

A Model may be assigned to a Category. This is done through [ViewAR CMS](https://developer.viewar.com/model/list). Go to _My Content > All Items,_ open a Model Editor and choose a desired Category from the drop-down list. If you wish to create a new Category, go to _My Content > Categories._

A useful feature is Category nesting. Imagine that you are building an App for a company producing snowboarding equipment. You would like your UI to offer the User products according to their function (e.g. boards, bindings, ...) and then, on the next level, due to their technical characteristics (e.g. freestyle boards, freeride boards, alpine). In such a case, it would be useful to create the following Categories structure:

```json
{
    "Boards": [
        "Freestyle",
        "Freeride",
        "Alpine"
    ],
    "Bindings": [
        ...
    ]
}
```

This may be achieved with the following Categories:

- "Boards" _(Root Category),_
- "Freestyle" _(parent: "Boards"),_
- "Freeride" _(parent: "Boards"),_
- "Alpine" _(parent: "Boards"),_
- "Bindings" _(Root Category),_
- ...

#### Instances

A Model may be fetched from the repository and its [Instance](sdk/quickstart/instances) may be inserted into the application's Scene. The same model may be inserted repeteadly, each time as a new Instance.

#### Model visibility - IMPORTANT

ViewAR CMS is designed to provide you maximum flexibility. We want to give you a possibility to store multiple models, even in various versions, be able to access them from multiple applications and change them at any point in time without a need of editing the app itself.

It's a powerful characteristic which users find very helpful when their applications scale up.
It comes, however, with a minor drawback - one needs to make sure that 4 different conditions are met for the model to be accessible to an application.

But worry not, here comes a cheat sheet:

- The Model needs to be set to _Active_
  [ViewAR Developer Portal](https://developer.viewar.com) > My Content > All Items > Model Editor > Active
- The Model needs to be in a Category
  [ViewAR Developer Portal](https://developer.viewar.com) > My Content > All Items > Model Editor > Category
- The Category the Model is in, needs to be set to _Active_
  [ViewAR Developer Portal](https://developer.viewar.com) > My Content > Categories > Category Editor > Active
- The Category the Model is in, needs to be available in the Application
  [ViewAR Developer Portal](https://developer.viewar.com) > My Apps > App Editor > Advanced > Content Category Settings

## Tracking

Tracking Systems try to estimate the world pose \(position and orientation\) of a mobile device \(e.g. phone, tablet, head mounted display\) in real-time. They may be inside-out (done entirely on the device) or outside-in (where external sensors are used).

### Marker-base Tracking

Marker-based tracking uses fixed marker images, which are recognized by the tracking systems in order to calculate the pose of a device. Markers can be QR-Codes, Magazines, Photos or any kind of 2D images. Markers have to be known by the tracking system before they can be recognized. Inaccuracies occur as soon as the marker is not visible in the camera frame, because pose information can not be updated. Therefore, extended tracking uses additional methods to estimate the pose of a marker even if it is not visible in the camera.

### Marker-less Tracking

Marker-less tracking uses camera input for detecting unique retrievable patterns \(i.e. feature points\) in the surrounding environment, for estimating the camera's pose.

In both cases, image processing algorithms are used for calculating 3D environmental information with use of motion. These software-based approaches are less accurate than dedicated 3D sensors, so hardware-based solutions are used for more accuracy.

### 3D Model Regognition

Object Recognition is a computer vision technique for identifying 2D/3D objects. With 3D object recognition and tracking, a real-world object can be recognized and its pose - estimated. Similarly to markers, 3D target objects must be known by the System beforehand.

#### Tracking Systems integrated by ViewAR

| Tracker              | Target device         | SLAM                 | Point cloud | Mesh generation | Marker tracking                | 3D Model Tracking        | Scene Recognition | Additional hardware needed | Requires license |
| :------------------- | :-------------------- | :------------------- | :---------- | :-------------- | :----------------------------- | :----------------------- | :---------------- | :------------------------- | :--------------- |
| **ARKit**            | iOS                   | Yes                  | Yes         | \(in progress\) | Yes \(ViewAR adds QR-Markers\) | No                       | Yes               | No                         | No               |
| **ARCore**           | Android               | Yes                  | Yes         | No              | No                             | No                       | Yes               | No                         | No               |
| **Wikitude**         | iOS, Android          | Yes                  | No          | No              | YES \(but not used\)           | No                       | Yes               | No                         | No               |
| **Kudan**            | iOS, Android          | Yes \(but not used\) | No          | No              | Yes                            | No                       | No                | No                         | No               |
| **Vuforia**          | iOS, Android, Windows | Yes \(but not used\) | No          | No              | Yes                            | Yes                      | No                | No                         | Yes              |
| **Structure.io**     | iOS                   | Yes                  | No          | Yes             | No                             | No                       | No                | Yes                        | No               |
| **Structure Bridge** | iOS                   | Yes                  | No          | Yes             | No                             | No                       | Yes               | Yes                        | No               |
| **HoloLens**         | Windows               | Yes                  | Yes         | \(in progress\) | \(third party solution\)       | \(third party solution\) | Yes               | Included                   | No               |
| **VisionLib**        | iOS, Android          | No                   | No          | No              | No                             | Yes                      | No                | No                         | Yes              |
| **Placenote**        | iOS                   | Yes                  | Yes         | No              | No                             | Pointcloud               | Yes               | No                         | No               |
| **6D.ai**            | iOS                   | Yes                  | Yes         | Yes             | No                             | No                       | Yes               | No                         | Yes              |

## Cameras

Cameras control how the current scene is viewed. In ViewAR System, there are three types of Cameras, all held in and controlled by the Camera Object:

### Perspective Camera

Offers a bird’s eye view of the scene in a VR environment. Its main feature is an ability to change its pose (moving, rotating, dollying, etc.) by the user interaction with the viewport, either with touches or a mouse. A grid view is used.

### Virtual Reality Camera

Offers a first-person view of the scene. It reads gyroscope input for rotation, but its movement needs to be passed programmatically. Movement can be implemented by on-screen joysticks for handheld devices, keyboard input for browser platforms, and bluetooth joysticks when using the HMD mode.

### Augmented Reality Camera

Takes input from device’s camera and gyroscope. Combined with state-of-the-art environment tracking systems, it provides an immersive AR experience. It is currently not available on the browser platform.

###### Tip

_Every Camera has a Stereoscopic Mode, also called a HMD (Head-Mounted Display) Mode, that allows for the apps to be used within headsets._

### Freeze Frames

---

At the current state of technology, it is extremely impractical to faithfully scan and store real-world environments. Therefore, capturing and restoring of an Augmented Reality experience is practically impossible. ViewAR SDK offers a compromise in the form of Freeze Frames.

AR Camera supports freezing and unfreezing of the Camera View. While frozen, Camera feed and Pose do not get updated, so that the image may easily be saved. Freeze Frames may be switched between while preserving the spatial relations between scene objects as expected. They can also be uploaded to the cloud storage and shared between users of the app.

### Read more

- [API Quickstart - Model Manager](sdk/quickstart/model_manager)
- [API Quickstart - Instances](sdk/quickstart/instances)
