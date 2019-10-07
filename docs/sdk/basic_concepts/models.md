---
id: models
title: Models
---

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

#### Read more

- [API Quickstart - Model Manager](sdk/quickstart/model_manager)
- [API Quickstart - Instances](sdk/quickstart/instances)
