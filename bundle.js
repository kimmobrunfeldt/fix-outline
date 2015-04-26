(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var fixOutline = require('fix-outline');
fixOutline();

},{"fix-outline":2}],2:[function(require,module,exports){
// * Adds .kb-nav-used to body when TAB key is pressed
// * Adds new rule which disables outline on elements when
//   .kb-nav-used is not defined for body
//
// In other words, outline for elements is enabled
// after user uses keyboard navigation for the first time

function fixOutline(opts) {
    opts = opts || {}
    if (typeof opts.autoCss === 'undefined') {
        opts.autoCss = true;
    }

    var KEY_CODE_TAB = 9;

    function init() {
        if (opts.autoCss) {
            addFocusRule();
        }

        window.addEventListener('keyup', keyUp, false);
    }

    function keyUp(event) {
        if (event.keyCode === KEY_CODE_TAB) {
            addClass(document.querySelector('body'), 'kb-nav-used');

            window.removeEventListener('keyup', keyUp, false);
        }
    }

    function addClass(element, className) {
        element.className += ' ' + className;
    }

    function addFocusRule() {
        var sheets = document.styleSheets;
        // Use existing sheet or create new one
        var sheet = sheets.length > 0 ? sheets[0] : createStyleSheet();

        // Disable element outline on focus if
        // user has _not_ used keyboard navigation
        var rule = 'body:not(.kb-nav-used) *:focus {' +
                   '  outline: none;' +
                   '}';
        sheet.insertRule(rule, sheet.cssRules.length);
    }

    function createStyleSheet() {
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(''));  // WebKit hack

        // Insert to DOM
        document.head.appendChild(style);

        return style.sheet;
    }

    init();
}

module.exports = fixOutline;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibWFpbi5qcyIsIm5vZGVfbW9kdWxlcy9maXgtb3V0bGluZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGZpeE91dGxpbmUgPSByZXF1aXJlKCdmaXgtb3V0bGluZScpO1xuZml4T3V0bGluZSgpO1xuIiwiLy8gKiBBZGRzIC5rYi1uYXYtdXNlZCB0byBib2R5IHdoZW4gVEFCIGtleSBpcyBwcmVzc2VkXG4vLyAqIEFkZHMgbmV3IHJ1bGUgd2hpY2ggZGlzYWJsZXMgb3V0bGluZSBvbiBlbGVtZW50cyB3aGVuXG4vLyAgIC5rYi1uYXYtdXNlZCBpcyBub3QgZGVmaW5lZCBmb3IgYm9keVxuLy9cbi8vIEluIG90aGVyIHdvcmRzLCBvdXRsaW5lIGZvciBlbGVtZW50cyBpcyBlbmFibGVkXG4vLyBhZnRlciB1c2VyIHVzZXMga2V5Ym9hcmQgbmF2aWdhdGlvbiBmb3IgdGhlIGZpcnN0IHRpbWVcblxuZnVuY3Rpb24gZml4T3V0bGluZShvcHRzKSB7XG4gICAgb3B0cyA9IG9wdHMgfHwge31cbiAgICBpZiAodHlwZW9mIG9wdHMuYXV0b0NzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0cy5hdXRvQ3NzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgS0VZX0NPREVfVEFCID0gOTtcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmIChvcHRzLmF1dG9Dc3MpIHtcbiAgICAgICAgICAgIGFkZEZvY3VzUnVsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXAsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXlVcChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS0VZX0NPREVfVEFCKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICdrYi1uYXYtdXNlZCcpO1xuXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRGb2N1c1J1bGUoKSB7XG4gICAgICAgIHZhciBzaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICAgICAgLy8gVXNlIGV4aXN0aW5nIHNoZWV0IG9yIGNyZWF0ZSBuZXcgb25lXG4gICAgICAgIHZhciBzaGVldCA9IHNoZWV0cy5sZW5ndGggPiAwID8gc2hlZXRzWzBdIDogY3JlYXRlU3R5bGVTaGVldCgpO1xuXG4gICAgICAgIC8vIERpc2FibGUgZWxlbWVudCBvdXRsaW5lIG9uIGZvY3VzIGlmXG4gICAgICAgIC8vIHVzZXIgaGFzIF9ub3RfIHVzZWQga2V5Ym9hcmQgbmF2aWdhdGlvblxuICAgICAgICB2YXIgcnVsZSA9ICdib2R5Om5vdCgua2ItbmF2LXVzZWQpICo6Zm9jdXMgeycgK1xuICAgICAgICAgICAgICAgICAgICcgIG91dGxpbmU6IG5vbmU7JyArXG4gICAgICAgICAgICAgICAgICAgJ30nO1xuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldCgpIHtcbiAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTsgIC8vIFdlYktpdCBoYWNrXG5cbiAgICAgICAgLy8gSW5zZXJ0IHRvIERPTVxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgICAgICByZXR1cm4gc3R5bGUuc2hlZXQ7XG4gICAgfVxuXG4gICAgaW5pdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpeE91dGxpbmU7XG4iXX0=
