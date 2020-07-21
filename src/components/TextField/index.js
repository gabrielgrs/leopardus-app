import styled from 'styled-components'
import { rgba } from 'polished'

const Wrapper = styled.input`
  -webkit-appearance: none;
  box-sizing: border-box;
  line-height: 1.3;
  font-size: 1.4rem;
  width: 100%;
  height: 47px;
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

const MultilineWrapper = styled.textarea`
  -webkit-appearance: none;
  box-sizing: border-box;
  line-height: 1.3;
  font-size: 1.4rem;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(218, 218, 218);
  border-image: initial;
  outline: none;
  border-radius: 5px;
  padding: 10px 8px 0;

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

function TextField({ multiline, label, name, ...rest }) {
  if (multiline) {
    return (
      <div>
        {label && <Label htmlFor={name}>{label}</Label>}
        <MultilineWrapper id={name} name={name} {...rest} />
      </div>
    )
  }
  return (
    <div>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Wrapper id={name} name={name} {...rest} />
    </div>
  )
}

export default TextField
