System.register([], function (_export) {
  'use strict';

  var ChildRouter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      ChildRouter = (function () {
        function ChildRouter() {
          _classCallCheck(this, ChildRouter);

          this.heading = 'Child Router';
        }

        _createClass(ChildRouter, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' }, { route: 'flickr', name: 'flickr', moduleId: './flickr', nav: true, title: 'Flickr' }, { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }]);

            this.router = router;
          }
        }]);

        return ChildRouter;
      })();

      _export('ChildRouter', ChildRouter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxXQUFXOzs7Ozs7Ozs7QUFBWCxpQkFBVztpQkFBWCxXQUFXO2dDQUFYLFdBQVc7O2VBQ3RCLE9BQU8sR0FBRyxjQUFjOzs7cUJBRGIsV0FBVzs7aUJBR1AseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQztBQUM3QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQU8sUUFBUSxFQUFFLFdBQVcsRUFBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxTQUFTLEVBQUUsRUFDdkcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFRLElBQUksRUFBRSxRQUFRLEVBQVEsUUFBUSxFQUFFLFVBQVUsRUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxRQUFRLEVBQUUsRUFDdEcsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGNBQWMsRUFBRSxDQUM3RyxDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUFYVSxXQUFXOzs7NkJBQVgsV0FBVyIsImZpbGUiOiJjaGlsZC1yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hpbGRSb3V0ZXJ7XG4gIGhlYWRpbmcgPSAnQ2hpbGQgUm91dGVyJztcblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCd3ZWxjb21lJ10sIG5hbWU6ICd3ZWxjb21lJywgICAgICBtb2R1bGVJZDogJy4vd2VsY29tZScsICAgICAgbmF2OiB0cnVlLCB0aXRsZTonV2VsY29tZScgfSxcbiAgICAgIHsgcm91dGU6ICdmbGlja3InLCAgICAgICBuYW1lOiAnZmxpY2tyJywgICAgICAgbW9kdWxlSWQ6ICcuL2ZsaWNrcicsICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6J0ZsaWNrcicgfSxcbiAgICAgIHsgcm91dGU6ICdjaGlsZC1yb3V0ZXInLCBuYW1lOiAnY2hpbGQtcm91dGVyJywgbW9kdWxlSWQ6ICcuL2NoaWxkLXJvdXRlcicsIG5hdjogdHJ1ZSwgdGl0bGU6J0NoaWxkIFJvdXRlcicgfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==