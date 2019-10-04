## Modelling in Cinema 4D

1\) Create or load any 3D-object\(s\) into your scene

2\) Change the layout to "UV Edit" and switch to "UV Polygons Edit Mode" in the icon palette.

3\) This step is not necessary but will help you to make an optimal use of texture space. If you familiar with the procedure you can skip it. Switch back to "Standard" layout and add a "Connect Object" from the tool bar to the object manager and drag your objects onto it. Open a new texture view \(Window &gt; New Texture View...\). Drag& drop the "Connect Object" onto the new texture window and lock it. This window displays now all UVs overlapping and their changes in the original UV Mesh Editor Window.

4\) Make sure that the UV is shown in the "UV Mesh Editor Window" \(UV Mesh &gt; Show UV Mesh\). Select an object from the "Render Viewport" and apply an optimal UV mapping methode from the "UV Manager".

5\) After unwrapping the meshs you need to create copies of your objects. Simply drag&drop the UVW-tags from the copies to the corresponding objects and delete the copies. Now every object has an additional UVW-tag available. Cinema4D always uses the first UVW-tag for the baking process, so nothing to do here. The second UVW-tag is used for the tileable texture. To set it up just select the UVW-tag and apply an optimal UV mapping methode from the "UV Manager" \(the UV should cover the whole texture window\).

6\) Switch back to "Standard" layout. To bake an ambient occlusion map for all objects in the scene we need to connect them to one single object. Select all objects in the object manager, right click and choose the option "Connect Objects". Select the new created object and start to set up the UV-layout for the ambient occlusion map \(Objects &gt; Bake Objects...\). In the "Bake Object" window activate the following options: Ambient Occlusion, Keep UVs and Single Texture. Change the resolution to 1024 x 1024 pixels and set the file format to "JPEG". After baking the object Cineam4D will automatically duplicate the connected object. Delete all the connected objects and the new created material in the "Material Manager". In case you used the "Connected Object", drag&drop the objects out of it and delete it.\*\*

7\) As we said before, Cinema4D always uses the first UVW-tag for baking the ambient occlusion map. On the contrary to the ViewAR engine, which uses the second UVW-tag for the ambient occlusion map. Therefore we have to switch the order of the two UVW-tags for all objects, so that the secod one contains the UV-layout for the ambient occlusion map and the first one the UV-layout for the tileable texture.

8\) Export your scene in the FBX file format \(File &gt; Export... &gt; FBX... \(\*.fbx\)\)

9\) Rename the image file of the baked ambient occlusion map to "ambientocclusionmap.jpg" and ZIP it together with the FBX-file of your 3D scene.

10\) Login to your ViewAR account [http://developer.viewar.com/user/login](http://developer.viewar.com/user/login). Go to the 3D model upload page \(Content &gt; 3D Models &gt; +Upload new model\).

Fill out the form \(Name, Foreign Key, etc.\) and drag&drop the previously created ZIP-file onto the "Model bundle" input field and press "Upload".

11\) After pressing the "Upload" button the ViewAR Material Editor opens automatically.

which is always reserved by ViewAR engine for the ambient occlusion map

