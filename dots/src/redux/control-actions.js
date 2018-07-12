import { SET_STATE } from './types'
import { addDot } from './dot-actions'
import { animateDots } from './animate-actions'

export const setSpeed = speed => ({
  type: SET_STATE,
  data: { speed: speed / 10 }
})

export const toggleGameActiveState = () => (dispatch, getState) => {
  let { gameActive, addDotIntervalId, dotAnimationId } = getState()

  if (!gameActive) {
    addDotIntervalId = setInterval(() => dispatch(addDot()), 1000)
    dispatch(animateDots())
  } else {
    clearInterval(addDotIntervalId)
    cancelAnimationFrame(dotAnimationId)
  }

  return dispatch({
    type: SET_STATE,
    data: {
      addDotIntervalId,
      gameActive: !gameActive
    }
  })
}
