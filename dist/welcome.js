System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var computedFrom, Welcome, UpperValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
          this.previousValue = this.fullName;
        }

        _createClass(Welcome, [{
          key: 'submit',
          value: function submit() {
            this.previousValue = this.fullName;
            alert('Welcome, ' + this.fullName + '!');
          }
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {
            if (this.fullName !== this.previousValue) {
              return confirm('Are you sure you want to leave?');
            }
          }
        }, {
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);

        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29CQUVhLE9BQU8sRUEwQlAsbUJBQW1COzs7Ozs7Ozt1Q0E1QnhCLFlBQVk7OztBQUVQLGFBQU87aUJBQVAsT0FBTztnQ0FBUCxPQUFPOztlQUNsQixPQUFPLEdBQUcsd0NBQXdDO2VBQ2xELFNBQVMsR0FBRyxNQUFNO2VBQ2xCLFFBQVEsR0FBRyxLQUFLO2VBQ2hCLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUTs7O3FCQUpsQixPQUFPOztpQkFjWixrQkFBRTtBQUNOLGdCQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDbkMsaUJBQUssZUFBYSxJQUFJLENBQUMsUUFBUSxPQUFJLENBQUM7V0FDckM7OztpQkFFWSx5QkFBRztBQUNkLGdCQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUN4QyxxQkFBTyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQzthQUNuRDtXQUNGOzs7ZUFiVyxlQUFFO0FBQ1osbUJBQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFHO1dBQzdDOzs7ZUFaVSxPQUFPOzs7eUJBQVAsT0FBTzs7QUEwQlAseUJBQW1CO2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7O3FCQUFuQixtQkFBbUI7O2lCQUN4QixnQkFBQyxLQUFLLEVBQUM7QUFDWCxtQkFBTyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1dBQ3JDOzs7ZUFIVSxtQkFBbUI7OztxQ0FBbkIsbUJBQW1CIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbXB1dGVkRnJvbX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgY2xhc3MgV2VsY29tZXtcbiAgaGVhZGluZyA9ICdXZWxjb21lIHRvIHRoZSBBdXJlbGlhIE5hdmlnYXRpb24gQXBwISc7XG4gIGZpcnN0TmFtZSA9ICdKb2huJztcbiAgbGFzdE5hbWUgPSAnRG9lJztcbiAgcHJldmlvdXNWYWx1ZSA9IHRoaXMuZnVsbE5hbWU7XG5cbiAgLy9HZXR0ZXJzIGNhbid0IGJlIG9ic2VydmVkIHdpdGggT2JqZWN0Lm9ic2VydmUsIHNvIHRoZXkgbXVzdCBiZSBkaXJ0eSBjaGVja2VkLlxuICAvL0hvd2V2ZXIsIGlmIHlvdSB0ZWxsIEF1cmVsaWEgdGhlIGRlcGVuZGVuY2llcywgaXQgbm8gbG9uZ2VyIG5lZWRzIHRvIGRpcnR5IGNoZWNrIHRoZSBwcm9wZXJ0eS5cbiAgLy9UbyBvcHRpbWl6ZSBieSBkZWNsYXJpbmcgdGhlIHByb3BlcnRpZXMgdGhhdCB0aGlzIGdldHRlciBpcyBjb21wdXRlZCBmcm9tLCB1bmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cuXG4gIC8vQGNvbXB1dGVkRnJvbSgnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJylcbiAgZ2V0IGZ1bGxOYW1lKCl7XG4gICAgcmV0dXJuIGAke3RoaXMuZmlyc3ROYW1lfSAke3RoaXMubGFzdE5hbWV9YDtcbiAgfVxuXG4gIHN1Ym1pdCgpe1xuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHRoaXMuZnVsbE5hbWU7XG4gICAgYWxlcnQoYFdlbGNvbWUsICR7dGhpcy5mdWxsTmFtZX0hYCk7XG4gIH1cblxuICBjYW5EZWFjdGl2YXRlKCkge1xuICAgIGlmICh0aGlzLmZ1bGxOYW1lICE9PSB0aGlzLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/Jyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcHBlclZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KHZhbHVlKXtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudG9VcHBlckNhc2UoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9