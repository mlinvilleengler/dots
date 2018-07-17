import React from 'react'
import cow from './assets/cow.png'

export const config = Object.freeze({
  content: {
    title: 'AWESOME COW',
    toolbar: {
      header: 'AWESOME COW',
      startText: 'START',
      pauseText: 'PAUSE',
      sliderLabel: 'SPEED',
      switchLabel: 'ACCESSIBILE',
      expandIcon: <i className='material-icons'>info</i>,
      minimizeIcon: <i className='material-icons'>expand_less</i>
    },
    info: {
      header: 'AWESOME COW',
      mainIcon: cow,
      exitIcon: <i className='material-icons'>close</i>,
      infoItems: [
        'Catch the cows by clicking on them to earn points.',
        'Smaller cows are worth more.',
        'Increase the speed of the game for a challenge and to earn more points per cow caught.'
      ]
    }
  },
  gameSpeed: {
    min: 1,
    max: 50,
    default: 10,
    vhToSpeedRatio: 1 / 15
  },
  dots: {
    mainIcon: cow,
    size: {
      min: 1,
      max: 25,
      mobileIncrease: 5
    }
  },
  landscape: {
    hills: {
      quantity: 50,
      size: {
        min: 1,
        max: 100
      }
    }
  }
})
