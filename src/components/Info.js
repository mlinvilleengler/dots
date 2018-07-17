import React from 'react'
import { connect } from 'react-redux'
import { toggleInfoVisibility } from '../redux/control-actions'
import classnames from 'classnames'
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
  infoVisibility,
  toggleInfoVisibility,
  header,
  buttonText,
  infoItems,
  icon
}) => {
  const infoItemElements = infoItems.map(item => <li key={item}>{item}</li>)

  return (
    <React.Fragment>
      <div
        className={classnames('info-modal_mask', { expanded: infoVisibility })}
        role='presentation'
        onClick={toggleInfoVisibility}
      />
      <dialog
        className={classnames('info-modal', { expanded: infoVisibility })}
      >
        <button className='info-modal_button' onClick={toggleInfoVisibility}>
          {buttonText}
        </button>
        <h2 className='info-modal_header'>
          {header}
          <img alt='game logo' className='info-modal_icon' src={icon} />
        </h2>

        <ul className='info-modal_list'>{infoItemElements}</ul>
      </dialog>
    </React.Fragment>
  )
}

export const Info = connect(mapStateToProps, null, mergeProps)(_Info)
