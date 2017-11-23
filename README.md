# RPM Custom Layout Code Snippets

This repository contains common script snippets that RPM uses in layouts to provide further customizations.

## Running JavaScript code in layouts

Any custom JavaScript code running inside layouts needs to wait for the layout to finish rendering, to do that use the following snippet:

```js
$$('body').addEvent('RpmLayoutRendered', function() {
    // Your custom JS code here
});
```

## Library code

Library code are common functions that can be reused in layouts, they should be reusable between different layouts by calling them with different arguments.

Library code can be found in the `lib` directory. Including any of those libraries in a Layout is as simple as pasting the entire code into the end of the layout's code, each library file contains the `<script>` tag.

If updating to a newer version of the library, search for the id of the `<script>` tag to repleace the right one.


## Examples

The `examples` directory has some sample code on how to call the functions provided by the libraries.