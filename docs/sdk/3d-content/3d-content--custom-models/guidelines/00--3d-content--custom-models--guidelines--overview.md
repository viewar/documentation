## Content Creation

In order for a model to be available in a ViewAR Application, it needs to be uploaded to the ViewAR System. In this section we will lead you through the process and give you some tips on performance optimisation.

#### Modelling

###### Scene Setup

First and foremost: **Up-Axis is the Y-Axis!**

Furthermore, you can work with any unit you like but in real-life scale. Default units that we use are _cm_, therefore, if you are using different units, remember to apply a correct scale setting when uploading the model.

###### Naming Conventions

**Don't use any special characters \(only an underscore "\_" is allowed\) for mesh-, material-, texture- and filenames.**

Also, try to keep naming patterns short, simple and meaningful. For your own's sake :\)

###### File Formats

The ViewAR System accepts polygon models in 3D files formats of _.fbx_ and _.obj._

###### Polycount

The ViewAR System can handle objects and scenes with up to 800k Tris, however, it also depends largely on the platform/device which is going to be used. An older iPhone or iPad won't be able to handle such a high polycount model, while the Web version would still have a good performance.  
Refer to the following examples of well-optimised models with Tri-Count, plus a suggested maximum for similar assets:  
![](/assets/cabinetpolycount.JPG)  
Keep in mind that this cabinet's interior is also modelled. Simple hard surface objects, like cabinets, don't need a lot of polygons to look good. Try to keep it below 50k triangles.  
![](/assets/sofapolycount.JPG)  
For complex geometries, like the sofa above, use polygon density differentiation. Try to stay below 200k Triangles. If needed, try baking smaller into the ambient occlusion map.  
![](/assets/AApolycount2.JPG)  
Sometimes even more complex models are needed, be aware that this can cause performance problems and crashes with older platform.

###### Polygon Distribution and Edgeflow

Always try to keep your models optimised and avoid unnecessary subdivisions. A higher polygon density makes sense on detailed surfaces, such as folds, seams, round shapes etc, but not on flat ones. More Polygons, if they support the shape, less if they don’t the shape should be still looking good in close-up.

It makes sense to model elements like seams or stitches in such a way that you can better hide uv-cuts.

A good edgeflow can significantly improve shading and make objects easier to edit/adjust/fix/improve. Try using bevels for hard edges, as they improve shading and baking of maps, at the same time having the same performance impact as hard edges \(the vertices get split up in the rendering engine either way\). Furthermore, try to model with _quads_ if possible and turn to \_tris \_as a last resort only. Triangulation may fix issues mentioned below, however, they may make future adjustments hardly possible. In any case, keep a copy of your quad-models before triangulation.

A chair, that is used somewhere in an architectural building, also doesn't have to be as detailed as a chair that is the main asset in the presentation.

###### Don'ts

* **no** faces with more than four sides \(triangles and quads only, quads preferred\)

* **no** concave faces

* **no** faces with holes

* **no** non-manifold geometry

* **no** lamina faces

* **no** zero length edges

* **no** zero geometry area faces

All of those can, but don’t necessarily have to cause issues for the converter/app.

**Hint:** \( in Autodesk Maya: Select Object -&gt; Hold Shift -&gt; Hold Rightclick -&gt; Clean Up \)

###### UV Unwrapping and Layout

* Use Checker Textures to test your models texture distribution

* As little as possible texture distortions \(patterns might be used\)

* As little as possible texture cuts \(Try to hide UV Cuts in the geometry, inside folds for example\)

* We use a two uvset workflow. The first uvset \(uv0\) for tiled textures which can be overlapping and the second \(uv1\) for ambient occlusion or other maps that have to fit in the uv 0-1 space without any overlapping faces. Textures should be scaled by scaling the uvs in uv0 or later when setting up materials in our material editor.

UV0:  
![](/assets/UV0.JPG)

UV1:  
![](/assets/UV1.JPG)

* Pixel Density should be consistent for tiled textures \(they still need to be sharp at closeup\)

* The recommended pixel density for the tiled uv layout is 20 pixels/cm for a resolution of 1024x1024\).

* Pixel Density should be optimized for ambient occlusion map \(invisible/hard to see surfaces don’t need as much texture space\)

* The UV Unwrap and Layout process differs a lot between 3D softwares. The basic guidelines and workflow however stay the same.

| _Hint: All faces need UVs! Otherwise parts or the whole model would be invisible. Even if you don't plan on assigning any textures, make sure to map UVs. A planar map without regards to unwrap and layout would suffice in that case._ |
| :--- |


