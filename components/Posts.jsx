import styles from 'styles/Posts.module.css'
import Link from 'next/link'

export default function Posts({ posts }) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug }) => (
        <article className={styles.posts} key={slug}>
          <Link href={`slug/${slug}`}>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}
