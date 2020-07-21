import styled from 'styled-components'

export const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: black;
  }

  & > div {
    text-align: center;
  }
`

export const FAQListWrapper = styled.div`
  padding: 20px 10%;
  display: flex;
  flex-direction: column;
  text-align: center;

  .section {
    margin: 20px 0;
  }
`

export const Category = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  padding: 40px 0;
  border-right: ${({ theme }) => `solid ${theme.colors.silverDark} 1px`};
  border-top: ${({ theme }) => `solid ${theme.colors.silverDark} 1px`};
  border-bottom: ${({ theme }) => `solid ${theme.colors.silverDark} 3px`};
  font-size: 1.3em;

  &:hover {
    border-bottom: ${({ theme }) => `solid ${theme.colors.primaryDark} 3px`};
  }

  &:after {
  }
`
