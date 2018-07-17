import * as type from './types'
import { config } from '../config'

const defaultState = {
  config,
  addDotIntervalId: undefined,
  dotAnimationId: undefined,
  gameActive: false,
  dots: [],
  score: 0,
  animatingScore: 0,
  speed: config.gameSpeed.default,
  infoVisibility: false,
  accessibile: true
}

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case type.SET_STATE:
      return {
        ...state,
        ...action.data
      }

    default:
      return {
        ...state,
        ...defaultState
      }
  }
}
