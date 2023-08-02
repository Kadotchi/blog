import Container from 'components/Container'
import Hero from 'components/Hero'
import Meta from 'components/Meta'

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle={'ブログ'} />

      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  )
}
