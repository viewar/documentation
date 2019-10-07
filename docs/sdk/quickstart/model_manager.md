---
id: model_manager
title: Model Manager
---

#### Model

A 3D Model is a collection of data, resources, and assets that describe a virtual object. In the ViewAR System, models are created externally by 3D designers and uploaded to ViewAR 3D CMS, making them available to apps built using ViewAR SDK.

Model Manager provides access to all [Models](sdk/basic_concepts/models) used in a ViewAR App and can request additional ones from repository.

###### Tip

_The Model Manager offers a convenient method `downloadAll\(\)` that downloads and caches all models and their assets used by an application. This way, the program may be fully usable offline._

#### Fetching a Model from the Catalogue

In order to be able to insert a Model into a Scene, you may retrieve it from the 3D Catalogue. The findModel method does not download the actual model files, but only the Model description. This means that, in order to actually insert it in your scene, you'll need an addditional command ([sceneManager.insertModel]). The Model download happens when inserting.

To retrieve a Model from the Catalogue, use either its Model ID or Foreign Key.

```js
const model = modelManager.findModelById(20); // by Model ID
```

```js
const model = modelManager.findModelByForeignKey('sheep'); // by Foreign Key
```

###### Tip

_Keep in mind that every Model ID is unique in the scale of the whole ViewAR CMS, whereas the same Foreign Key may be assigned to multiple Models. The Foreign Key may be defined in the Model Editor.
[ViewAR Developer Portal](https://developer.viewar.com) > My Content > All Items > Model Editor > Foreign Key_

#### Accessing Categories

Every Model visible in a ViewAR App must be assigned to a [Category](sdk/basic_concepts/models).
[ViewAR Developer Portal](https://developer.viewar.com) > My Content > All Items > Model Editor > Category\_

To access the Model's Root Category use:

```js
modelManager.rootCategory;
```

To access the Category's children (they can be models or other Categories), use:

```js
modelManager.rootCategory.children;
```

###### Tip

_You can go a multiple levels deep:_

```js
modelManager.rootCategory.children[0].children;
```

#### Download all App Models

In order to fetch all Models (and their assets) used by the Application, so that the program would be fully usable offline, go for:

```js
await modelManager.downloadAll();
```

### Read next

- [ViewAR API References](http://test2.3.viewar.com/docs/index.html)
- [ViewAR JavaScript API Playground](https://webversion.viewar.com/com.viewar.sandbox/100/)
