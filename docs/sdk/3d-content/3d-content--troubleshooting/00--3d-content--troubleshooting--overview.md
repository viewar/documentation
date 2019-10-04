## Troubleshooting

If you are experiencing crashes, missing materials, invisible models or similar issues, here are things to check:

#### Geometry

* no faces with more than four sides \(triangles and quads only, quads preferred\)

  * no concave faces
  * no faces with holes
  * no nonmanifold geometry
  * no lamina faces
  * no edges with zero length
  * no faces with zero geometry area

  All of those can, but don’t necessarily have to cause issues for the converter/app

  ###### Hint:

  * in Maya you can use: Select Object -&gt; Hold Shift -&gt; Hold Rightclick -&gt; Clean Up
  * in Cinema4D you can use the Mesh-&gt;optimize feature.

#### **UV Unwrapping and Layout**

* If your model is invisible or has invisible parts, make sure, that no faces have missing uvs \(both uvsets\). All faces need UVs, even if you don't plan on assigning any textures, make sure to map UVs. A planar map without regards for unwrap and layout would suffice in this case.

* Use Checker Textures to test your models texture distribution
* As little as possible texture distortions \(patterns might be used\)
* As little as possible texture cuts \(Try to hide UV Cuts in the geometry, inside folds for example\)
* Pixel Density should be consistent, for tiled textures \(should still be sharp at closeup\)
* Pixel Density should be optimized for ambient occlusion map \(invisible/hard to see surfaces don’t need as much texture space\)

#### **Textures**

* Power of Two Resolutions and not above 4096 \(Width and height must be  2,4,8,16,32,64,128,256,512,1024,2048,4096\)

* Proper image format \(jpg and png only\)

* No special characters in the name \("\_" is allowed\)

#### **Materials**

* No special characters in the name \("\_" is allowed\)

* Make sure the right UV set is selected

#### More tricks

* Delete History
  * HOWEVER: For animated models: delete only non-deformer history, otherwise you will loose skinweights.
* Freeze Transformations
  * HOWEVER: For reference cubes or other geometry that is used as a reference for translation or rotation values for the converter \(See: References/Portals/Snappoints\): don't freeze, otherwise they will loose the values that are important for the ViewAR Converter.
* Set vertex normals to face and assign smoothing groups \(hard, soft edges\) because they get lost deleting history.

If all of the above fails, contact us!

