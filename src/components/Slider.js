import React from 'react'
import SimpleSlider from 'rc-slider'
import { connect } from 'react-redux'
import { setSpeed } from '../redux/control-actions'
import 'rc-slider/assets/index.css'
import './Slider.css'

const mapStateToProps = ({ speed, config }) => ({
  speed,
  min: config.gameSpeed.min,
  max: config.gameSpeed.max,
  label: config.content.toolbar.sliderLabel
})

const mapDispatchToProps = dispatch => ({
  handleChange: speed => dispatch(setSpeed(speed))
})

const _Slider = ({ speed, handleChange, max, min, label }) => (
  <section
    className='slider-container'
    role='slider'
    aria-valuemax={max}
    aria-valuemin={min}
    aria-valuenow={speed}
  >
    <SimpleSlider
      name='speed-slider'
      min={min}
      max={max}
      onChange={handleChange}
      defaultValue={speed}
    />
    <label>{label}</label>
  </section>
)

export const Slider = connect(mapStateToProps, mapDispatchToProps)(_Slider)
