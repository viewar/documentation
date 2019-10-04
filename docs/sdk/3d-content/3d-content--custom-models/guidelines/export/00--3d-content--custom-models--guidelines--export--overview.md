## Export

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

