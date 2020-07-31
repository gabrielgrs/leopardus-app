// import { Row, Column, TextField, Button } from 'components'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Heading, Row, Column } from 'components'
import {
  Wrapper,
  PostCard,
  PostTitle,
  PostAuthor,
  PostCategory
} from './styles'
import postsMock from './mock'

function Blog() {
  const [posts, setPosts] = useState([])

  const { push } = useRouter()

  const onGetPosts = () => setPosts(postsMock)

  useEffect(() => {
    onGetPosts()
  }, [])

  return (
    <Wrapper>
      <Heading title="Blog" />
      <Row>
        {posts.map((p) => (
          <Column size={4}>
            <PostCard
              onClick={() => push(`/blog/${p.id}`)}
              backgroundImage={p.banner}
            >
              <PostTitle>{p.title}</PostTitle>
              <PostAuthor>
                por <span>{p.author}</span> há 3 dias
              </PostAuthor>
              <PostCategory>{p.category}</PostCategory>
            </PostCard>
          </Column>
        ))}
      </Row>
    </Wrapper>
  )
}

export default Blog
