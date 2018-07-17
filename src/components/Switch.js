import React from 'react'
import SimpleSwitch from 'rc-switch'
import { connect } from 'react-redux'
import { toggleAccessibility } from '../redux/control-actions'
import 'rc-switch/assets/index.css'
import './Switch.css'

const mapStateToProps = ({ accessibile, config }) => ({
  accessibile,
  label: config.content.toolbar.switchLabel
})

const mapDispatchToProps = dispatch => ({
  handleChange: accessibile => dispatch(toggleAccessibility(!accessibile))
})

const _Switch = ({ accessibile, handleChange, label }) => (
  <section className='switch-container'>
    <SimpleSwitch onChange={handleChange} checked={accessibile} />
    <label>{label}</label>
  </section>
)

export const Switch = connect(mapStateToProps, mapDispatchToProps)(_Switch)
