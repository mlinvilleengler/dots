import React, { Component } from 'react'
import './Landscape.css'
import uuid from 'uuid/v4'

class Landscape extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hills: new Array(25).fill(0).map(() => {
        const left = Math.floor(Math.random() * 140 - 40)
        const size = Math.floor(Math.random() * 100)
        const zIndex = Math.floor(Math.random() * 10)
        const colors = new Array(3)
          .fill(0)
          .map(() => Math.floor(Math.random() * 255))
        const backgroundColor = `rgb(${colors.join()})`
        const borderRadius = Math.floor(Math.random() * 7 + 2)
        const opacity = Math.random() + 0.75

        const hill = (
          <div
            key={uuid()}
            role='presentation'
            className='hill'
            style={{
              zIndex,
              backgroundColor,
              opacity,
              borderRadius: borderRadius + '%',
              left: left + 'vw',
              bottom: size * -0.75 + 'vh',
              width: size + 'vw',
              height: size * 0.75 + 'vh'
            }}
          />
        )
        return hill
      })
    }
  }

  render () {
    return (
      <React.Fragment>
        {this.state.hills}
      </React.Fragment>
    )
  }
}

export default Landscape
