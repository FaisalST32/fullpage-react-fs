import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

export const FullPageContainer = ({ showIndicators = true, ...props }) => {
  const panelsCount = React.Children.count(props.children)

  const [viewState, setViewState] = useState({
    currentPanel: 1,
    transitioning: false
  })
  const prevSection = () => {
    setViewState((prev) => {
      if (prev.currentPanel <= 1 || prev.transitioning) return prev
      setTimeout(() => {
        setViewState((prev) => ({ ...prev, transitioning: false }))
      }, 1000)
      return { transitioning: true, currentPanel: prev.currentPanel - 1 }
    })
  }

  const nextSection = () => {
    setViewState((prev) => {
      if (prev.currentPanel >= panelsCount || prev.transitioning) return prev
      setTimeout(() => {
        setViewState((prev) => ({ ...prev, transitioning: false }))
      }, 1000)
      return { transitioning: true, currentPanel: prev.currentPanel + 1 }
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
      return { ...prev, currentPanel: sectionNumber }
    })
  }

  useEffect(() => {
    window.removeEventListener('wheel', (e) => {
      handleScroll(e)
    })
    window.addEventListener('wheel', (e) => {
      handleScroll(e)
    })
    return () => {
      window.removeEventListener('wheel', (e) => {
        handleScroll(e)
      })
    }
  }, [])
  return (
    <div className={styles.screenPane}>
      <div
        className={styles.panelsContainer}
        style={{ top: `${-100 * (viewState.currentPanel - 1)}vh` }}
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
        const indicatorClasses = [styles.indicator]
        if (i === activeIndex - 1) {
          indicatorClasses.push(styles.active)
        }
        return (
          <div
            key={i}
            className={indicatorClasses.join(' ')}
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
