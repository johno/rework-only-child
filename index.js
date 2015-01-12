'use strict';

var walk = require('rework-walk');

var PROPERTY_IDENTIFIER = ':only-child';

module.exports = function reworkOnlyChild() {
  return function reworkOnlyChild(css) {
    walk(css, function(rule, node) {
      if (!rule.selectors) return rule;

      rule.selectors = rule.selectors.map(function(selector) {
        // See if it's a selector with the :only-child pseudo-class
        if (selector.indexOf(':only-child') !== -1) {
          // Replace :only-child with :first-child:last-child
          return selector.split(':only-child').join(':first-child:last-child');
        } else {
          return selector;
        }
      });
    });
  };
};
