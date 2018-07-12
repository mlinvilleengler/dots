import { SET_STATE } from './types'

const animateDotsRecursively = (dispatch, getState) => {
  const { speed, gameActive, dots } = getState()
  let newDots = []

  dots.forEach(dot => {
    let newDot = { ...dot }
    if (dot.verticalLocation > 100 + dot.size) {
      /* don't push to ne dot array */
      return
    }
    if (gameActive) {
      newDot.verticalLocation = dot.verticalLocation + speed
    }
    newDots.push(newDot)
  })

  dispatch({
    type: SET_STATE,
    data: {
      dotAnimationId,
      dots: newDots
    }
  })

  const dotAnimationId = requestAnimationFrame(() =>
    animateDotsRecursively(dispatch, getState)
  )
}

export const animateDots = () => (dispatch, getState) => {
  const dotAnimationId = requestAnimationFrame(() =>
    animateDotsRecursively(dispatch, getState)
  )

  return dispatch({
    type: SET_STATE,
    data: {
      dotAnimationId
    }
  })
}
