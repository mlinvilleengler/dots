import React from 'react'
import { connect } from 'react-redux'
import {
  toggleGameActiveState,
  toggleInfoVisibility
} from '../redux/control-actions'
import { Slider } from './Slider'
import { Switch } from './Switch'
import './Toolbar.css'

const mapStateToProps = ({
  infoVisibility,
  animatingScore,
  gameActive,
  config
}) => ({
  infoVisibility,
  animatingScore,
  gameActive,
  header: config.content.toolbar.header,
  buttonText: gameActive
    ? config.content.toolbar.pauseText
    : config.content.toolbar.startText,
  expandIcon: config.content.toolbar.expandIcon
})

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  toggleGameState: () => dispatchProps.dispatch(toggleGameActiveState()),
  toggleInfoVisibility: () =>
    dispatchProps.dispatch(toggleInfoVisibility(stateProps.infoVisibility))
})

const _Toolbar = ({
  animatingScore,
  toggleGameState,
  toggleInfoVisibility,
  header,
  buttonText,
  expandIcon,
  sliderOptions
}) => (
  <nav className='toolbar'>
    <h3 className='toolbar_text' style={{ marginRight: '5px' }}>{header}</h3>
    <button className='toolbar_expand-icon' onClick={toggleInfoVisibility}>
      {expandIcon}
    </button>
    <h3 className='toolbar_text' aria-label='total game points'>
      {animatingScore}
    </h3>
    <Slider />
    <Switch />
    <button className='toolbar_button' onClick={toggleGameState}>
      {buttonText}
    </button>
  </nav>
)

export const Toolbar = connect(mapStateToProps, null, mergeProps)(_Toolbar)
