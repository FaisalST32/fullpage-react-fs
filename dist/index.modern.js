import React, { useRef, useState, useEffect } from 'react';

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

var styles = {"fullPanel":"_1X2N_","screenPane":"_3cHdp","panelsContainer":"_ytvCK","panelTransitioning":"_13cd7","navIndicators":"_2g5Xg","indicator":"_3klkV","active":"_3sodH","clickMask":"_2690c"};

var FullPageContainer = function FullPageContainer(_ref) {
  var _ref$showIndicators = _ref.showIndicators,
      showIndicators = _ref$showIndicators === void 0 ? true : _ref$showIndicators,
      props = _objectWithoutPropertiesLoose(_ref, ["showIndicators"]);

  var panelsCount = React.Children.count(props.children);
  var windowHeight = useRef(window.innerHeight);

  var _useState = useState({
    currentPanel: 1,
    transitioning: false,
    currentTop: 0
  }),
      viewState = _useState[0],
      setViewState = _useState[1];

  var prevSection = function prevSection() {
    setViewState(function (prev) {
      if (prev.transitioning) return prev;
      if (prev.currentPanel <= 1) return _extends(_extends({}, prev), {}, {
        currentTop: 0
      });
      setTimeout(function () {
        setViewState(function (prev) {
          return _extends(_extends({}, prev), {}, {
            transitioning: false
          });
        });
      }, 1000);
      return {
        transitioning: true,
        currentPanel: prev.currentPanel - 1,
        currentTop: -windowHeight.current * (prev.currentPanel - 2)
      };
    });
  };

  var nextSection = function nextSection() {
    setViewState(function (prev) {
      if (prev.transitioning) return prev;
      if (prev.currentPanel >= panelsCount) return _extends(_extends({}, prev), {}, {
        currentTop: -windowHeight.current * (panelsCount - 1)
      });
      setTimeout(function () {
        setViewState(function (prev) {
          return _extends(_extends({}, prev), {}, {
            transitioning: false
          });
        });
      }, 1000);
      return {
        transitioning: true,
        currentPanel: prev.currentPanel + 1,
        currentTop: -windowHeight.current * prev.currentPanel
      };
    });
  };

  var restoreSection = function restoreSection() {
    setViewState(function (prev) {
      return _extends(_extends({}, prev), {}, {
        currentTop: -windowHeight.current * (prev.currentPanel - 1)
      });
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
      setTimeout(function () {
        setViewState(function (prev) {
          return _extends(_extends({}, prev), {}, {
            transitioning: false
          });
        });
      }, 1000);
      return {
        transitioning: true,
        currentPanel: sectionNumber,
        currentTop: -windowHeight.current * (sectionNumber - 1)
      };
    });
  };

  var removeEventListeners = function removeEventListeners() {
    window.removeEventListener('wheel', function (e) {
      handleScroll(e);
    });
    window.removeEventListener('touchstart', function (e) {
      handleSwipe(e, true);
    });
    window.removeEventListener('touchend', function (e) {
      handleSwipe(e, false);
    });
    window.removeEventListener('pointerdown', function (e) {
      handleSwipe(e.changedTouches[0].screenY, true);
    });
    window.removeEventListener('pointerup', function (e) {
      handleSwipe(e.changedTouches[0].screenY, false);
    });
    window.removeEventListener('pointermove', function (e) {
      handleDrag(e.screenY);
    });
    window.removeEventListener('resize', function () {
      windowHeight.current = window.innerHeight;
    });
  };

  useEffect(function () {
    removeEventListeners();
    window.addEventListener('wheel', function (e) {
      handleScroll(e);
    });
    window.addEventListener('touchstart', function (e) {
      handleSwipe(e.changedTouches[0].screenY, true);
    });
    window.addEventListener('touchend', function (e) {
      handleSwipe(e.changedTouches[0].screenY, false);
    });
    window.addEventListener('pointerdown', function (e) {
      handleSwipe(e.screenY, true);
    });
    window.addEventListener('pointerup', function (e) {
      handleSwipe(e.screenY, false);
    });
    window.addEventListener('pointermove', function (e) {
      handleDrag(e.screenY);
    });
    window.addEventListener('touchmove', function (e) {
      handleDrag(e.changedTouches[0].screenY);
    });
    window.addEventListener('resize', function () {
      windowHeight.current = window.innerHeight;
    });
    return function () {
      removeEventListeners();
    };
  }, []);
  var touchStartY = useRef(0);

  var _useState2 = useState(0),
      currentPointer = _useState2[0],
      setCurrentPointer = _useState2[1];

  var handleDrag = function handleDrag(screenY) {
    if (touchStartY.current === 0) {
      return;
    }

    var initialSet = false;
    var difference = 0;
    setCurrentPointer(function (prev) {
      if (prev === 0) {
        initialSet = true;
        return screenY;
      }

      difference = prev - screenY;

      if (difference < 0 && difference > -2 || difference > 0 && difference < 2) {
        initialSet = true;
        return prev;
      }

      return screenY;
    });
    if (initialSet) return;
    setViewState(function (prev) {
      if (prev.transitioning) {
        return prev;
      }

      return _extends(_extends({}, prev), {}, {
        currentTop: prev.currentTop - difference
      });
    });
  };

  var handleSwipe = function handleSwipe(screenY, isStart, event) {
    if (isStart) {
      touchStartY.current = screenY;
      return;
    }

    var touchEndY = screenY;
    var touchDifference = touchStartY.current - touchEndY;

    if (touchDifference < -100) {
      prevSection();
    } else if (touchDifference > 100) {
      nextSection();
    } else {
      restoreSection();
    }

    touchStartY.current = 0;
    setCurrentPointer(0);
  };

  var panelsstyles = [styles.panelsContainer];

  if (viewState.transitioning) {
    panelsstyles.push(styles.panelTransitioning);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: styles.screenPane
  }, currentPointer !== 0 && /*#__PURE__*/React.createElement("div", {
    className: styles.clickMask
  }), /*#__PURE__*/React.createElement("div", {
    className: panelsstyles.join(' '),
    style: {
      top: viewState.currentTop + "px"
    }
  }, props.children, showIndicators && /*#__PURE__*/React.createElement(NavIndicators, {
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
      var indicatorstyles = [styles.indicator];

      if (i === activeIndex - 1) {
        indicatorstyles.push(styles.active);
      }

      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: indicatorstyles.join(' '),
        onClick: function onClick() {
          setIndicator(i + 1);
        }
      }, "\u2B24");
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: styles.navIndicators
  }, indicatorHtml);
};

var FullPagePanel = function FullPagePanel(_ref3) {
  var bgColor = _ref3.bgColor,
      props = _objectWithoutPropertiesLoose(_ref3, ["bgColor"]);

  return /*#__PURE__*/React.createElement("div", {
    className: styles.fullPanel,
    style: {
      backgroundColor: bgColor
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.panelContent
  }, props.children));
};

export { FullPageContainer, FullPagePanel };
//# sourceMappingURL=index.modern.js.map
