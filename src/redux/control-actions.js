import { SET_STATE } from './types'
import { addDot } from './dot-actions'
import { animateDots } from './animate-actions'
const DOT_ACCESSIBILITY = 'DOT_ACCESSIBILITY'

const addFocusStyleTag = () => {
  const css = `
    button:focus { outline: 0; } 
    img:focus { outline: 0; }`

  const style = document.createElement('style')
  style.type = 'text/css'
  style.id = DOT_ACCESSIBILITY
  style.appendChild(document.createTextNode(css))

  document.head.appendChild(style)
}

const removeFocusStyleTag = () => {
  const styleTag = document.getElementById(DOT_ACCESSIBILITY)
  styleTag && styleTag.parentNode.removeChild(styleTag)
}

export const toggleInfoVisibility = infoVisibility => ({
  type: SET_STATE,
  data: { infoVisibility: !infoVisibility }
})

export const setSpeed = speed => ({
  type: SET_STATE,
  data: { speed: speed }
})

export const toggleAccessibility = accessible => {
  const isAccessible = !accessible

  if (isAccessible) {
    removeFocusStyleTag()
  } else {
    addFocusStyleTag()
  }

  return {
    type: SET_STATE,
    data: { accessibile: isAccessible }
  }
}

export const toggleGameActiveState = () => (dispatch, getState) => {
  let {
    gameActive,
    addDotIntervalId,
    dotAnimationId,
    infoVisibility
  } = getState()

  if (!gameActive) {
    addDotIntervalId = setInterval(() => dispatch(addDot()), 1000)
    dispatch(animateDots())
    infoVisibility = false
  } else {
    clearInterval(addDotIntervalId)
    cancelAnimationFrame(dotAnimationId)
  }

  return dispatch({
    type: SET_STATE,
    data: {
      addDotIntervalId,
      infoVisibility,
      gameActive: !gameActive
    }
  })
}
