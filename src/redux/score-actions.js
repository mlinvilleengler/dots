import { SET_STATE } from './types'

const _setScore = score => ({
  type: SET_STATE,
  data: {
    score
  }
})

const setAnimatingScore = animatingScore => ({
  type: SET_STATE,
  data: {
    animatingScore
  }
})

const setAnimatingScoreRecursively = () => (dispatch, getState) => {
  const { animatingScore, score } = getState()
  if (animatingScore >= score) {
    return
  }

  dispatch(setAnimatingScore(animatingScore + 1))
  return requestAnimationFrame(() => dispatch(setAnimatingScoreRecursively()))
}

export const setScore = points => (dispatch, getState) => {
  const { score } = getState()
  dispatch(_setScore(score + points))
  return requestAnimationFrame(() => dispatch(setAnimatingScoreRecursively()))
}
