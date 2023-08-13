/**
 * 前の記事と次の記事を配列で返却
 * @param {*} allSlugs すべての記事のタイトルとスラッグを含む配列
 * @param {*} currentSlug 現在の記事のスラッグ
 * @returns [前の記事, 次の記事]
 */
export function prevNextPost(allSlugs, currentSlug) {
  const numberOfPosts = allSlugs.length

  const index = allSlugs.findIndex(
    ({ slug }) => slug === currentSlug,
  )

  /** 前の記事のデータ */
  const prevPost = index + 1 === numberOfPosts ? { title: '', slug: '' } : allSlugs[index + 1]

  /** 次の記事のデータ */
  const nextPost = index === 0 ? { title: '', slug: '' } : allSlugs[index - 1]

  return [prevPost, nextPost]
}