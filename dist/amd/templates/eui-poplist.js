define(
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Handlebars.compile("<div class=\"eui-poplistwrapper\">\n  <div {{bind-attr class=\":eui-search-wrapper searchString:eui-active\"}}>\n    {{input class=\"eui-search\" valueBinding=\"searchString\" size=\"1\"}}\n  </div>\n\n  {{#if hasNoOptions}}\n    <div class=\"eui-nooptions\">No results found.</div>\n  {{else}}\n    {{view listView contentBinding=\"filteredOptions\"}}\n  {{/if}}\n</div>\n");
  });