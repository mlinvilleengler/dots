import React from 'react'
import { connect } from 'react-redux'
import { removeDot } from '../redux/dot-actions'
import './Dot.css'

const mapStateToProps = ({ gameActive }) => ({ gameActive })

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps
  const { index, location, verticalLocation, size } = ownProps

  return {
    location,
    verticalLocation,
    size,
    clickHandler: () => {
      if (!stateProps.gameActive) {
        return
      }
      dispatch(removeDot(index, size))
    }
  }
}

const Dot = ({ location, verticalLocation, size, clickHandler }) => {
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      clickHandler()
    }
  }

  return (
    <div
      className='Dot'
      style={{
        height: size + 'vw',
        width: size + 'vw',
        top: verticalLocation + 'vh',
        left: location + 'vw',
        borderRadius: size / 2 + 'vw'
      }}
      onClick={clickHandler}
      onKeyDown={onKeyDown}
      role='button'
      aria-label='game-ball, click me to get points'
      tabIndex={0}
    />
  )
}

export default connect(mapStateToProps, null, mergeProps)(Dot)
