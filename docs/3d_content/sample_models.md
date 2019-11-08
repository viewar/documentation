---
id: sample_models
title: Sample Models
---

We provide a few Sample Models to get you started. Let's use a sample model prepared by our Team and assign it sample material, so that you get a grasp of how things work.

#### Download sample data

Go to Support/3D Sample Files \([link](http://developer.viewar.com/downloads)\) and download Mammoth Chair 3D model. A zip file will be downloaded, containing:

- _mammoth_armchair_model5.fbx_ - 3D model geometry

- _ambientocclusionmap.jpg _- ambient occlusion map of the chair geometry \(one file for the whole geometry\)

- _Thumbnail.jpg_ - thumbnail to be displayed in the app

- _Shadow.png _- shadow casted by the chair on the floor plane

Now download **Mammoth Chair Sample Textures**. A zip file will be downloaded, containing:

- _123.jpg_ - light gray fabric texture

- _152.jpg_ - dark gray fabric texture

- _543.jpg_ - orange fabric texture

- _773.jpg_ - blue fabric texture

- _933.jpg _- green fabric texture

#### Upload the sample 3D model

Go to _Content/3D Models_, click on _+Upload a new model_ and provide the obligatory data:

- _Name_

- _Model bundle _- upload the downloaded .zip file here

- _Active _- make sure this square is ticked for your model to be available in the app

- _Accept Terms and Conditions _- make sure this square is ticked

Confirm upload and you will be redirected to the _Model editor._

#### Edit the 3D model

You may see your model colored with yellow-black stripes which means that there is no texture applied yet. On the right hand-side you will see a list of surface groups defined in your model. Click through them to watch different parts of the chair being highlighted with a pink color.

#### Create textures

Now you can create textures. \_Material Menu \_at the bottom of the screen offers:

- _Materials _- material options to be applied to your models

- _Textures _- graphics being used as an element of _Materials_

- _Environment Maps_

At the moment the only important ones for you are the first two. Let’s create the first texture.

Click on _Textures/New Texture _\(leave the _Private/Public_ setting set to _Private\). Extract the 42621_Mammoth_Textures_source.zip_ file you have downloaded from the _Support section. Drag the 123.jpg_ file to the _Drop Images_ field on the right screen side. Give your texture a name \(it would be best if it did not have spacing e.g _fabricLightGray_\) and clinck on _Upload. The texture should now appear under Textures in the Material Menu._

#### Create materials

Let’s create a material. In the _Material Menu/Material click on any surface to enable material creation. Click \_New Material, change the Name_ to _GreyLinen, change Shader_ to _Single_ _Texture. Now go to Textures, drag and drop your fabricLightGray_ texture to the _drop Texture_ field \(_Shader_\). Click _Save as new material._

#### Apply the material

Go to _Materials. In the right hand-side menu find find the surface group you would like to apply the material to _\(matMammothFabric1\). _Drag and drop the GreyLinen_ material to the _matMammothFabric1_ surface. Click _Save and Exit_ and you will be redirected to the _Contents_ menu.

#### View the model in _Model Viewer_

Now you can see your model listed as available in the _Contents_ menu. Click on the _Model Viewer_ icon ![](https://lh4.googleusercontent.com/w4bKCRoz07i1DYB5R_mPP8FRcDo1Ux32AVBWEjPS9zpG22k1tiIlQmFuB8TUnGM173l5ba0zYz3uCB9zhPIDut4FjvJ5ou9mk7fptE-AQbThQhIEd2JF3AlQHC_RPMxrSh5nYNu9) in order to see your model and its defined material options. If you would like to customise your model, click the _Material Editor_ icon ![](https://lh6.googleusercontent.com/sSqyPH8d6cwDn6gQHrRERtsG8fW4YeLhZMuh3DczBOKrpBSs6rb0Q4Y-bFNHCvHWU7MHIsP383B4ZbulqJtF4K5LMzfzEmDhaUHto6mz5GC6peGi1v0D9N9r3qwL7TETwy_279Mz)

#### Test the model in the app

Refresh the app. Your new model should appear among available objects. If not, click on the _Edit icon _![](/assets/import.png)_ and make sure that the Active_ field is marked.
