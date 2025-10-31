"use client"

import { useState } from "react"
import FilterSidebar from "./FilterSidebar"
import ProductCard from "./ProductCard"
import styles from "../styles/ProductGrid.module.css"

export default function ProductGrid({ products = [] }) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <section className={styles.mainContent}>
      {/* Control bar */}
      <div className={styles.controlBar}>
        <div className={styles.leftControls}>
          <span className={styles.countText}>3425 ITEMS</span>
          <button
            className={styles.filterToggle}
            onClick={() => setShowFilters(prev => !prev)}
          >
            {showFilters ? "< HIDE FILTER" : "< SHOW FILTER"}
          </button>
        </div>
        <div className={styles.rightControls}>
          <label className={styles.sortLabel}>
            <span className={styles.sortText}>RECOMMENDED</span>
            <ChevronDown />
          </label>
        </div>
      </div>

      {/* Content wrapper */}
      <div className={styles.contentWrapper}>
        <FilterSidebar visible={showFilters || isDesktop()} onClose={() => setShowFilters(false)} />

        <div className={styles.grid}>
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function isDesktop() {
  if (typeof window === "undefined") return false
  return window.innerWidth >= 1024
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}



