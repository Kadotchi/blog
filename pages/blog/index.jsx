import { getPlaiceholder } from 'plaiceholder'

import { getAllPosts } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import { getImageBuffer } from 'lib/getImageBuffer'
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

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const imageBuffer = await getImageBuffer(post.eyecatch.url)
    const { base64 } = await getPlaiceholder(imageBuffer)
    post.eyecatch.blurDataURL = base64
  }

  return { props: { posts: posts } }
}
