'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QMedia = function (_Component) {
  _inherits(QMedia, _Component);

  function QMedia() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, QMedia);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = QMedia.__proto__ || Object.getPrototypeOf(QMedia)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentWidth: window.innerWidth
    }, _this.onResize = function () {
      return _this.throttle(_this.setState({ currentWidth: window.innerWidth }), 200);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(QMedia, [{
    key: 'throttle',
    value: function throttle(fn, threshhold, scope) {

      threshhold || (threshhold = 250);
      var last, deferTimer;
      return function () {
        var context = scope || this;

        var now = +new Date(),
            args = arguments;
        if (last && now < last + threshhold) {
          // hold on to it
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function () {
            last = now;
            fn.apply(context, args);
          }, threshhold);
        } else {
          last = now;
          fn.apply(context, args);
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.onResize, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          query = _props.query,
          render = _props.render;

      var symbol = query[0];
      var width = this.state.currentWidth;
      var size = query.slice(1);
      switch (symbol) {
        case '<':
          if (width < size) {
            return render();
          }
          break;
        case '>':
          {
            if (width >= size) {
              return render();
            }
          }
      }
      return null;
    }
  }]);

  return QMedia;
}(_react.Component);

exports.default = QMedia;