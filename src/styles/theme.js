import { lighten, darken } from 'polished'

const baseColors = {
  primary: '#8a05be',
  secondary: '#15dcf4',
  white: '#ffffff',
  black: '#282828',
  silver: '#dadada', // #c0c0c0 || #d9d9d9
  success: '#5cf590',
  danger: '#ff4141',
  warning: '#ff9141'
}

export const colors = Object.keys(baseColors).reduce((arr, curr) => {
  return {
    ...arr,
    [curr]: baseColors[curr],
    [`${curr}Light`]: lighten(0.05, baseColors[curr]),
    [`${curr}Dark`]: darken(0.05, baseColors[curr])
  }
}, {})

export const boxShadow = {}
