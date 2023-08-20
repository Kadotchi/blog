import { getPlaiceholder } from 'plaiceholder'

import Container from 'components/Container'
import Hero from 'components/Hero'
import Meta from 'components/Meta'
import Posts from 'components/Posts'
import { getAllPosts } from 'lib/api'
import { getImageBuffer } from 'lib/getImageBuffer'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'
import Pagination from 'components/Pagination'

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />

      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />

      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)

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
