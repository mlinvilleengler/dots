import React from 'react'
import { connect } from 'react-redux'
import {
  toggleGameActiveState,
  toggleInfoVisibility
} from '../redux/control-actions'
import { Slider } from './Slider'
import { Info } from './Info'
import classnames from 'classnames'
import './Toolbar.css'

const mapStateToProps = ({
  infoVisibility,
  animatingScore,
  gameActive,
  config,
  welcomeSectionVisibility
}) => ({
  infoVisibility,
  animatingScore,
  gameActive,
  welcomeSectionVisibility,
  header: config.content.toolbar.header,
  buttonText: gameActive
    ? config.content.toolbar.pauseText
    : config.content.toolbar.startText,
  expandIcon: infoVisibility
    ? config.content.toolbar.minimizeIcon
    : config.content.toolbar.expandIcon
})

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  toggleGameState: () => dispatchProps.dispatch(toggleGameActiveState()),
  toggleInfoVisibility: () =>
    dispatchProps.dispatch(toggleInfoVisibility(stateProps.infoVisibility))
})

const _Toolbar = ({
  infoVisibility,
  animatingScore,
  toggleGameState,
  toggleInfoVisibility,
  header,
  buttonText,
  expandIcon,
  sliderOptions
}) => (
  <nav
    className={classnames('toolbar', {
      expanded: infoVisibility
    })}
  >
    <Info />
    <section className='toolbar_section'>
      <h3 className='toolbar_text'>{header}</h3>
      <h3 className='toolbar_text' role={'text'} aria-label='total game points'>
        {animatingScore}
      </h3>
      <button className='toolbar_button' onClick={toggleGameState}>
        {buttonText}
      </button>
    </section>
    <Slider />
    <button className='toolbar_expand-icon' onClick={toggleInfoVisibility}>
      {expandIcon}
    </button>
  </nav>
)

export const Toolbar = connect(mapStateToProps, null, mergeProps)(_Toolbar)
