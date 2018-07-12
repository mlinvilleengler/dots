import * as type from './types'

const defaultState = {
  addDotIntervalId: undefined,
  dotAnimationId: undefined,
  gameActive: false,
  dots: [],
  score: 0,
  animatingScore: 0,
  speed: 1 / 10
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

export default reducer
