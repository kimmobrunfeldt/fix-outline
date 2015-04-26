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
