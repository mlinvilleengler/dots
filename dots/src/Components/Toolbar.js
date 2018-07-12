import React from 'react'
import { connect } from 'react-redux'
import { toggleGameActiveState } from '../redux/control-actions'
import Slider from './Slider'
import './Toolbar.css'

const mapStateToProps = ({ animatingScore, gameActive }) => ({
  animatingScore,
  gameActive
})

const mapDispatchToProps = dispatch => ({
  toggleGameState: () => dispatch(toggleGameActiveState())
})

export const Toolbar = ({ animatingScore, gameActive, toggleGameState }) => {
  const buttonText = gameActive ? 'PAUSE' : 'START'

  return (
    <nav>
      <section className='toolbar-section'>
        <h3>AWESOME COW</h3>
        <h3 role={'text'} aria-label='total game points'>{animatingScore}</h3>
        <button onClick={toggleGameState}>
          {buttonText}
        </button>
      </section>
      <Slider />
    </nav>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
