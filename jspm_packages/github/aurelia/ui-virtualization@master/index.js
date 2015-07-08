define(['exports', './virtual-repeat', './virtual-list'], function (exports, _virtualRepeat, _virtualList) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;

  function configure(aurelia) {
    aurelia.globalizeResources('./virtual-repeat', './virtual-list');
  }

  exports.VirtualRepeat = _virtualRepeat.VirtualRepeat;
  exports.VirtualList = _virtualList.VirtualList;
});