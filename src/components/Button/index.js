import styled from 'styled-components'
import { rgba } from 'polished'

const Wrapper = styled.button`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  line-height: 1.3;
  height: 50px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  white-space: nowrap;
  font-size: 14px;
  background: ${({ theme, disabled, backgroundColor }) =>
    disabled
      ? theme.colors.silver
      : theme.colors[backgroundColor || 'primary']};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme, disabled, backgroundColor }) =>
    !disabled &&
    `0 0 10px ${rgba(theme.colors[backgroundColor || 'primary'], 0.5)}`};
  outline: none;
  text-decoration: none;
  border-radius: 5px;
  width: ${({ width }) => width};
  min-width: 150px;
  padding: 0 15px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  transition: all 0.3s ease 0s, transform 0.5s ease 0s;

  float: ${({ float }) => float};

  &:hover {
    box-shadow: ${({ theme, disabled }) =>
      !disabled && `0 0 20px ${rgba(theme.colors.primary, 0.7)}`};
  }
`

function Button({ children, onClick, ...rest }) {
  return (
    <Wrapper {...rest} onClick={onClick}>
      {children}
    </Wrapper>
  )
}

export default Button