The advantages for this workflow are very visible in the images below. While the objects look very similar in quality from far away, once you get up close the difference is massive. Even with tiled 256x256 textures you can get a lot better results up close. It's also easy to switch out the tiled textures to create coloroptions without the need to add more large textures, rebake them or edit them in Photoshop.

Baked textures are supported as well, but for the best results we highly recommend to use the 2 UV Set workflow. You can use this workflow with non-overlapping UV Layouts as well as long as you duplicate the UV Layout into a second UV Set, however this is just a workaround for our system since we expect 2 UV Sets for layered textures.  
  
**Left**: Baked Textures; **Right**: Tiled Texture with AO Map ![](/assets/screenshot006.jpg)

###### Naming Convention

Use meaningful names for the mesh-names without special characters. Underscore "\_" is allowed.  
Naming is also important for our converter that reacts to specific prefixes:

"SHADOW\_\_" or "UNBOUND\_\_" will disable collision in the app, which is useful for shadowmaps \("SHADOW\_\_shadowmap"\) for example. That also means that you won't be able to touch that mesh and rotate it in the app.

###### Materials

* Make sure to assign materials to surfaces which should later be set up in the _Material Editor_.

* At this point, our converter only supports Phong and Lambert, therefore, if you set up different shaders, for example vray, all your settings will be lost and the conversion may fail.

* If you want to set up Textures beforehand, read more about it in the FBX Setup Tutorial: [http://wiki.viewar.com/pages/viewpage.action?pageId=1179802\](http://wiki.viewar.com/pages/viewpage.action?pageId=1179802%29\)

* If you want to set up your Textures beforehand, read more about it in the FBX Setup Tutorial, what requirements we have in order for it to work with our converter. \([http://wiki.viewar.com/pages/viewpage.action?pageId=1179802\](http://wiki.viewar.com/pages/viewpage.action?pageId=1179802%29\)

###### Dos

* For solid materials use a JPG file format \(file extension should be _.jpg_, not _.jpeg_\).
* For transparent one: PNGs.
* No special characters, especially "ä,ö,ü, etc".
* Always use power-of-two resolutions \(16/32/64/128/256/512/1024/2048/4096\). A non-power-of-two resolution will be up-scaled to the next level and hurt performance without better quality. 4096 is the highest supported resolution.
* Tiled textures should be no larger that 512x512 or 1024x1024, baked maps should be 1k or for more complex assets 2k. The resolution high enough for close up. A good default is a 512x512 tiled texture for 50cm², however, it largely depends on object use - an architectural building needs different pixel density than a chair.
* Keep the data size of textures in mind. Uncompressed textures are much larger and rarely is the increased size worth the cost. The difference between a maximum quality _jpg_ and "10" quality _jpg_ is not visible, however, the difference in size is obvious. Especially, when multiplied by the number of used textures in the scene.

###### File Size

It is also important to keep in mind how many objects you want to present in your app. If it's just a few, a long download time because of a complex and detailed object may be okay, however, if you app is to use a lot of models, cutting down the download time becomes crucial. Even more, if the map is to be used on the road, where data fees may apply.

A good default is a 512x512 tiled texture for 25x25cm, but this depends largely for on the usage of the object. An architectural building needs different pixeldensity than a chair.

#### Final touches

* Delete History, Freeze Transformations, set vertex normals to face and assign smoothing groups \(hard, soft edges\). Check for mesh issues with available clean up tools.

* Some History, Inputs and Transformations can have an impact on how the model is converted. For that reason it is recommended to delete the history and freeze all transformations. There are exceptions, though.

  * When a model is animated, you can only delete non-deformer history or you will loose skin weights.

  * Reference cubes or other geometry that is used as a reference for translation or rotation values for the converter shouldn't be frozen or they will loose the values that are important for the Converter. \(See: References/Portals/Snappoints\)

* At the end, set vertex normals to face and issue the smoothing groups \(they get lost when deleting history\).

#### Export

###### File Formats

The ViewAR System accepts polygon models in 3D files formats of _.fbx_ and _.obj._

**Export as an .fbx \(recommended\):**

In the export, settings uncheck everything under Include other than “Smoothing groups”. FBX file format may be both binary or ASCII. While ASCII makes debugging easier since it is human readable, binary file would be smaller. Use the 2012 FBX version.

**Export as an .obj:**

This is also possible, however, not recommended, since .obj supports only one UV Set and you get better results with our two UV Sets workflow.

