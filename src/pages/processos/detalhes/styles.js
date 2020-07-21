import styled from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.div`
  padding: 50px 5%;

  .icon {
    cursor: pointer;
    opacity: 0.5;
    font-size: 3em;

    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const Card = styled.div`
  border: ${({ theme }) => `solid ${theme.colors.silver} 2px`};
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: ${({ theme, disabled }) =>
    !disabled && `0 0 10px ${rgba(theme.colors.primary, 0.5)}`};

  &:hover {
    border: ${({ theme }) => `solid ${theme.colors.primary} 2px`};
  }
`

// TODO: improve build to ignore styles.js
export default () => null
