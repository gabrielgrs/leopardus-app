import styled from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.div`
  animation-duration: 1s;
  padding: 50px 5%;

  .icon {
    cursor: pointer;
    opacity: 0.5;

    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Status = styled.div`
  cursor: pointer;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.primaryLight : theme.colors.whiteDark};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : theme.colors.black};
  padding: 5px 20px;
  border-radius: 8px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: ${({ theme }) => rgba(theme.colors.primary, 0.8)};
    color: ${({ theme }) => theme.colors.white};
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

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;

  & .icon {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.blackLight};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const CardBody = styled.div`
  display: flex;
  padding: 10px 5px;

  & div {
    padding-right: 5px;
  }
`

export const CardFooter = styled.div`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.silverDark};
`

// TODO: improve build to ignore styles.js
export default () => null
