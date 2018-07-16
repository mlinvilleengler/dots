import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeDot } from '../redux/dot-actions'
import classnames from 'classnames'
import './Dot.css'

const mapStateToProps = ({ gameActive, config }) => ({ gameActive, config })

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { config, gameActive } = stateProps
  const { dispatch } = dispatchProps
  const { location, verticalLocation, size, transform, id } = ownProps

  return {
    gameActive,
    location,
    verticalLocation,
    transform,
    size,
    icon: config.dots.mainIcon,
    clickHandler: () => {
      dispatch(removeDot(id, size))
    }
  }
}

class _Dot extends Component {
  state = {
    animating: false
  }

  onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      this.clickHandler()
    }
  }

  clickHandler = () => {
    if (!this.props.gameActive) {
      return
    }
    this.setState({ animating: true })
    setTimeout(this.props.clickHandler, 1000)
  }

  render () {
    const { location, verticalLocation, size, icon, transform } = this.props

    return (
      <img
        className={classnames('dot', {
          animated: this.state.animating,
          fadeOutUpBig: this.state.animating
        })}
        style={{
          height: size + 'vh',
          width: 'auto',
          top: verticalLocation + 'vh',
          left: location + 'vw',
          transform: `scaleX(${transform})`
        }}
        onClick={this.clickHandler}
        onKeyDown={this.onKeyDown}
        role='button'
        aria-label='game-item, click me to get points'
        tabIndex={0}
        alt='game-item, click me to get points'
        src={icon}
      />
    )
  }
}

export const Dot = connect(mapStateToProps, null, mergeProps)(_Dot)
