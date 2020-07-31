import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px 15%;
`

export const PostCard = styled.div`
  cursor: pointer;
  position: relative;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-size: auto;
  object-fit: cover;
  padding: 20px 10px;
  color: ${({ theme }) => theme.colors.white};
  height: 300px;
  border-radius: 8px;
`

export const PostTitle = styled.div`
  margin-bottom: 20px;
  font-size: 1.2em;
  font-weight: 600;
`

export const PostAuthor = styled.div`
  span {
    font-weight: 600;
  }
`

export const PostCategory = styled.div`
  font-weight: 600;
  position: absolute;
  bottom: 20px;
  text-transform: uppercase;
  font-size: 0.7em;
`
