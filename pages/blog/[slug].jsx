import Image from 'next/legacy/image'
import { getPlaiceholder } from 'plaiceholder'

import { getPostBySlug, getAllSlugs } from 'lib/api'
import Container from 'components/Container'
import PostHeader from 'components/Post-Header'
import PostBody from 'components/Post-Body'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from 'components/Two-Column'
import ConvertBody from 'components/Convert-Body'
import PostCategories from 'components/Post-Categories'
import { extractText } from 'lib/extract-text'
import Meta from 'components/Meta'
import Pagination from 'components/Pagination'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'
import { getImageBuffer } from 'lib/getImageBuffer'
import { prevNextPost } from 'lib/prev-next-post'

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}) {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />

        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>

        <Pagination
          prevText={prevPost.title}
          prevUrl={prevPost.slug}
          nextText={nextPost.title}
          nextUrl={nextPost.slug}
        />
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()

  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug

  const post = await getPostBySlug(slug)

  const description = extractText(post.content)

  const eyecatch = post.eyecatch ?? eyecatchLocal

  const imageBuffer = await getImageBuffer(eyecatch.url)
  const { base64 } = await getPlaiceholder(imageBuffer)
  eyecatch.blurDataURL = base64

  const allSlugs = await getAllSlugs()
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  }
}
