## Model Upload Assistants

Uploading 3D Content may be confusing, doesn't it? That's why we've prepared Model Upload Assistants to make it easier for you.

#### Picture-Uploader
![](/assets/Screen Shot 2019-02-01 at 09.13.28.png)

Use it for uploading images to be used as pictures placed on the walls. Files uploaded with the use of this assistant will have a vertical orientation and be interpreted as a poster/painting. Using this assistant will require setting a real-world size of the graphics. 

#### Video-Uploader
![](/assets/Screen Shot 2019-02-01 at 09.13.33.png)

Use it for uploading clips to be used as videos. Files uploaded with the use of this assistant will have a vertical orientation. Using this assistant will require setting a real-world size of the graphics. 

#### Custom 3D-Uploader
![](/assets/Screen Shot 2019-02-01 at 09.13.17.png)

Use it for uploading custom 3D models. This mode is intended for experienced 3D designers and enables for definition of advanced settings.

**Name** - Give your model a name which will be displayed in the app.

**Foreign Key** - Assign your model a foreign key which will be used to access the model through the app.

**Description** - Model description may be used e.g. for displaying product information in a sales application.

**Categories** - Categories are used to group models. This way batches of models may be activated and deactivated at once. Moreover, categories may be used to group models in the app. An example use may be seen in the Furniture Live Template.

**Preview Image** - This image will be used as a model thumbnail. The recommended size would be 512 x 512 px. It's a good practice position the model in the center of the picture with wide margins and to use a solid (preferably white) or transparent background, so that the image would blend seamlessly in the UI set up, no matter the device. Choose JPG/PNG format and Save for Web setting.

**Scaling - Units** - Model units.

**Model Bundle** - Upload your 3D file here.

**Type** - Generally, there are 2 types of models to be used in the scene - the ones requiring 3D data and the ones _not_ requiring 3D data. For more details, please refer to the list below: 

***Requiring 3D data:***
_Model_ - standard 3D model. By default, the user will be able to interact with it.
_Environment_ - 3D model with a defined position, not interactive.

***No 3D data provided:***
_Assembly_ - No 3D upload. A set of models with fixed positions. References to other models which are to be put in one scene container.
_Configurable_ - No 3D upload. Configuration data.
_References_ - No 3D upload. If you're working on an exceptionally heavy model (e.g. a building with a complex facade), it might be handy to split it into smaller pieces. In order to inform an application which parts should be loaded in the scene and in which order, a _reference_ model is created.
_Data_ - No 3D upload. It may be used as additional information provided to the app.

**Source Download / USDZ** - Sharing and creating USDZ files requires this setting to be on. WARNING: If your models are sensitive data, disable this setting.

**Data** - Input field to provide any additional data useful for handling the model. This data may also be accessed through the app in the following way:

```
const description = await model.downloadDescription()
description.data
```