"use client"

import styles from "../styles/ProductCard.module.css"

export default function ProductCard({ product }) {
  const { image, title, inStock = true } = product
  // console.log("title si",title);
  

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {!inStock && <span className={styles.badge}>OUT OF STOCK</span>}
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.info}>
        <p className={styles.name}>{title}</p>
        <p className={styles.priceHint}>Sign in or Create an account to see pricing</p>
      </div>

      <button className={styles.wishlistBtn} aria-label="Add to wishlist">
        <HeartIcon />
      </button>
    </article>
  )
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 21s-7-4.438-9-8.5C1.5 9.5 3.5 6 7 6c2.063 0 3.5 1.5 5 3 1.5-1.5 2.938-3 5-3 3.5 0 5.5 3.5 4 6.5-2 4.062-9 8.5-9 8.5z" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}



