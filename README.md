# Fix outline

```*:focus { outline: none }``` done right. Works out of the box with your existing CSS. Actives `outline` only after user actually uses keyboard
navigation. Read more about [the pragmatic approach](#how-it-works).

You get keyboard accessibility while having visually appealing page for
most users.

Has no dependencies and supports all modern browsers, including IE8+.

## Install

```bash
npm install fix-outline
```

## Usage

**Remove** all existing global outline rules like these:

```css
*:focus {
  outline: 0;
}
```

After that, just call `fixOutline()`:

```javascript
var fixOutline = require('fix-outline');
fixOutline();
```

### Advanced usage

`fixOutline()` automatically adds new CSS rules to your page.
You can take full control of your CSS by setting `autoCSS` option
to `false`:

```javascript
var fixOutline = require('fix-outline');
fixOutline({
    autoCss: false
});
```

That means you need to add some CSS yourself. For example this rule is added
when `autoCss` is `true`:

```css
body:not(.kb-nav-used) *:focus {
  outline: none;
}
```

## How it works

* Adds .kb-nav-used to body when TAB key is pressed
* Adds new CSS rule which disables outline on elements when .kb-nav-used is not defined for body

In other words, outline for elements is enabled
after user uses keyboard navigation for the first time.

Reasoning behind the implementation:

* Enables accessibility only for the ones using it.
* Fast. Does CSS stylesheet modifications only once and removes event listener. [Other implementations](https://github.com/lindsayevans/outline.js/blob/master/outline.js) keep listening for all `mousedown` and `keydown` events.

## Resources and other implementations

* http://outlinenone.com/
* http://a11yproject.com/posts/never-remove-css-outlines/
* https://gist.github.com/jensgro/2470777
* https://github.com/lindsayevans/outline.js


## License

MIT
