import React from 'react'
import { connect } from 'react-redux'
import Dot from './components/Dot'
import Toolbar from './components/Toolbar'
import Landscape from './components/Landscape'

const mapStateToProps = ({ dots }) => ({ dots })

export const App = ({ dots }) => {
  const renderDots = () =>
    dots.map((dot, index) => <Dot index={index} key={dot.id} {...dot} />)

  return (
    <React.Fragment>
      <Toolbar />
      {renderDots()}
      <Landscape />
    </React.Fragment>
  )
}

export default connect(mapStateToProps)(App)
