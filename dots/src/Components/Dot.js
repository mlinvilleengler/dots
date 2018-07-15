import React from 'react'
import { connect } from 'react-redux'
import { removeDot } from '../redux/dot-actions'
import './Dot.css'

const mapStateToProps = ({ gameActive, config }) => ({ gameActive, config })

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps
  const { index, location, verticalLocation, size, transform } = ownProps

  return {
    location,
    verticalLocation,
    transform,
    size,
    icon: stateProps.config.dots.mainIcon,
    clickHandler: () => {
      if (!stateProps.gameActive) {
        return
      }
      dispatch(removeDot(index, size))
    }
  }
}

const _Dot = ({
  location,
  verticalLocation,
  size,
  clickHandler,
  icon,
  transform
}) => {
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      clickHandler()
    }
  }

  return (
    <img
      className='dot'
      style={{
        height: size + 'vh',
        width: 'auto',
        top: verticalLocation + 'vh',
        left: location + 'vw',
        transform: `scaleX(${transform})`
      }}
      onClick={clickHandler}
      onKeyDown={onKeyDown}
      role='button'
      aria-label='game-item, click me to get points'
      tabIndex={0}
      alt='game-item, click me to get points'
      src={icon}
    />
  )
}

export const Dot = connect(mapStateToProps, null, mergeProps)(_Dot)
