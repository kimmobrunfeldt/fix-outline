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

        addListener(window, 'keyup', keyUp);
    }

    function keyUp(event) {
        if (event.keyCode === KEY_CODE_TAB) {
            addClass(document.querySelector('body'), 'kb-nav-used');

            removeListener(window, 'keyup', keyUp);
        }
    }

    // To support <IE9, use attachEvent and detachEvent.
    function addListener(element, event, listener) {
        if (element.attachEvent) {
            return element.attachEvent('on' + event, listener);
        } else {
            return element.addEventListener(event, listener, false);
        }
    }

    function removeListener(element, event, listener) {
        if (element.detachEvent) {
            return element.detachEvent('on' + event, listener);
        } else {
            return element.removeEventListener(event, listener, false);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibWFpbi5qcyIsIm5vZGVfbW9kdWxlcy9maXgtb3V0bGluZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBmaXhPdXRsaW5lID0gcmVxdWlyZSgnZml4LW91dGxpbmUnKTtcbmZpeE91dGxpbmUoKTtcbiIsIi8vICogQWRkcyAua2ItbmF2LXVzZWQgdG8gYm9keSB3aGVuIFRBQiBrZXkgaXMgcHJlc3NlZFxuLy8gKiBBZGRzIG5ldyBydWxlIHdoaWNoIGRpc2FibGVzIG91dGxpbmUgb24gZWxlbWVudHMgd2hlblxuLy8gICAua2ItbmF2LXVzZWQgaXMgbm90IGRlZmluZWQgZm9yIGJvZHlcbi8vXG4vLyBJbiBvdGhlciB3b3Jkcywgb3V0bGluZSBmb3IgZWxlbWVudHMgaXMgZW5hYmxlZFxuLy8gYWZ0ZXIgdXNlciB1c2VzIGtleWJvYXJkIG5hdmlnYXRpb24gZm9yIHRoZSBmaXJzdCB0aW1lXG5cbmZ1bmN0aW9uIGZpeE91dGxpbmUob3B0cykge1xuICAgIG9wdHMgPSBvcHRzIHx8IHt9XG4gICAgaWYgKHR5cGVvZiBvcHRzLmF1dG9Dc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdHMuYXV0b0NzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIEtFWV9DT0RFX1RBQiA9IDk7XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBpZiAob3B0cy5hdXRvQ3NzKSB7XG4gICAgICAgICAgICBhZGRGb2N1c1J1bGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZExpc3RlbmVyKHdpbmRvdywgJ2tleXVwJywga2V5VXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleVVwKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLRVlfQ09ERV9UQUIpIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ2tiLW5hdi11c2VkJyk7XG5cbiAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKHdpbmRvdywgJ2tleXVwJywga2V5VXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVG8gc3VwcG9ydCA8SUU5LCB1c2UgYXR0YWNoRXZlbnQgYW5kIGRldGFjaEV2ZW50LlxuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKGVsZW1lbnQsIGV2ZW50LCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoZWxlbWVudC5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChlbGVtZW50LmRldGFjaEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEZvY3VzUnVsZSgpIHtcbiAgICAgICAgdmFyIHNoZWV0cyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgICAgICAvLyBVc2UgZXhpc3Rpbmcgc2hlZXQgb3IgY3JlYXRlIG5ldyBvbmVcbiAgICAgICAgdmFyIHNoZWV0ID0gc2hlZXRzLmxlbmd0aCA+IDAgPyBzaGVldHNbMF0gOiBjcmVhdGVTdHlsZVNoZWV0KCk7XG5cbiAgICAgICAgLy8gRGlzYWJsZSBlbGVtZW50IG91dGxpbmUgb24gZm9jdXMgaWZcbiAgICAgICAgLy8gdXNlciBoYXMgX25vdF8gdXNlZCBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgICAgIHZhciBydWxlID0gJ2JvZHk6bm90KC5rYi1uYXYtdXNlZCkgKjpmb2N1cyB7JyArXG4gICAgICAgICAgICAgICAgICAgJyAgb3V0bGluZTogbm9uZTsnICtcbiAgICAgICAgICAgICAgICAgICAnfSc7XG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTdHlsZVNoZWV0KCkge1xuICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpOyAgLy8gV2ViS2l0IGhhY2tcblxuICAgICAgICAvLyBJbnNlcnQgdG8gRE9NXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gICAgICAgIHJldHVybiBzdHlsZS5zaGVldDtcbiAgICB9XG5cbiAgICBpbml0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZml4T3V0bGluZTtcbiJdfQ==
