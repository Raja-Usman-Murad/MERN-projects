import { Container, Grid} from '@chakra-ui/react'
import React from 'react'
import { PostCard1, PostCard2, PostCard3 } from '../components/PostCard'

const Home = () => {
  return (
   <>
    <Container maxWidth="container.xl">
    <Grid my="8" gap={4} gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))">
      <PostCard1/>
      <PostCard2 />
      <PostCard3 />
      

    </Grid>
    </Container>
   </>
  )
}

export default Home
