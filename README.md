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


---

# Usage

RPM uses [MooTools](https://mootools.net/) for querying and manipulating the  [HTML DOM](https://www.w3schools.com/js/js_htmldom.asp). This snippet library leverages MooTools to make it easier to find an element in the layout and apply a modification to it.

## Querying

Querying allows JavaScript to find elements in the layout, here are the a couple of ways to find elements in the layout:

### The `$` function

The `$` function let's you find an element by their ID, for example on a page that has the following content:

```html
<div id="MainContent">
    <span class="Note">Some content</span>
</div>
```

```js
var someElement = $('MainContent'); 
```

In the previous code the `someElement` variable will have a reference to the div with id `MainContent`.

### The `$$` function

The `$$(selector)` function returns a list of elements that match certain `selector`. Selectors are written like css rules, some examples:

1. `$$(.something)` - will return a list of elements that have a class `something`
2. `$$(span)` - will return a list of every `span` element
3. `$$(span.something)` - will return a list of every `span` that has the `something` class.

### The `getElements` function

When you need to find an element inside of another element  you can use the `getElemnts` function.

Example:

```html
<div id="MainContent">
    <span class="Note">Note 1</span>
    <span class="Note">Note 2</span>
    <span class="Note">Note 3</span>
</div>
<span class="Note">Some other note</span>
```

```js
var someElement = $('MainContent'); 
var notes = someElement.getElements('.Note'); 
```

In the previous example, the `notes` variable will contains references to the elements that say `Note 1`, `Note 2` and `Note 3` (but not to the one that says `Some other note`).