import uuid from 'uuid/v4'
import { SET_STATE } from './types'
import { setScore } from './score-actions'

export const addDot = () => (dispatch, getState) => {
  const id = uuid()
  const size = Math.floor(Math.random() * 19 + 1)
  const location = Math.floor(Math.random() * (100 - size))

  const { dots } = getState()
  const dot = {
    id,
    size,
    location,
    verticalLocation: size * -1
  }

  return dispatch({
    type: SET_STATE,
    data: {
      dots: [...dots, dot]
    }
  })
}

export const removeDot = (index, size = null) => (dispatch, getState) => {
  const { speed, dots } = getState()

  if (size) {
    const calculatedPoints = Math.floor(20 / size * 100 * speed)
    dispatch(setScore(calculatedPoints))
  }

  const newDots = [...dots]
  newDots.splice(index, 1)

  return dispatch({
    type: SET_STATE,
    data: {
      dots: newDots
    }
  })
}
