---
id: material_selector
title: Add a Material Selector
---

In this step we want to a user interface to allow users to switch between the various materials supported by this model.

To do so we want to use React to render our UI. To do this in the same index.js file we can render a Hello world text:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import viewarApi from 'viewar-api';

function App() {
  return <div>Hello World</div>;
}

async function init() {
  await viewarApi.init();
  // viewar code …

  ReactDOM.render(<App />, document.getElementById('app'));
}

init();
```

No we need to know which materials are available for this model. In our case we can extract them from the \`chair.properies\`. All of them are materials and the object contains this information:

```js
{
  "Fabric": {
    "name": "Fabric",
    "values": [
      {
        "key": "123",
        "imageUrl": "https://api.viewar.com/resources/DownloadImage/display:1/id:36662/name:thumb_36662_1481894366%23%23FabricmatMammothFabric1_123.jpg"
      },
      {
        "key": "152",
        "imageUrl": "https://api.viewar.com/resources/DownloadImage/display:1/id:36662/name:thumb_36662_1481894366%23%23FabricmatMammothFabric1_152.jpg"
      },
    ],
    "value": {
      "key": "123",
      "imageUrl": "https://api.viewar.com/resources/DownloadImage/display:1/id:36662/name:thumb_36662_1481894366%23%23FabricmatMammothFabric1_123.jpg"
    }
  },
  "Wood": {
    "name": "Wood",
    "values": [
      {
        "key": "beech",
        "imageUrl": "https://api.viewar.com/resources/DownloadImage/display:1/id:36662/name:thumb_36662_1481894366%23%23WoodmatMammothWood1_beech.jpg"
      },
      {
        "key": "darkrawwood2",
        "imageUrl": "https://api.viewar.com/resources/DownloadImage/display:1/id:36662/name:thumb_36662_1481894366%23%23WoodmatMammothWood1_darkrawwood2.jpg"
      }
    ],
    "value": {
      "key": "beech",
      "imageUrl": "https://api.viewar.com/resources/DownloadImage/display:1/id:36662/name:thumb_36662_1481894366%23%23WoodmatMammothWood1_beech.jpg"
    }
  }
}
```

That said there are more materials and properties in this structure, but based on the above structure we can create a MaterialSelector component.

**Note:** The model was prepared using the ViewAR Material Editor. You can find more information on how to do that in the section [ViewAR Material Editor](./material_selector.md).

We create a file `MaterialSelector.js` allowing us to switch between materials. Before we edit the file we install the package  
styled-components.

```
npm install --save styled-components
```

In `MaterialSelector.js` we import React and create a couple styled components.

```js
import React from 'react';
import styled from 'styled-components';

const MaterialSelect = styled.input`
  width: 50px;
  height: 50px;
  border-radius: 200rem;
  pointer-events: auto;
  margin: 0 0.5rem;
  border: 2px solid ${(props) => (props.active ? '#fff' : 'transparent')};

  :focus {
    outline: 0;
    border: 2px solid '#fff';
  }
`;

const Row = styled.div`
  text-align: center;

  :last-child {
    margin-bottom: 2rem;
  }
`;

const Info = styled.p`
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;
```

Next up we iterate over the list of values and show the one that's active:

```js
export default function MaterialSelector({ materials, onUpdateMaterial }) {
  return (
    <div>
      {Object.values(materials).map((material) => (
        <Row key={material.name}>
          <Info>{material.name}</Info>
          {material.values.map((option) => (
            <MaterialSelect
              type="image"
              src={option.imageUrl}
              alt={option.key}
              key={option.key}
              active={option.key === material.value.key}
              onClick={(evt) => {
                evt.preventDefault();
                onUpdateMaterial(material.name, option.key);
              }}
            />
          ))}
        </Row>
      ))}
    </div>
  );
}
```

Next we can use the material selector once the chair is loaded and inserted into the scene

```js
import MaterialSelector from './MaterialSelector';

function App(props) {
  async function updateMaterial(key, value) {
    await props.chair.setPropertyValues({ [key]: value });
  }

  return (
    <MaterialSelector
      materials={props.chair.properties}
      onUpdateMaterial={updateMaterial}
    />
  );
}
```

Then we need to render our UI. We can do this using ReactDOM and pass the chair instance into the app function as a prop.

```js
const chair = await viewarApi.sceneManager.insertModel(chairModel, { pose });
ReactDOM.render(<App chair={chair} />, document.getElementById('app'));
```

Great, this will already work, in the sense that once we click on a material the chair material will update. Unfortunately the React UI won't since we haven't indicated to React that it should re-render. The issue here is that we basically have two different rendering engines \(the 3D engine and the DOM UI\) not being connected. That's good, because then one doesn't block the other, but it requires us to keep updates in sync.

**Note:** There are multiple ways to tackle this now. For once we could move all the chair properties into the state of a React component and update the chair properties with a callback on state updates. The other way is to stick to updating the properties directly on the model and force a React re-render once we know the model instance changed. In this case we go for the lat

Next up we somehow need to trigger an update whenever the material changes. Therefor we are going to use React Hooks.

Since there is no hook that simply tells React to re-render we create our own. The state is a number and it just increases it by one every time it's invoked and therefor triggering an update.

```js
import React, { useReducer } from 'react';

const useForceUpdate = () => useReducer((state) => state + 1, 0)[1];
```

Now we can update our `updateMaterial` function to force a re-render once the material update succeeded.

```js
import React, { useReducer } from 'react';

const useForceUpdate = () => useReducer((state) => state + 1, 0)[1];

function App(props) {
  const forceUpdate = useForceUpdate();

  async function updateMaterial(key, value) {
    await props.chair.setPropertyValues({ [key]: value });
    forceUpdate();
  }

  return (
    <MaterialSelector
      materials={props.chair.properties}
      onUpdateMaterial={updateMaterial}
    />
  );
}
```

Last but not least we can improve the positioning of our material selector by adding some global styles into our `index.js`.

```js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    position: fixed;
    overflow: hidden;
  }

  #app {
    pointer-events: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
```

**Note: **In the global styles we set the pointer-events to none and for the material inputs we reset it to auto. This is needed to make sure the clicks can bubble through the event down to the 3D view in order to drag the model by touching the screen.

Last but not least we need to add the GobalStyle component to our React tree.

```js
function App(props) {
  const forceUpdate = useForceUpdate();

  async function updateMaterial(key, value) {
    await props.chair.setPropertyValues({ [key]: value });
    forceUpdate();
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <MaterialSelector
        materials={props.chair.properties}
        onUpdateMaterial={updateMaterial}
      />
    </React.Fragment>
  );
}
```

![](assets/material_selector.gif)
