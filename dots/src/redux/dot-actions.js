import uuid from 'uuid/v4'
import { SET_STATE } from './types'
import { setScore } from './score-actions'

export const addDot = () => (dispatch, getState) => {
  const { max, min } = getState().config.dots.size
  const id = uuid()
  const size = Math.floor(Math.random() * (max - min) + min)
  const location = Math.floor(Math.random() * (100 - size))
  const transform = Math.floor(Math.random() * 10) <= 4 ? -1 : 1

  const { dots } = getState()
  const dot = {
    id,
    size,
    location,
    transform,
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
    const calculatedPoints = Math.floor(20 / size * 10 * speed)
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
