### Reference Models
When creating complex objects taking up a lot of memory, it is a good idea to split them into lighter portions and, instead of inserting them all in one model file, provide a list of references to the group of smaller models. Such an entity is called a **Reference Model.**

Technically speaking, it is a JSON file, providing references to models which are to be downloaded. Each one is identified through a unique ID \(UID\).

**TIP:** _The order of the list is used as an order of download. In case of less efficient internet connections, it may result in object appearing one by one. You may want to keep it in mind and, for example, build up a tall building from the bottom to the top._

Below is a snippet of a Reference Model file. 
```json
{
    "converter": {...},
    "meshes": {
        "skyscraper-groundfloor": [],
        "skyscraper-mainbody": [],
        "skyscraper-spire": []
},
    "references": [
        {
            "UID": "1",
            "name": "skyscraper-groundfloor",
            "pose": {
                "orientation": {
                    "w": 1,
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "position": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "scale": {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }
            },
            "version": "1",
            "type": "environment",
            "foreign_key": ""
        },
        {
            "UID": "2",
            "name": "skyscraper-mainbody",
            "pose": {
                "orientation": {
                    "w": 1,
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "position": {
                    "x": 0,
                    "y": 0,
                    "z": 20
                },
                "scale": {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }
            },
            "version": "3",
            "type": "environment",
            "foreign_key": ""
        },
        {
            "UID": "3",
            "name": "skyscraper-groundfloor",
            "pose": {
                "orientation": {
                    "w": 1,
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "position": {
                    "x": 0,
                    "y": 0,
                    "z": 90
                },
                "scale": {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }
            },
            "version": "1",
            "type": "environment",
            "foreign_key": ""
        }
    ]
}
```

####Read next
[Snapping](3d-content/3d-content--custom-models/advanced-models/3d-content--custom-models--advanced-models--snapping.md) - Enable objects to snap together in a predefined way (e.g. in order to switch between different table tops or assemble parts of a sofa).

