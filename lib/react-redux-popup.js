(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"), require("react-addons-css-transition-group"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux", "react-addons-css-transition-group"], factory);
	else if(typeof exports === 'object')
		exports["react-redux-popup"] = factory(require("react"), require("react-redux"), require("react-addons-css-transition-group"));
	else
		root["react-redux-popup"] = factory(root["React"], root["ReactRedux"], root["ReactAddonsCssTransitionGroup\""]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.popupSelector = exports.PopupSandbox = exports.popupReducer = exports.popupActions = exports.Popup = exports.Modal = undefined;

	var _modal = __webpack_require__(7);

	var _modal2 = _interopRequireDefault(_modal);

	var _popup = __webpack_require__(8);

	var _popup2 = _interopRequireDefault(_popup);

	var _actions = __webpack_require__(3);

	var popupActions = _interopRequireWildcard(_actions);

	var _reducer = __webpack_require__(9);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _popupSandbox = __webpack_require__(5);

	var _popupSandbox2 = _interopRequireDefault(_popupSandbox);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Modal = _modal2.default;
	exports.Popup = _popup2.default;
	exports.popupActions = popupActions;
	exports.popupReducer = _reducer2.default;
	exports.PopupSandbox = _popupSandbox2.default;
	exports.popupSelector = _popupSandbox.popupSelector;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var TYPE_MODAL = exports.TYPE_MODAL = 'modal';
	var TYPE_POPUP = exports.TYPE_POPUP = 'popup';

	var popupCollection = [];
	popupCollection.remove = function (popupId) {
	    var i = void 0;
	    for (i = 0; i < popupCollection.length; i++) {
	        if (popupCollection[i][2].id === popupId) {
	            break;
	        }
	    }
	    popupCollection.splice(i, 1);
	};

	exports.default = popupCollection;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.openPopup = openPopup;
	exports.closePopup = closePopup;
	var OPEN_POPUP = exports.OPEN_POPUP = 'OPEN_POPUP';
	var CLOSE_POPUP = exports.CLOSE_POPUP = 'CLOSE_POPUP';

	function openPopup(popupId, rect) {
	    return {
	        rect: rect,
	        popupId: popupId,
	        type: OPEN_POPUP
	    };
	}

	function closePopup(popupId) {
	    return {
	        popupId: popupId,
	        type: CLOSE_POPUP
	    };
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (ComposedComponent, type) {
	    var HigherOrderPopupComponent = function (_Component) {
	        _inherits(HigherOrderPopupComponent, _Component);

	        function HigherOrderPopupComponent() {
	            _classCallCheck(this, HigherOrderPopupComponent);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(HigherOrderPopupComponent).apply(this, arguments));
	        }

	        _createClass(HigherOrderPopupComponent, [{
	            key: 'componentWillMount',
	            value: function componentWillMount() {
	                _popupCollection2.default.push([type, ComposedComponent, this.props]);
	            }
	        }, {
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                _popupCollection2.default.remove(this.props.id);
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                return null;
	            }
	        }]);

	        return HigherOrderPopupComponent;
	    }(_react.Component);

	    HigherOrderPopupComponent.propTypes = PROP_TYPES;
	    return HigherOrderPopupComponent;
	};

	var _react = __webpack_require__(2);

	var _popupCollection = __webpack_require__(1);

	var _popupCollection2 = _interopRequireDefault(_popupCollection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PROP_TYPES = {
	    id: _react.PropTypes.string.isRequired
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.popupSelector = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _reactAddonsCssTransitionGroup = __webpack_require__(10);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _popupCollection = __webpack_require__(1);

	var _popupCollection2 = _interopRequireDefault(_popupCollection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var popupSelector = exports.popupSelector = function popupSelector(state) {
	    return state.popup;
	};

	var Sandbox = function (_Component) {
	    _inherits(Sandbox, _Component);

	    function Sandbox() {
	        _classCallCheck(this, Sandbox);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Sandbox).apply(this, arguments));
	    }

	    _createClass(Sandbox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _reactAddonsCssTransitionGroup2.default,
	                    {
	                        transitionName: this.props.modalTransitionName,
	                        transitionEnterTimeout: this.props.modalTransitionEnterTimeout,
	                        transitionLeaveTimeout: this.props.modalTransitionLeaveTimeout
	                    },
	                    this.renderPopups(_popupCollection.TYPE_MODAL)
	                ),
	                _react2.default.createElement(
	                    _reactAddonsCssTransitionGroup2.default,
	                    {
	                        transitionName: this.props.popupTransitionName,
	                        transitionEnterTimeout: this.props.popupTransitionEnterTimeout,
	                        transitionLeaveTimeout: this.props.popupTransitionLeaveTimeout
	                    },
	                    this.renderPopups(_popupCollection.TYPE_POPUP)
	                )
	            );
	        }
	    }, {
	        key: 'renderPopups',
	        value: function renderPopups(popupType) {
	            var _this2 = this;

	            return _popupCollection2.default.filter(function (popup) {
	                return popup[0] === popupType && _this2.props[popup[2].id];
	            }).map(function (_ref) {
	                var _ref2 = _slicedToArray(_ref, 3);

	                var type = _ref2[0];
	                var Popup = _ref2[1];
	                var props = _ref2[2];
	                return _react2.default.createElement(Popup, _extends({ key: props.id }, props));
	            });
	        }
	    }]);

	    return Sandbox;
	}(_react.Component);

	Sandbox.propTypes = {
	    modalTransitionName: _react.PropTypes.string.isRequired,
	    modalTransitionEnterTimeout: _react.PropTypes.number.isRequired,
	    modalTransitionLeaveTimeout: _react.PropTypes.number.isRequired,
	    popupTransitionName: _react.PropTypes.string.isRequired,
	    popupTransitionEnterTimeout: _react.PropTypes.number.isRequired,
	    popupTransitionLeaveTimeout: _react.PropTypes.number.isRequired
	};

	Sandbox.defaultProps = {
	    modalTransitionName: 'modal',
	    modalTransitionEnterTimeout: 300,
	    modalTransitionLeaveTimeout: 300,
	    popupTransitionName: 'popup',
	    popupTransitionEnterTimeout: 100,
	    popupTransitionLeaveTimeout: 100
	};

	exports.default = (0, _reactRedux.connect)(popupSelector)(Sandbox);

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (ComposedComponent) {
	    var Modal = function (_Component) {
	        _inherits(Modal, _Component);

	        function Modal(props) {
	            _classCallCheck(this, Modal);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

	            _this.state = { style: {} };
	            return _this;
	        }

	        _createClass(Modal, [{
	            key: 'componentDidMount',
	            value: function componentDidMount() {
	                var modal = document.getElementsByClassName('js-modal-' + this.props.id)[0];
	                this.setState({
	                    style: {
	                        left: (window.innerWidth - modal.clientWidth) / 2,
	                        top: (window.innerHeight - modal.clientHeight) / 2
	                    }
	                });
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                var className = 'js-modal-' + this.props.id + ' ' + (this.props.popupClassName ? this.props.popupClassName : '');
	                var style = _extends({}, this.state.style, this.props.style);

	                return _react2.default.createElement(
	                    'div',
	                    { id: this.props.id },
	                    _react2.default.createElement('div', { className: this.props.layoverClassName }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: className, style: style },
	                        _react2.default.createElement(ComposedComponent, this.props)
	                    )
	                );
	            }
	        }]);

	        return Modal;
	    }(_react.Component);

	    Modal.propTypes = PROP_TYPES;

	    return (0, _higherOrderPopupComponent2.default)(Modal, _popupCollection.TYPE_MODAL);
	};

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _higherOrderPopupComponent = __webpack_require__(4);

	var _higherOrderPopupComponent2 = _interopRequireDefault(_higherOrderPopupComponent);

	var _popupCollection = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PROP_TYPES = {
	    id: _react.PropTypes.string.isRequired,
	    layoverClassName: _react.PropTypes.string,
	    popupClassName: _react.PropTypes.string,
	    style: _react.PropTypes.object
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (ComposedComponent) {
	    var Popup = function (_Component) {
	        _inherits(Popup, _Component);

	        function Popup(props) {
	            _classCallCheck(this, Popup);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Popup).call(this, props));

	            _this.state = {};
	            _this.closePopup = function () {
	                props.closePopup(props.id);
	            };
	            return _this;
	        }

	        _createClass(Popup, [{
	            key: 'componentDidMount',
	            value: function componentDidMount() {
	                var _props$ = this.props[this.props.id + '_rect'];
	                var top = _props$.top;
	                var left = _props$.left;

	                this.setState({
	                    style: { left: left, top: top }
	                });

	                window.addEventListener('mouseup', this.closePopup);
	            }
	        }, {
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                window.removeEventListener('mouseup', this.closePopup);
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                var className = 'js-popup-' + this.props.id + ' ' + (this.props.popupClassName ? this.props.popupClassName : '');
	                var style = _extends({}, this.state.style, this.props.style);

	                return _react2.default.createElement(
	                    'div',
	                    { className: className, onMouseUp: this.stopEvent, style: style },
	                    _react2.default.createElement(ComposedComponent, this.props)
	                );
	            }
	        }, {
	            key: 'stopEvent',
	            value: function stopEvent(event) {
	                event.stopPropagation();
	            }
	        }]);

	        return Popup;
	    }(_react.Component);

	    Popup.propTypes = PROP_TYPES;

	    return (0, _higherOrderPopupComponent2.default)((0, _reactRedux.connect)(_popupSandbox.popupSelector, popupActions)(Popup), _popupCollection.TYPE_POPUP);
	};

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _actions = __webpack_require__(3);

	var popupActions = _interopRequireWildcard(_actions);

	var _higherOrderPopupComponent = __webpack_require__(4);

	var _higherOrderPopupComponent2 = _interopRequireDefault(_higherOrderPopupComponent);

	var _popupCollection = __webpack_require__(1);

	var _popupSandbox = __webpack_require__(5);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PROP_TYPES = {
	    id: _react.PropTypes.string.isRequired,
	    popupClassName: _react.PropTypes.string,
	    style: _react.PropTypes.object
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = popup;

	var _actions = __webpack_require__(3);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function popup() {
	    var _extends2;

	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _actions.OPEN_POPUP:
	            return _extends({}, state, (_extends2 = {}, _defineProperty(_extends2, action.popupId, true), _defineProperty(_extends2, action.popupId + '_rect', action.rect), _extends2));
	        case _actions.CLOSE_POPUP:
	            var keys = Object.keys(state);
	            var newState = {};
	            keys.forEach(function (key) {
	                if (key !== action.popupId && key !== action.popupId + '_rect') {
	                    newState[key] = state[key];
	                }
	            });
	            return newState;
	        default:
	            return state;
	    }
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }
/******/ ])
});
;