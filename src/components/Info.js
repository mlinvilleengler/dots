import React from 'react'
import { connect } from 'react-redux'
import { toggleInfoVisibility } from '../redux/control-actions'
import './Info.css'

const mapStateToProps = ({ config, infoVisibility }) => ({
  infoVisibility,
  buttonText: config.content.info.exitIcon,
  header: config.content.info.header,
  infoItems: config.content.info.infoItems,
  icon: config.dots.mainIcon
})

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  toggleInfoVisibility: () =>
    dispatchProps.dispatch(toggleInfoVisibility(stateProps.infoVisibility))
})

const _Info = ({
  toggleInfoVisibility,
  header,
  buttonText,
  infoItems,
  icon
}) => {
  const infoItemElements = infoItems.map(item => <li key={item}>{item}</li>)

  return (
    <section className='info-section'>
      <button className='info-section_button' onClick={toggleInfoVisibility}>
        {buttonText}
      </button>
      <h2 className='info-section_header'>{header}</h2>
      <img alt='game logo' className='info-section_icon' src={icon} />
      <ul className='info-section_list'>{infoItemElements}</ul>
    </section>
  )
}

export const Info = connect(mapStateToProps, null, mergeProps)(_Info)
