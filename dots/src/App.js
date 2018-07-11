import React, { Component } from 'react'
import Dot from './Components/Dot'
import Toolbar from './Components/Toolbar'
import uuid from 'uuid/v4'
import Landscape from './Components/Landscape'

class App extends Component {
  constructor () {
    super()

    this.state = {
      addDotIntervalId: undefined,
      dotAnimationId: undefined,
      gameActive: false,
      dots: [],
      score: 0,
      actualScore: 0,
      speed: 1 / 10
    }
  }

  toggleGameActiveState = () => {
    let addDotIntervalId

    if (!this.state.gameActive) {
      addDotIntervalId = setInterval(this.addDot, 1000)
      this.animateDots()
    } else {
      clearInterval(this.state.addDotIntervalId)
      cancelAnimationFrame(this.state.dotAnimationId)
    }

    this.setState(prevState => ({
      addDotIntervalId,
      gameActive: !prevState.gameActive
    }))
  }

  setSpeed = speed => {
    this.setState({ speed: speed / 10 })
  }

  addDot = () => {
    const id = uuid()

    const size = Math.floor(Math.random() * 19 + 1)

    const location = Math.floor(Math.random() * (100 - size))

    const points = Math.floor(20 / size * 100)

    this.setState(prevState => {
      const dot = {
        id,
        size,
        location,
        points,
        verticalLocation: 0 - size
      }

      return { dots: [...prevState.dots, dot] }
    })
  }

  setScore = points => {
    this.setState(prevState => ({
      actualScore: prevState.actualScore + points
    }))

    const updateScoreRecursively = () => {
      if (this.state.score >= this.state.actualScore) {
        return
      }

      this.setState(prevState => ({ score: prevState.score + 1 }))
      return requestAnimationFrame(updateScoreRecursively)
    }

    return requestAnimationFrame(updateScoreRecursively)
  }

  dotHandler = (index, points = 0) => {
    if (points) {
      this.setScore(points)
    }

    this.setState(prevState => {
      const dots = [...prevState.dots]
      dots.splice(index, 1)
      return {
        dots
      }
    })
  }

  animateDots = () => {
    // get new values for dots
    const fn = () => {
      this.setState(prevState => {
        let { speed, gameActive, dots } = prevState

        dots = dots
          .map(dot => {
            if (dot.verticalLocation > 100 + dot.size) {
              /* prepare for removal */
              dot.remove = true
              return dot
            }

            if (gameActive) {
              dot.verticalLocation = dot.verticalLocation += speed
            }
            return dot
          })
          .filter(dot => dot.remove !== true)

        return { dots }
      })

      const dotAnimationId = requestAnimationFrame(fn)

      // set dot state
      this.setState({
        dotAnimationId
      })
    }

    const dotAnimationId = requestAnimationFrame(fn)

    this.setState({
      dotAnimationId
    })
  }

  renderDots = () => {
    return this.state.dots.map((dot, index) => (
      <Dot
        index={index}
        key={dot.id}
        {...dot}
        dotHandler={this.dotHandler}
        gameActive={this.state.gameActive}
        speed={this.state.speed}
      />
    ))
  }

  render () {
    // console.log(Dot)

    return (
      <React.Fragment>
        <Toolbar
          speed={this.state.speed}
          score={this.state.score}
          gameActive={this.state.gameActive}
          toggleGameActiveState={this.toggleGameActiveState}
          setSpeed={this.setSpeed}
        />
        {this.renderDots()}
        <Landscape />
      </React.Fragment>
    )
  }
}

export default App
