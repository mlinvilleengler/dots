import React, { Component } from 'react'
import Slider from './Slider'
import './Toolbar.css'

class Toolbar extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const { score } = this.props
    const buttonText = this.props.gameActive ? 'PAUSE' : 'START'

    return (
      <nav>
        <section className='toolbar-section'>
          <h3>AWESOME COW</h3>
          <h3 role={'text'} aria-label='total game points'>{score}</h3>
          <button onClick={this.props.toggleGameActiveState}>
            {buttonText}
          </button>
        </section>
        <Slider speed={this.props.speed} setSpeed={this.props.setSpeed} />
      </nav>
    )
  }
}

export default Toolbar
