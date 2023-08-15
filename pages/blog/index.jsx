import { getAllPosts } from 'lib/api'
import Container from 'components/Container'
import Hero from 'components/Hero'
import Meta from 'components/Meta'

export default function Blog({ posts }) {
  console.log(posts)
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />

      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return { props: { posts: posts } }
}
