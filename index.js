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
        var sheet = sheets.length < 0
                  ? createStyleSheet()
                  // filters out styleSheets that don't have cssRules
                  : sheets[Object.keys(sheets).filter(function (val) {
                      try {
                          return sheets[val].cssRules;
                      } catch(error) {
                          if(error.name !== 'SecurityError') {
                              throw error;
                          }
                          return false;
                      }
                  }).pop()];
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
