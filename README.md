# Illustractions

Tom Germeau [blogged][0] about an amazing way to build interactive prototypes with Adobe Illustrator using an exported SVG file and some jQuery. Illustractions expands on this concept by providing a quick, declarative way of defining the interactions in your prototypes.

## Getting Started

After referencing jQuery and the Illustractions script, kick things off by providing the path to your SVG file and an object containing the interactions you'd like to define:

```js
Illustractions.init('fruit.svg', {
  'click #row1':        'show #dialog',
  'click #closebutton': 'hide #dialog',
  'mouseenter #row1':   'show #tooltip',
  'mouseleave #row1':   'hide #tooltip'
});
```

## Specifying Interactions

The interaction definition syntax resembles that of [Backbone.js's events][1]:

     The event to listen to.
     |
     |     The triggering element.
     |     |
     |     |          The function to call on the target  (e.g. `show()`).
     |     |          |
     |     |          |    The target element.
     |     |          |    |
    'click #button': 'show #window'

Any of jQuery's events can be used (like `click`, `mouseenter`, etc.), as well as any manipulation function (such as `show` and `hide`, and even animated ones like `fadeIn`). The above example will show the element with the ID of `window` whenever the element with the ID of `button` is clicked.

[0]: http://tomgermeau.com/2014/02/how-designers-can-create-interactive-prototypes-with-illustrator/
[1]: http://backbonejs.org/#View-delegateEvents
