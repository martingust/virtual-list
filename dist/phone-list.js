System.register([], function (_export) {
  "use strict";

  var PhoneList;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      PhoneList = (function () {
        function PhoneList() {
          _classCallCheck(this, PhoneList);

          this.objectArray = [];
          this.numberOfItems = 20;
          this.isSelected = false;
        }

        _createClass(PhoneList, [{
          key: "setIsSelected",
          value: function setIsSelected() {
            this.isSelected = true;
          }
        }, {
          key: "createItem",
          value: function createItem() {
            var name = faker.name.findName();
            return {
              firstLetter: name.charAt(0),
              name: name,
              color: faker.internet.color(),
              phone: faker.phone.phoneNumber(),
              country: faker.address.country()
            };
          }
        }, {
          key: "activate",
          value: function activate() {
            var name;
            for (var i = 0; i < this.numberOfItems; ++i) {
              name = faker.name.findName();
              this.objectArray.push(this.createItem());
            }
          }
        }, {
          key: "addItems",
          value: function addItems(count) {
            for (var i = 0; i < count; ++i) {
              this.objectArray.push(this.createItem());
            }

            this.numberOfItems = this.objectArray.length;
          }
        }, {
          key: "addItem2",
          value: function addItem2() {
            var item = this.createItem();
            this.objectArray.splice(1, 0, item);
          }
        }, {
          key: "addItem",
          value: function addItem() {
            this.objectArray.push(this.createItem());
          }
        }, {
          key: "addItemFirst",
          value: function addItemFirst() {
            this.objectArray.unshift(this.createItem());
          }
        }, {
          key: "removeItems",
          value: function removeItems(count) {
            this.objectArray.splice(0, count);
          }
        }, {
          key: "unshift5",
          value: function unshift5() {
            this.objectArray.unshift(this.createItem(), this.createItem(), this.createItem(), this.createItem(), this.createItem());
          }
        }, {
          key: "clickedItem",
          value: function clickedItem(item, index) {
            alert("Clicked " + item.name + " at " + index);
          }
        }]);

        return PhoneList;
      })();

      _export("PhoneList", PhoneList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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ZmlsZSI6InBob25lLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGhvbmVMaXN0e1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9iamVjdEFycmF5ID0gW107XG4gICAgdGhpcy5udW1iZXJPZkl0ZW1zID0gMjA7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRJc1NlbGVjdGVkKCl7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZW0oKXtcbiAgICB2YXIgbmFtZSA9IGZha2VyLm5hbWUuZmluZE5hbWUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZmlyc3RMZXR0ZXI6IG5hbWUuY2hhckF0KDApLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGNvbG9yOiBmYWtlci5pbnRlcm5ldC5jb2xvcigpLFxuICAgICAgcGhvbmU6IGZha2VyLnBob25lLnBob25lTnVtYmVyKCksXG4gICAgICBjb3VudHJ5OiBmYWtlci5hZGRyZXNzLmNvdW50cnkoKVxuICAgIH07XG4gIH1cblxuICBhY3RpdmF0ZSgpe1xuICAgIHZhciBuYW1lO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZkl0ZW1zOyArK2kpIHtcbiAgICAgIG5hbWUgPSBmYWtlci5uYW1lLmZpbmROYW1lKCk7XG4gICAgICB0aGlzLm9iamVjdEFycmF5LnB1c2godGhpcy5jcmVhdGVJdGVtKCkpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEl0ZW1zKGNvdW50KXtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgIHRoaXMub2JqZWN0QXJyYXkucHVzaCh0aGlzLmNyZWF0ZUl0ZW0oKSk7XG4gICAgfVxuXG4gICAgdGhpcy5udW1iZXJPZkl0ZW1zID0gdGhpcy5vYmplY3RBcnJheS5sZW5ndGg7XG4gIH1cblxuICBhZGRJdGVtMigpe1xuICAgIHZhciBpdGVtID0gdGhpcy5jcmVhdGVJdGVtKCk7XG4gICAgdGhpcy5vYmplY3RBcnJheS5zcGxpY2UoMSwgMCwgaXRlbSk7XG4gIH1cblxuICBhZGRJdGVtKCl7XG4gICAgdGhpcy5vYmplY3RBcnJheS5wdXNoKHRoaXMuY3JlYXRlSXRlbSgpKTtcbiAgfVxuXG4gIGFkZEl0ZW1GaXJzdCgpe1xuICAgIHRoaXMub2JqZWN0QXJyYXkudW5zaGlmdCh0aGlzLmNyZWF0ZUl0ZW0oKSk7XG4gIH1cblxuICByZW1vdmVJdGVtcyhjb3VudCl7XG4gICAgdGhpcy5vYmplY3RBcnJheS5zcGxpY2UoMCwgY291bnQpO1xuICB9XG5cbiAgdW5zaGlmdDUoKXtcbiAgICB0aGlzLm9iamVjdEFycmF5LnVuc2hpZnQodGhpcy5jcmVhdGVJdGVtKCksdGhpcy5jcmVhdGVJdGVtKCksdGhpcy5jcmVhdGVJdGVtKCksdGhpcy5jcmVhdGVJdGVtKCksdGhpcy5jcmVhdGVJdGVtKCkpO1xuICB9XG5cbiAgY2xpY2tlZEl0ZW0oaXRlbSwgaW5kZXgpIHtcbiAgICBhbGVydChgQ2xpY2tlZCAke2l0ZW0ubmFtZX0gYXQgJHtpbmRleH1gKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=