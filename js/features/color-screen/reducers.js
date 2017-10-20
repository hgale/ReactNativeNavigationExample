import t from './actionTypes'
import { miscColors } from './colors'

function generateRandomColors () {
  let randomColors = []
  let maxVal = miscColors.length-1
  let minVal = 0
  Array(3).fill().map((item, index) => {
    let randomValue = Math.round((Math.random() * (maxVal - minVal) + minVal))
    randomColors.push(miscColors[randomValue])
  })
  return randomColors
}

const defaultState = {
  colors: generateRandomColors ()
}

const colorScreen = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return Object.assign({}, defaultState)
    case t.UPDATE_COLORS:
      return Object.assign({}, state, {
        colors: generateRandomColors ()
      })
    default:
      return state
  }
}

export default colorScreen
