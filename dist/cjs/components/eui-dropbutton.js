"use strict";
var styleSupport = require("../mixins/style-support")["default"] || require("../mixins/style-support");
var sizeSupport = require("../mixins/size-support")["default"] || require("../mixins/size-support");
var poplistComponent = require("../components/eui-poplist")["default"] || require("../components/eui-poplist");
var dropbutton;

dropbutton = Em.Component.extend(styleSupport, sizeSupport, {
  tagName: 'div',
  classNameBindings: ['primaryAction:eui-groupbutton:eui-singlebutton'],
  poplistIsOpen: false,
  primaryAction: Em.computed(function() {
    return this.get('options').findBy('primary', true);
  }).property('options'),
  secondaryAction: (function() {
    var action;
    action = this.get('selection.action');
    if (action) {
      this.triggerAction({
        action: action
      });
    }
    return this.set('selection', null);
  }).observes('selection'),
  actions: {
    toggleWindow: function() {
      if (!this.get('poplistIsOpen')) {
        return poplistComponent.show({
          targetObject: this,
          isOpenBinding: 'targetObject.poplistIsOpen',
          selectionBinding: 'targetObject.selection',
          options: this.get('options'),
          labelPath: 'label',
          style: 'bubble'
        });
      }
    },
    primaryAction: function() {
      return this.sendAction('primaryAction.action', this);
    }
  }
});

exports["default"] = dropbutton;