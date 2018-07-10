import React, { Component } from 'react'
import Dot from './Components/Dot'
import uuid from 'uuid/v4'
import './App.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      gameEngineRef: undefined,
      gameActive: false,
      dots: {},
      score: 0,
      speed: 1
    }
  }

  toggleGameActiveState = () => {
    if (!this.state.gameActive) {
      this.gameEngineRef = setInterval(this.addDot, 5000)
    } else {
      clearInterval(this.gameEngineRef)
    }

    this.setState(prevState => ({ gameActive: !prevState.gameActive }))
  }

  addDot = () => {
    const id = uuid()

    const size = Math.floor(Math.random() * 19 + 1)

    const location = Math.floor(Math.random() * (100 - size))

    const points = 10 / size

    this.setState(prevState => {
      const dots = {
        ...prevState.dots
      }

      dots[id] = {
        id,
        size,
        location,
        points,
        speed: this.state.speed
      }

      return { dots }
    })
  }

  dotHandler = (id, points = 0) => {
    this.setState(prevState => {
      const dots = { ...prevState.dots }

      delete dots[id]

      const newScore = (prevState.score += points)

      return {
        dots,
        newScore
      }
    })
  }

  renderDots = () => {
    return Object.keys(this.state.dots).map(dotId => (
      <Dot
        key={dotId}
        {...this.state.dots[dotId]}
        dotHandler={this.dotHandler}
        gameActive={this.state.gameActive}
      />
    ))
  }

  render () {
    const buttonText = this.state.gameActive ? 'PAUSE' : 'START'

    // console.log(Dot)

    return (
      <div className='App'>
        <button onClick={this.toggleGameActiveState}>{buttonText}</button>
        {this.renderDots()}
      </div>
    )
  }
}

export default App
