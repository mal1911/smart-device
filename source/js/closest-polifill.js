'use strict';

(function () {
  if (!Element.prototype.closest) {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function (s) {
      var el = this;
      var ancestor = this;
      if (!document.documentElement.contains(el)) {
        return null;
      }
      do {
        if (ancestor.matches(s)) {
          return ancestor;
        }
        ancestor = ancestor.parentElement;
      } while (ancestor !== null);
      return null;
    };
  }
})();
