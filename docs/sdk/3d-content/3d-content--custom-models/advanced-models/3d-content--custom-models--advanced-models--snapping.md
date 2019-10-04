### Snapping
When inserting a model in a scene, it may be useful to use another model as a reference for the new model position.

#### Example use case
To illustrate, imagine a product visualisation application, where a user is allowed to choose between different table tops. Every table top has not only different set of materials provided, but also a distinct shape and dimensions. Moreover, table legs on which those tops are to be placed also have their individual heights and shapes. Normally, in such a case, every time a switch of a table element was to be made, a set of information about the current properties of all elements would have to be retrieved and processed before a new element would be inserted. Even worse - what if the container with the table elements was moved? Or if we were to replace 20 table tops at once?

It would be helpful to make the models pull to one another. Furthermore, it would be even better to have them pull one another just in one direction, so that the table remained on the ground with the table top laying peacefully on it, instead of floating in the thin air, if a shorter leg was introduced.

#### Snappoints
The snapping settings are handled by introducing a pair of matching **Snappoints** - one in each model (one model, however, may contain multiple Snappoints, as long as they don't overlap). They are generated automatically by the ViewAR System Converter on the basis of special cubes inserted by 3D Artists in the models. It may seem tricky at first, but let us guide you through the process and it should become clear quite soon.

**TIP:** _The ViewAR System Converter replaces the cubes with Snappoints. It means that there is no need to worry about their visibility in the App._

Here is a list of information the ViewAR System Converter extracts from the cubes.

* **Point of Origin** \(translation\)
* **Orientation** \(rotation\) 
* **Name**

##### Point of Origin
The cube's Point of Origin (stored in its _translation_ property) becomes a Point of Origin of a new Snappoint.

##### Orientation
The cube's Orientation value (stored in its rotation property) become the Orientation values of a new Snappoint.

##### Name
Here comes the tricky part, but stay with us :)

Every Snappoint has properties called *plug* (one or more) and *socket* (always just one).
* In order for 2 cubes to snap, one of them needs to have a plug and the other - a socket with the same name.
* A socket may only accept one plug at a time.
* Numbers of plugs and sockets don't have to match 1:1. One socket may serve multiple plugs \(e.g. table tops may be placed on one table leg\).

The cube's Name is your way of communicating to the ViewAR System Converter the Snappoint properties. Here is how it works.

A correct cube name follows the pattern below:

```json
SNAPPOINT__PLUG1_PLUG2_PLUG3__SOCKET1__SNAPPOINTNAME
```

```json
Explanation: (1)__(2)__(3)__(4)
```

\(1\) _SNAPPOINT_ - a prefix informing the converter that the mesh is a _snappoint_  
\(2\) _PLUGS_ - separated with a single underscore \("\_"\) names defining _snappoint's_ plugs. If a _snappoint_ has no plug, "dummyplug" should be inserted.  
\(3\) _SOCKETS_ - separated with a single underscore \("\_"\) names defining _snappoint's_ sockets. If a _snappoint_ has no sockets, "dummysocket" should be inserted.  
\(4\) _SNAPPOINTNAME_ -  a suffix defining a _snappoint's_ name. It is not an active part of the name, just a note for 3D designers and developers.

**TIP:** _There is no specific maximum of _snappoints_, plugs, sockets, however try to keep the naming short._

**HowTo:**  
In a 3D software, open your model and create a small cube \(the cube will not be removed from the scene, therefore keep it as small as possible e.g. 1x1x1 units\). Move it to the position where the _snappoint_ is supposed to be. Then, rotate it so that the front of the cube points in the direction where other object should be snapped. _Snappoints_ need to face each other and their tops need to point in the same direction. Scaling of the _snappoint_ does not affect it's functionality. Name the cube according to the above naming convention.

IMPORTANT: DO NOT freeze the transformation or delete history of cubes. This information is needed for our converter and are essential!

You can also download a prepared snappoint here: [Snappoint.fbx](http://it5.at/trac/viewar/raw-attachment/wiki/Converter/Snappoint.fbx)

####Read next
[Guidelines for Content Creation](guidelines-for-content-creation.md)

