---
id: sample_models
title: Sample Models
---

To get you started, our Team has prepared a few Sample Models. Let's play around with one of them, so that you get a grasp of how things work!

## Download a sample model

\([Download](https://www.viewar.com/downloads/46308_Mammoth_Chair_source.zip)\) a sample 3D model of a Mammoth Chair.
<br>The zip file contains:

- _mammoth_armchair_model5.fbx_ - 3D model geometry

- _ambientocclusionmap.jpg_- ambient occlusion map of the chair geometry \(one file for the whole geometry\)

- _Thumbnail.jpg_ - thumbnail to be displayed in the app

- _Shadow.png_- shadow casted by the chair on the floor plane

Now, \([download](https://www.viewar.com/downloads/MammothChairSampleTextures.zip)\) **Mammoth Chair Sample Textures**.
<br>The zip file contains:

- _123.jpg_ - light gray fabric texture

- _152.jpg_ - dark gray fabric texture

- _543.jpg_ - orange fabric texture

- _773.jpg_ - blue fabric texture

- _933.jpg_ - green fabric texture

## Upload

Go to _Content/3D Models_, click on _+Upload a new model_ and provide obligatory data:

- _Name_

- _Model bundle_ - upload the downloaded .zip file here

- _Active_ - make sure this square is ticked for your model to be available in the app

- _Accept Terms and Conditions_ - make sure this square is ticked

Confirm upload and you will be redirected to the Model Editor.

## Edit

You may see your model colored with yellow-black stripes which means that there is no texture applied yet. On the right hand-side you will see a list of surface groups defined in your model. Click through them to watch different parts of the chair being highlighted with a pink color.

### Textures

Now you can create textures. \_Material Menu \_at the bottom of the screen offers:

- _Materials_ - material options to be applied to your models

- _Textures_ - graphics being used as an element of _Materials_

- _Environment Maps_

At the moment the only important ones for you are the first two. Let’s create the first texture.

Click on _Textures/New Texture_ (leave the _Private/Public_ setting set to _Private). Extract the 42621_Mammoth_Textures_source.zip_ file you have downloaded from the _Support section. Drag the 123.jpg_ file to the _Drop Images_ field on the right screen side. Give your texture a name (it would be best if it did not have spacing e.g _fabricLightGray_) and clinck on _Upload. The texture should now appear under Textures in the Material Menu._

### Materials

#### Create

Let’s create a material. In the _Material Menu/Material click on any surface to enable material creation. Click \_New Material, change the Name_ to _GreyLinen, change Shader_ to _Single_ _Texture. Now go to Textures, drag and drop your fabricLightGray_ texture to the _drop Texture_ field \(_Shader_\). Click _Save as new material._

#### Apply

Go to _Materials. In the right hand-side menu find find the surface group you would like to apply the material to _\(matMammothFabric1\). _Drag and drop the GreyLinen_ material to the _matMammothFabric1_ surface. Click _Save and Exit_ and you will be redirected to the _Contents_ menu.

## View

Now you can see your model listed as available in the _My Content_ menu.
Click on the _Model Viewer_ icon in order to see your model and its defined material options. If you would like to customise your model, click the _Material Editor_ icon

## Test

Refresh the app. Your new model should appear among available objects. If not, click on the _Edit_ icon and make sure that the _Active_ field is marked.
