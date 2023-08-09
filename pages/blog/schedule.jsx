import Image from 'next/legacy/image'

import { getPostBySlug } from 'lib/api'
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

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
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
      </article>
    </Container>
  )
}

export async function getStaticProps() {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  const description = extractText(post.content)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
      description: description,
    },
  }
}
