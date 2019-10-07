---
id: scene_manager
title: Scene Manager
---

[Scene](sdk/sdk--basic-concepts/sdk--basic-concepts--scene.md) is a collection of all virtual objects. Objects may be organised into Ungrouped and Grouped Containers. Scene Manipulation is possible through a Scene Manager.

#### Insert a Container into a Scene {#insertcontainer}

A Container is able to contain multiple models or other containers. To insert a new Container use the statement bellow. The method `insertContainer` returns the inserted instance, so you can use it later on.

```js
const pose = {
  position: { x: 100, y: 200, z: 300 },
};

const container = await sceneManager.insertContainer({ pose });
```

#### Insert a model into a scene {#insertmodel}

You can insert a model into a Scene by passing the model as the first argument into the `insertModel` method.
The optional second argument is an object which holds configurations, for example the pose of the model. The method `insertModel` returns the inserted instance, so that you can use it later on.

```js
const pose = {
  position: { x: 100, y: 200, z: 300 },
  scale: { x: 10, y: 10, z: 10 },
  orientation: { x: 0, y: 0, z: 0, w: 1 },
};

await sceneManager.insertModel(model, { pose });
```

To insert a model into a container you can use the `insertModel` method and pass the container instance as a `parent` property into the configuration object.

```js
const pose = {
  position: { x: 100, y: 200, z: 300 },
  scale: { x: 10, y: 10, z: 10 },
  orientation: { x: 0, y: 0, z: 0, w: 1 },
};

const instance = await sceneManager.insertModel(model, { parent: container });
```

#### Remove a node from a scene

A Node can be an [Instance](sdk/sdk--basic-concepts/sdk--basic-concepts--models.md of a Model or [Container](sdk/sdk--basic-concepts/sdk--basic-concepts--scene.md). To remove a Node from a Scene, you need to pass the Instance into a `removeNode` method. You can access Scene Nodes by using the children property of the scene property.

```js
const instance = sceneManager.scene.children[0];
await sceneManager.removeNode(instance);
```

#### Scene State

The Scene State holds all the information about the current setup of the Scene, such as inserted Nodes and their current state e.g. pose and visibility. At any point during the runtime, it is possible to serialise the current Scene State. Keep in mind that the Animation State and Tracking State do not get serialised, meaning that they cannot be saved (although their initial values may be defined for example at app start). The serialised State can than be stored and recovered later on, for example in order to provide Save/Load functionality. Furthermore, it is possible to synchronise Scene States between devices.

#### Retrieve & save the current Scene State

To retrieve and save the current Scene State to the local storage, use the following statement:

```js
const sceneState = sceneManager.getSceneState();
localStorage.setItem('sceneState', JSON.stringify(sceneState));
```

Optionally, use the safe, asynchronous `getSceneStateSafe` method, which only gets the Scene State after other current scene manipualtions are finished:

```js
const sceneState = await sceneManager.getSceneStateSafe();
localStorage.setItem('sceneState', JSON.stringify(sceneState));
```

#### Set a Scene State

To set a Scene State, use the `setSceneState` method and pass the `sceneState` object as an argument. In this example we load the Scene State saved locally in from the example above.

```js
const sceneState = JSON.parse(localStorage.getItem('sceneState'));
await sceneManager.setSceneState(sceneState);
```

### Read next

- [ViewAR API References](http://test2.3.viewar.com/docs/index.html)
- [ViewAR JavaScript API Playground](https://webversion.viewar.com/com.viewar.sandbox/100/)
