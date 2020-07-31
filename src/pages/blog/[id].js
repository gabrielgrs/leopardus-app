import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { Row, Column } from 'components'
import { DetailsLoader } from 'components/Loaders'
import { Wrapper } from './styles'

import mock from './mock'

function Post() {
  const { query } = useRouter()

  const [loading, setLoading] = useState(false)
  const [selectedPost, setSelectedPost] = useState(undefined)

  const onGetPost = useCallback(async (id) => {
    setLoading(true)
    const data = mock.find((x) => String(x.id) === String(id))
    setSelectedPost(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (query.id) {
      onGetPost(query.id)
    }
  }, [query.id, onGetPost])

  if (loading || !selectedPost)
    return (
      <Wrapper>
        <DetailsLoader />
      </Wrapper>
    )

  return (
    <Wrapper>
      <Row>
        <Column size={2}>{selectedPost.title}</Column>
        <Column size={7}>
          <img
            width="100%"
            src={selectedPost.banner}
            alt={`Banner de ${selectedPost.title}`}
          />
        </Column>
      </Row>
    </Wrapper>
  )
}

export default Post
