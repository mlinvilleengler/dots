import React, { Component } from 'react'
import SimpleSlider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Slider.css'

class Slider extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <section
        className='slider-container'
        role='slider'
        aria-valuemax={40}
        aria-valuemin={1}
        aria-valuenow={this.props.speed}
      >
        <SimpleSlider
          name='speed-slider'
          min={1}
          max={40}
          onChange={this.props.setSpeed}
          defaultValue={this.props.speed}
        />
        <label>Speed</label>
      </section>
    )
  }
}

export default Slider
