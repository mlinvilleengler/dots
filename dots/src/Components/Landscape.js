import React, { Component } from 'react'
import './Landscape.css'
import uuid from 'uuid/v4'
import debounce from 'lodash.debounce'

class Landscape extends Component {
  constructor () {
    super()
    this.state = {
      hills: new Array(25).fill(0).map(() => {
        return this.getRandomHillOptions()
      })
    }
  }

  componentDidMount () {
    const resizeEvent = window.addEventListener(
      'resize',
      debounce(() => this.handleResize(), 100)
    )

    this.setState({ resizeEvent })
  }

  componentWillUnmount () {
    window.removeEventListener(this.state.resizeEvent)
  }

  handleResize = () => {
    this.setState(prevState => ({
      hills: prevState.hills.map(hill => {
        const newHill = { ...hill }
        const bottomRatio = this.getBottomRatio()
        newHill.bottom = newHill.size * bottomRatio + 'vh'
        return newHill
      })
    }))
  }

  getRandomHillOptions = () => {
    const left = Math.floor(Math.random() * 140 - 40)
    const size = Math.floor(Math.random() * 100)
    const zIndex = Math.floor(Math.random() * 10)
    const colors = new Array(3)
      .fill(0)
      .map(() => Math.floor(Math.random() * 255))
    const backgroundColor = `rgb(${colors.join()})`
    const borderRadius = Math.floor(Math.random() * 7 + 2)
    const opacity = Math.random() + 0.75
    const bottomRatio = this.getBottomRatio()

    return {
      size,
      zIndex,
      backgroundColor,
      opacity,
      key: uuid(),
      borderRadius: borderRadius + '%',
      left: left + 'vw',
      bottom: size * bottomRatio + 'vh',
      width: size + 'vw',
      height: size * 0.75 + 'vh'
    }
  }

  getBottomRatio = () => {
    let innerWidth = window.innerWidth
    let bottomRatio = -0.5
    if (innerWidth > 1000) {
      bottomRatio = -0.75
    } else if (innerWidth > 700) {
      bottomRatio = -0.6
    }
    return bottomRatio
  }

  renderHills = () => {
    return this.state.hills.map(hill => (
      <div
        key={hill.key}
        role='presentation'
        className='hill'
        style={{
          ...hill
        }}
      />
    ))
  }

  render () {
    return (
      <React.Fragment>
        {this.renderHills()}
      </React.Fragment>
    )
  }
}

export default Landscape
