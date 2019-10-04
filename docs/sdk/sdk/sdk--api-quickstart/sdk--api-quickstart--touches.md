### Touches
Touches are one of the User Input types.
Scene and Model Instances can be manipulated by touching the screen.

The following touches of the Model Instance are recognised:
* **Single finger** - select & move
* **Two fingers** - rotate
* **Three fingers** - change the height

The following interactions with the Camera are recognized by touching any space in the scene that is not occupied by the model:
* **Single finger** - rotate
* **Two fingers** - move

The default behavior can also be changed manually by using our [JavaScript API Reference](00--sdk/sdk--api-reference/sdk--api-reference--overview.md).

#### Touches & UI Elements
Touches interpretation works top-down, menaing that - unless specified otherwise - they are caught by the first element on their way. In order to make an element "invisible" to the Touches, use a CSS class property `pointer-events`:
```css
.exampleClass {
pointer-events: none;
}
```

Keep in mind that the approach above will also affect all Children of the `exampleClass` UI element. In such a case events like `onclick` or `ontouchstart` will not fire. Therefore, for each HTML element that needs these events (e.g. a button) pointer events should be activated manually. The example below solves the problem on an HTML element level:

```css
.exampleClass {
pointer-events: none;
}

button {
pointer-events: auto;
}
```

### Read next
[ViewAR API References](http://test2.3.viewar.com/docs/index.html) - Complete list of the ViewAR API References
[ViewAR JavaScript API Playground](https://webversion.viewar.com/com.viewar.sandbox/100/) - ViewAR API interactive tutorial
