import React from 'react'
import { connect } from 'react-redux'
import { Dot } from './components/Dot'
import { Toolbar } from './components/Toolbar'
import { Landscape } from './components/Landscape'
import { Info } from './components/Info'

const mapStateToProps = ({ dots, config }) => ({
  dots,
  landscapeOptions: config.landscape.hills
})

const _App = ({ dots, landscapeOptions }) => {
  const renderDots = () =>
    dots.map((dot, index) => <Dot index={index} key={dot.id} {...dot} />)

  return (
    <React.Fragment>
      <Toolbar />
      {renderDots()}
      <Landscape
        quantity={landscapeOptions.quantity}
        size={landscapeOptions.size}
      />
      <Info />
    </React.Fragment>
  )
}

export const App = connect(mapStateToProps)(_App)
