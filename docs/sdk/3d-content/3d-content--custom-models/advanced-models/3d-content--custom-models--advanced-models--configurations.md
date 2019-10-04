### Configurations
In order to create complex scenes with model interdependencies encoded, we use **Configurations**. Technically speaking, a Configuration is a JSON file defining logical rules of model properties or possibilities of loading sets of models into the scene.

Below an example of a portion of configuration defining geometry options for a table top:

```js
{
    "configuration": {
        "properties": [{
            "name": "Table_top",
            "type": "part",
            "valueType": "enumerated",
            "values": [{
                    "name": "Table top - Round",
                    "foreignKey": "table-top-round"
                },
                {
                    "name": "Table top - Rectangular",
                    "foreignKey": "table-top-rectangular"
                },
                {
                    "name": "Table top - Square",
                    "foreignKey": "table-top-square"
                }

            ]
        }]
    }
}
```

and a portion of configuration defining material options for that table top:

```js
{
    "configuration": {
        "properties": [{
            "name": "Table_top",
            "type": "material",
            "valueType": "enumerated",
            "values": [{
                    "name": "White Marble"
                },
                {
                    "name": "Pink Marble"
                },
                {
                    "name": "Decorative Concrete"
                }
            ]
        }]
    }
}
```

####Read next
[Parametric Models](3d-content/3d-content--custom-models/advanced-models/3d-content--custom-models--advanced-models--parametric-models.md) - Enable dimensions of parts and/or whole models to be adjusted by the App User.

