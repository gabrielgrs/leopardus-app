import React from 'react'
import { StyledColumn } from './styles'

function Column({ size, children, ...rest }) {
  return (
    <StyledColumn size={size} {...rest}>
      {children}
    </StyledColumn>
  )
}

export default Column
