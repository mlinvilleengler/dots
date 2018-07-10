import React, { Component } from 'react'
import './Dot.css'

class Dot extends Component {
  constructor (props) {
    super(props)

    this.state = {
      animationId: '',
      size: props.size,
      verticalLocation: 0,
      size: this.props.size,
      transition: 0
    }
  }

  componentDidMount () {
    this.startAnimation()
  }

  componentWillUnmount () {
    this.stopAnimation()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.gameActive !== this.props.gameActive) {
      if (!nextProps.gameActive) {
        return this.stopAnimation()
      }
      this.startAnimation()
    }
  }

  stopAnimation = () => {
    cancelAnimationFrame(this.state.animation)
  }

  startAnimation = () => {
    const fn = () => {
      const { speed, gameActive, size, dotHandler, id } = this.props

      if (this.state.verticalLocation > 100 + size) {
        /* destroy self */
        dotHandler(id, 0)
        return
      }

      if (gameActive) {
        this.setState(prevState => ({
          verticalLocation: (prevState.verticalLocation += speed)
        }))
      }

      const animationId = requestAnimationFrame(fn)

      this.setState({
        animationId
      })
    }

    const animationId = requestAnimationFrame(fn)

    this.setState({
      animationId
    })
  }

  clickHandler = () => {
    if (!this.props.gameActive) {
      return
    }

    const { id, points, dotHandler } = this.props
    /* do animation */
    this.setState({ size: 0, transition: '.2' })
    setTimeout(() => dotHandler(id, points), 300)
  }

  render () {
    let { location } = this.props
    const { verticalLocation, size, transition } = this.state
    return (
      <div
        className='Dot'
        style={{
          height: size + 'vw',
          width: size + 'vw',
          top: verticalLocation + 'vh',
          left: location + 'vw',
          borderRadius: size / 2 + 'vw',
          transitionDuration: transition + 's'
        }}
        onClick={() => this.clickHandler()}
      />
    )
  }
}

export default Dot
