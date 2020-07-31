import styled from 'styled-components'
import { rgba } from 'polished'

const Wrapper = styled.select`
  -webkit-appearance: none;
  box-sizing: border-box;
  line-height: 1.3;
  width: 100%;
  height: ${({ small }) => (small ? '27px' : '47px')};
  font-size: ${({ small }) => (small ? '1rem' : '1.4rem')};
  border-width: 1px;
  border-style: solid;
  border-color: rgb(218, 218, 218);
  border-image: initial;
  outline: none;
  border-radius: 5px;
  padding: 0 8px;

  &:focus {
    border: ${({ theme }) => `solid ${theme.colors.primary} 2px`};
    box-shadow: ${({ theme }) => `0 0 10px ${rgba(theme.colors.primary, 0.5)}`};
  }
`

const Label = styled.label`
  font-size: 1.3em;
  padding: 3px 5px;
  color: ${({ theme }) => theme.colors.blackLight};
`

function TextField({ label, name, options, ...rest }) {
  return (
    <div>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Wrapper id={name} name={name} {...rest}>
        {options.map((o) => (
          <option key={o.value || o.text} value={o.value}>
            {o.text}
          </option>
        ))}
      </Wrapper>
    </div>
  )
}

export default TextField
