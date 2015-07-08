System.register(['bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia';
            config.map([{ route: ['', 'phone-list'], moduleId: 'phone-list', nav: false, title: 'Contacts' }, { route: ['welcome'], name: 'welcome', moduleId: './welcome', nav: false, title: 'Welcome' }, { route: 'flickr', name: 'flickr', moduleId: './flickr', nav: false, title: 'Flickr' }, { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: false, title: 'Child Router' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFHYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUcsUUFBUSxFQUFFLFlBQVksRUFBTSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxVQUFVLEVBQUUsRUFDeEYsRUFBRSxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFPLFFBQVEsRUFBRSxXQUFXLEVBQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFFLEVBQ3JHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBUSxJQUFJLEVBQUUsUUFBUSxFQUFRLFFBQVEsRUFBRSxVQUFVLEVBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFFLEVBQ3ZHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUUsQ0FDOUcsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2VBWFUsR0FBRzs7O3FCQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5jc3MhJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcil7XG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEnO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCAncGhvbmUtbGlzdCddLCAgbW9kdWxlSWQ6ICdwaG9uZS1saXN0JywgICAgIG5hdjogZmFsc2UsIHRpdGxlOidDb250YWN0cycgfSxcbiAgICAgIHsgcm91dGU6IFsnd2VsY29tZSddLCBuYW1lOiAnd2VsY29tZScsICAgICAgbW9kdWxlSWQ6ICcuL3dlbGNvbWUnLCAgICAgIG5hdjogZmFsc2UsIHRpdGxlOidXZWxjb21lJyB9LFxuICAgICAgeyByb3V0ZTogJ2ZsaWNrcicsICAgICAgIG5hbWU6ICdmbGlja3InLCAgICAgICBtb2R1bGVJZDogJy4vZmxpY2tyJywgICAgICAgbmF2OiBmYWxzZSwgdGl0bGU6J0ZsaWNrcicgfSxcbiAgICAgIHsgcm91dGU6ICdjaGlsZC1yb3V0ZXInLCBuYW1lOiAnY2hpbGQtcm91dGVyJywgbW9kdWxlSWQ6ICcuL2NoaWxkLXJvdXRlcicsIG5hdjogZmFsc2UsIHRpdGxlOidDaGlsZCBSb3V0ZXInIH1cbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=