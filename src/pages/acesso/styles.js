import styled from 'styled-components'

// eslint-disable-next-line
export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`

export default () => null
