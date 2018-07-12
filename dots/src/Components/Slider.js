import React from 'react'
import SimpleSlider from 'rc-slider'
import { connect } from 'react-redux'
import { setSpeed } from '../redux/control-actions'
import 'rc-slider/assets/index.css'
import './Slider.css'

const mapStateToProps = ({ speed }) => ({ speed })

const mapDispatchToProps = dispatch => ({
  handleChange: speed => dispatch(setSpeed(speed))
})

export const Slider = ({ speed, handleChange }) => (
  <section
    className='slider-container'
    role='slider'
    aria-valuemax={40}
    aria-valuemin={1}
    aria-valuenow={speed}
  >
    <SimpleSlider
      name='speed-slider'
      min={1}
      max={40}
      onChange={handleChange}
      defaultValue={speed}
    />
    <label>SPEED</label>
  </section>
)

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
