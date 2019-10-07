---
id: instances
title: Instances
---

[Model Instance](sdk/basic_concepts/models) is a unique occurence of a model inserted in a ViewAR App. It is basically a copy of a Model loaded from the Model Catalogue and assigned to a variable in the application. While the original Model remains unchanged, the Model Instance may be manipulated inside the program.

#### Change a pose of the Model Instance

Every Model Instance has a pose, describing its position, orientation and scale. It can be accessed through the `pose` property of an Instance.

```js
instance.pose = {
  position: { x: 0, y: 0, z: 0 },
  orientation: { w: 1, x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
};
```

To change the position of an instance you can pass a pose object into the `setPose` method. The new pose object is merged with the old one, so you do not need to provide every single pose property.

```js
const oldPosition = instance.pose.position;

await instance.setPose({
  position: {
    x: oldPosition.x + 100,
    y: 100,
    z: 100,
  },
});
```

#### Change visibility of the Model Instance

Every Model Instance has a Boolean `visible` property which may be changed using the `setVisibility`:

```js
await instance.setVisibility(true);
await instance.setVisibility(false);
```

Conveniently, the Model Instance or Container visibility may be set at the moment of their insertion into the Scene, by passing the `visible` property into the configuration object:

```js
const model = await modelManager.getModelFromRepository(20);
await sceneManager.insertModel(model, { visible: false });
```

### Read next

- [ViewAR API References](http://test2.3.viewar.com/docs/index.html)
- [ViewAR JavaScript API Playground](https://webversion.viewar.com/com.viewar.sandbox/100/)
