### Parametric Models
Sometimes a fixed object geometry is not enough. For example, in order to create a product customisation application where not only material finishings but also product dimensions may be adjusted, so-called **Parametric Models** would be needed. These are 3D objects which geometric characteristics may be algorithmically adjusted. This may relate to overall attributes of the object \(e.g. it’s length and width\) or properties of its elements \(e.g. radius of corners curvature\).

Let’s take an example of a plain cube with the following properties:
* **point of origin:** \[0, 0, 0\]
* **x-dimension:** \[int\], x∈ &lt;1, 20&gt;
* **y-dimension:** \[int\], y∈ &lt;1, 20&gt;
* **z-dimension:** \[int\], z∈ &lt;1, 20&gt;

Additionally, we add a numerical property describing a radius of curvature of its corners (asssumption: the curvature is symmetrical, identical in all directions and same for all corners):

* **cornerRadius**: \[int\], cornerRadius∈ &lt;0, 90&gt;

In order to use such a model in the application, one needs the following components:
* **3D Model** - created in a 3D modelling software \(e.g. Autodesk Maya\),
* **Data file** - a JSON describing the 3D Model's properties. This file is also configured in the **My Content Tab**, however, its Category needs to be set to "Data" (otherwise, the System will be awaiting a 3D model). A portion of an example data file below:

```json
{
    "dimensions": {
        "x": 10,
        "y": 10,
        "z": 10
    },
    "parameters": [
        {
            "name": "Width",
            "type": "manipulation",
            "value": {
                "default": 10,
                "max": 20,
                "min": 1,
                "type": "number"
            }
        },
        {
        "name": "Length",
            "type": "manipulation",
            "value": {
                "default": 10,
                "max": 20,
                "min": 1,
                "type": "number"
            }
        },
        {
        "name": "Height",
            "type": "manipulation",
            "value": {
                "default": 10,
                "max": 20,
                "min": 1,
                "type": "number"
            }
        },
        {
        "name": "Radius",
            "type": "manipulation",
            "value": {
                "default": 0,
                "max": 90,
                "min": 0,
                "type": "number"
            }
        }
    ],
    (...)
}
```
* **Way to access / manipulate the properties** - Values of the parameters may either be defined in the application code (e.g. one may create a parametric model of a bench being adjusted automatically to fit the length of the wall) or exposed to the user (e.g. allowing for awning width manipulation).

#### Texturing
Texturing a Parametric Model requires understanding possible modifications of the model. From the ViewAR Core side, there is a special real-time UV layout updating process implemented. Depending on which parts of the model would be stretched, the 3D object gets divided in sections with UV layouts applied accordingly. When parameters are changed, the UV layout of static parts remains untouched, while the layout of the altered elements gets regenerated in real-time. In this way, it is ensured that changes in geometry are followed by appropriate changes in the UV layout.

#### Animations
Animations aren't influenced.

#### Example
A good example of the use of Parametric Models is the [Markilux App](https://www.viewar.com/showcase/markilux/).

**TIP:** _Development and integration of parametric models is a complex issue, therefore we strongly encourage you to use our support on that matter. Custom 3D objects may be requested via the [Request 3D Model Form](http://developer.viewar.com/jobs/add)._

#### Read next
[Reference Models](3d-content/3d-content--custom-models/advanced-models/3d-content--custom-models--advanced-models--reference-models.md) - Split complex, heavy models into smaller part and assemble them on the go to improve the App performance.

