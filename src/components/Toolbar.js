import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  restart,
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
  restartText: config.content.toolbar.restartText, 
  expandIcon: config.content.toolbar.expandIcon,
  minimizeIcon: config.content.toolbar.minimizeIcon,
  infoIcon: config.content.toolbar.infoIcon
})

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  restart: () => dispatchProps.dispatch(restart()),  
  toggleGameState: () => dispatchProps.dispatch(toggleGameActiveState()),
  toggleInfoVisibility: () =>
    dispatchProps.dispatch(toggleInfoVisibility(stateProps.infoVisibility))
})

class _Toolbar extends Component {
  state = {
    showMinimizeToggle: true,
    showOptions: true
  }

  toggleShowOptions = () => {
    this.setState(prevState => ({ showOptions: !prevState.showOptions }))
  }

  render () {
    const {
      animatingScore,
      restart,
      toggleGameState,
      toggleInfoVisibility,
      header,
      buttonText,
      restartText,
      expandIcon,
      minimizeIcon,
      infoIcon
    } = this.props

    const { showMinimizeToggle, showOptions } = this.state

    let minimizeToggle
    if (showMinimizeToggle) {
      minimizeToggle = (
        <button
          className='toolbar_icon sticky'
          onClick={this.toggleShowOptions}
        >
          {showOptions ? minimizeIcon : expandIcon}
        </button>
      )
    }

    let options
    if (showOptions) {
      options = (
        <React.Fragment>
          <Slider />
          <Switch />
          <button className='toolbar_button' onClick={toggleGameState}>
            {buttonText}
          </button>
          <button className='toolbar_button' onClick={restart}>
            {restartText}
          </button>
        </React.Fragment>
      )
    }

    return (
      <nav className='toolbar'>
        <h3 className='toolbar_text' style={{ marginRight: '5px' }}>
          {header}
        </h3>
        <button className='toolbar_icon' onClick={toggleInfoVisibility}>
          {infoIcon}
        </button>
        <h3
          className='toolbar_text'
          style={{ minWidth: '75px' }}
          aria-label='total game points'
        >
          {animatingScore}
        </h3>
        {minimizeToggle}
        {options}
      </nav>
    )
  }
}

export const Toolbar = connect(mapStateToProps, null, mergeProps)(_Toolbar)
