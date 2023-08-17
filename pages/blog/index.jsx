import { getAllPosts } from 'lib/api'
import Container from 'components/Container'
import Hero from 'components/Hero'
import Meta from 'components/Meta'
import Posts from 'components/Posts'

export default function Blog({ posts }) {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />

      <Hero title="Blog" subtitle="Recent Posts" />

      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return { props: { posts: posts } }
}
