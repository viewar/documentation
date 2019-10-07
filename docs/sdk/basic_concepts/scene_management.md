---
id: scene_management
title: Scene Management
---

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

#### Read more

[API Quickstart - Scene Manager](sdk/quickstart/scene_manager)
