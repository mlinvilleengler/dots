import React, { Component } from 'react'
import './Dot.css'

class Dot extends Component {
  clickHandler = () => {
    if (!this.props.gameActive) {
      return
    }

    let { points, dotHandler, speed, index } = this.props

    points = Math.floor(points * speed)
    dotHandler(index, points)
  }

  onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      this.clickHandler()
    }
  }

  render () {
    let { location, verticalLocation, size } = this.props
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
        onClick={() => this.clickHandler()}
        onKeyDown={e => this.onKeyDown(e)}
        role='button'
        aria-label='game-ball, click me to get points'
        tabIndex={0}
      />
    )
  }
}

export default Dot
