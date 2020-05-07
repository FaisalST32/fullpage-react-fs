import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

export const FullPageContainer = ({ showIndicators = true, ...props }) => {
  const panelsCount = React.Children.count(props.children)

  const windowHeight = useRef(window.innerHeight)

  const [viewState, setViewState] = useState({
    currentPanel: 1,
    transitioning: false,
    currentTop: 0
  })
  const prevSection = () => {
    setViewState((prev) => {
      if (prev.transitioning) return prev
      if (prev.currentPanel <= 1)
        return {
          ...prev,
          currentTop: 0
        }
      setTimeout(() => {
        setViewState((prev) => ({ ...prev, transitioning: false }))
      }, 1000)
      return {
        transitioning: true,
        currentPanel: prev.currentPanel - 1,
        currentTop: -windowHeight.current * (prev.currentPanel - 2)
      }
    })
  }

  const nextSection = () => {
    setViewState((prev) => {
      if (prev.transitioning) return prev

      if (prev.currentPanel >= panelsCount)
        return {
          ...prev,
          currentTop: -windowHeight.current * (panelsCount - 1)
        }
      setTimeout(() => {
        setViewState((prev) => ({ ...prev, transitioning: false }))
      }, 1000)
      return {
        transitioning: true,
        currentPanel: prev.currentPanel + 1,
        currentTop: -windowHeight.current * prev.currentPanel
      }
    })
  }

  const restoreSection = () => {
    setViewState((prev) => {
      return {
        ...prev,
        currentTop: -windowHeight.current * (prev.currentPanel - 1)
      }
    })
  }

  const handleScroll = (e) => {
    if (e.deltaY > 40 && viewState.currentPanel < panelsCount) {
      nextSection()
    } else if (e.deltaY < -40 && viewState.currentPanel > 0) {
      prevSection()
    }
  }

  const onSetSection = (sectionNumber) => {
    setViewState((prev) => {
      setTimeout(() => {
        setViewState((prev) => ({ ...prev, transitioning: false }))
      }, 1000)
      return {
        transitioning: true,
        currentPanel: sectionNumber,
        currentTop: -windowHeight.current * (sectionNumber - 1)
      }
    })
  }

  const removeEventListeners = () => {
    window.removeEventListener('wheel', (e) => {
      handleScroll(e)
    })
    window.removeEventListener('touchstart', (e) => {
      handleSwipe(e, true)
    })
    window.removeEventListener('touchend', (e) => {
      handleSwipe(e, false)
    })
    window.removeEventListener('pointerdown', (e) => {
      handleSwipe(e.changedTouches[0].screenY, true)
    })
    window.removeEventListener('pointerup', (e) => {
      handleSwipe(e.changedTouches[0].screenY, false)
    })
    window.removeEventListener('pointermove', (e) => {
      handleDrag(e.screenY)
    })

    window.removeEventListener('resize', () => {
      windowHeight.current = window.innerHeight
    })
  }

  useEffect(() => {
    removeEventListeners()
    window.addEventListener('wheel', (e) => {
      handleScroll(e)
    })
    window.addEventListener('touchstart', (e) => {
      handleSwipe(e.changedTouches[0].screenY, true, e)
    })
    window.addEventListener('touchend', (e) => {
      handleSwipe(e.changedTouches[0].screenY, false, e)
    })
    window.addEventListener('pointerdown', (e) => {
      handleSwipe(e.screenY, true, e)
    })
    window.addEventListener('pointerup', (e) => {
      handleSwipe(e.screenY, false, e)
    })

    window.addEventListener('pointermove', (e) => {
      handleDrag(e.screenY)
    })
    window.addEventListener('touchmove', (e) => {
      handleDrag(e.changedTouches[0].screenY)
    })

    window.addEventListener('resize', () => {
      windowHeight.current = window.innerHeight
    })
    return () => {
      removeEventListeners()
    }
  }, [])

  const touchStartY = useRef(0)

  const [currentPointer, setCurrentPointer] = useState(0)

  const handleDrag = (screenY) => {
    if (touchStartY.current === 0) {
      return
    }

    let initialSet = false
    let difference = 0
    setCurrentPointer((prev) => {
      if (prev === 0) {
        initialSet = true
        return screenY
      }

      difference = prev - screenY

      if (
        (difference < 0 && difference > -2) ||
        (difference > 0 && difference < 2)
      ) {
        initialSet = true
        return prev
      }
      return screenY
    })
    if (initialSet) return

    setViewState((prev) => {
      if (prev.transitioning) {
        return prev
      }
      return { ...prev, currentTop: prev.currentTop - difference }
    })
  }

  const handleSwipe = (screenY, isStart, event) => {
    if (isStart) {
      touchStartY.current = screenY
      return
    }

    const touchEndY = screenY

    const touchDifference = touchStartY.current - touchEndY

    if (touchDifference < -100) {
      prevSection()
    } else if (touchDifference > 100) {
      nextSection()
    } else {
      restoreSection()
    }

    touchStartY.current = 0
    setCurrentPointer(0)
  }

  const panelsstyles = [styles.panelsContainer]
  if (viewState.transitioning) {
    panelsstyles.push(styles.panelTransitioning)
  }

  return (
    <div className={styles.screenPane}>
      {currentPointer !== 0 && <div className={styles.clickMask} />}
      <div
        className={panelsstyles.join(' ')}
        style={{ top: `${viewState.currentTop}px` }}
      >
        {props.children}
        {showIndicators && (
          <NavIndicators
            count={panelsCount}
            activeIndex={viewState.currentPanel}
            setIndicator={onSetSection}
          />
        )}
      </div>
    </div>
  )
}

const NavIndicators = ({ count, activeIndex, setIndicator }) => {
  let indicatorHtml = null
  if (count) {
    indicatorHtml = Array(count)
      .fill(0)
      .map((item, i) => {
        const indicatorstyles = [styles.indicator]
        if (i === activeIndex - 1) {
          indicatorstyles.push(styles.active)
        }
        return (
          <div
            key={i}
            className={indicatorstyles.join(' ')}
            onClick={() => {
              setIndicator(i + 1)
            }}
          >
            &#11044;
          </div>
        )
      })
  }
  return <div className={styles.navIndicators}>{indicatorHtml}</div>
}

export const FullPagePanel = ({ bgColor, ...props }) => {
  return (
    <div className={styles.fullPanel} style={{ backgroundColor: bgColor }}>
      <div className={styles.panelContent}>{props.children}</div>
    </div>
  )
}
