function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var styles = {"fullPanel":"_1X2N_","screenPane":"_3cHdp","panelsContainer":"_ytvCK","navIndicators":"_2g5Xg","indicator":"_3klkV","active":"_3sodH"};

var FullPageContainer = function FullPageContainer(_ref) {
  var _ref$showIndicators = _ref.showIndicators,
      showIndicators = _ref$showIndicators === void 0 ? true : _ref$showIndicators,
      props = _objectWithoutPropertiesLoose(_ref, ["showIndicators"]);

  var panelsCount = React__default.Children.count(props.children);

  var _useState = React.useState({
    currentPanel: 1,
    transitioning: false
  }),
      viewState = _useState[0],
      setViewState = _useState[1];

  var prevSection = function prevSection() {
    setViewState(function (prev) {
      if (prev.currentPanel <= 1 || prev.transitioning) return prev;
      setTimeout(function () {
        setViewState(function (prev) {
          return _extends(_extends({}, prev), {}, {
            transitioning: false
          });
        });
      }, 1000);
      return {
        transitioning: true,
        currentPanel: prev.currentPanel - 1
      };
    });
  };

  var nextSection = function nextSection() {
    setViewState(function (prev) {
      if (prev.currentPanel >= panelsCount || prev.transitioning) return prev;
      setTimeout(function () {
        setViewState(function (prev) {
          return _extends(_extends({}, prev), {}, {
            transitioning: false
          });
        });
      }, 1000);
      return {
        transitioning: true,
        currentPanel: prev.currentPanel + 1
      };
    });
  };

  var handleScroll = function handleScroll(e) {
    if (e.deltaY > 40 && viewState.currentPanel < panelsCount) {
      nextSection();
    } else if (e.deltaY < -40 && viewState.currentPanel > 0) {
      prevSection();
    }
  };

  var onSetSection = function onSetSection(sectionNumber) {
    setViewState(function (prev) {
      return _extends(_extends({}, prev), {}, {
        currentPanel: sectionNumber
      });
    });
  };

  React.useEffect(function () {
    window.removeEventListener('wheel', function (e) {
      handleScroll(e);
    });
    window.addEventListener('wheel', function (e) {
      handleScroll(e);
    });
    return function () {
      window.removeEventListener('wheel', function (e) {
        handleScroll(e);
      });
    };
  }, []);
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.screenPane
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.panelsContainer,
    style: {
      top: -100 * (viewState.currentPanel - 1) + "vh"
    }
  }, props.children, showIndicators && /*#__PURE__*/React__default.createElement(NavIndicators, {
    count: panelsCount,
    activeIndex: viewState.currentPanel,
    setIndicator: onSetSection
  })));
};

var NavIndicators = function NavIndicators(_ref2) {
  var count = _ref2.count,
      activeIndex = _ref2.activeIndex,
      setIndicator = _ref2.setIndicator;
  var indicatorHtml = null;

  if (count) {
    indicatorHtml = Array(count).fill(0).map(function (item, i) {
      var indicatorClasses = [styles.indicator];

      if (i === activeIndex - 1) {
        indicatorClasses.push(styles.active);
      }

      return /*#__PURE__*/React__default.createElement("div", {
        key: i,
        className: indicatorClasses.join(' '),
        onClick: function onClick() {
          setIndicator(i + 1);
        }
      }, "\u2B24");
    });
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.navIndicators
  }, indicatorHtml);
};

var FullPagePanel = function FullPagePanel(_ref3) {
  var bgColor = _ref3.bgColor,
      props = _objectWithoutPropertiesLoose(_ref3, ["bgColor"]);

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.fullPanel,
    style: {
      backgroundColor: bgColor
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.panelContent
  }, props.children));
};

exports.FullPageContainer = FullPageContainer;
exports.FullPagePanel = FullPagePanel;
//# sourceMappingURL=index.js.map
