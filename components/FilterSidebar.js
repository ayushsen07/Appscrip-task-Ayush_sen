"use client"

import { useEffect, useState } from "react"
import styles from "../styles/FilterSidebar.module.css"

const SECTIONS = [
  { key: "idealFor", label: "IDEAL FOR" },
  { key: "occasion", label: "OCCASION" },
  { key: "work", label: "WORK" },
  { key: "fabric", label: "FABRIC" },
  { key: "segment", label: "SEGMENT" },
  { key: "suitableFor", label: "SUITABLE FOR" },
  { key: "rawMaterials", label: "RAW MATERIALS" },
  { key: "pattern", label: "PATTERN" },
]

export default function FilterSidebar({ visible = true }) {
  const [customizable, setCustomizable] = useState(false)
  const [open, setOpen] = useState(() =>
    Object.fromEntries(SECTIONS.map(s => [s.key, false]))
  )
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // If mobile, do not render the sidebar at all per requirement
  if (isMobile) return null
  if (!visible) return null

  return (
    <aside className={styles.sidebar} aria-label="Filters">
      <div className={styles.section}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={customizable}
            onChange={e => setCustomizable(e.target.checked)}
          />
          <span>CUSTOMIZABLE</span>
        </label>
      </div>

      {SECTIONS.map(section => (
        <div key={section.key} className={styles.filterItem}>
          <div
            className={styles.filterHeader}
            role="button"
            tabIndex={0}
            aria-expanded={open[section.key]}
            onClick={() => setOpen(prev => ({ ...prev, [section.key]: !prev[section.key] }))}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(prev => ({ ...prev, [section.key]: !prev[section.key] })) } }}
          >
            <span className={styles.filterLabel}>{section.label}</span>
            <span className={styles.filterArrow}>▼</span>
          </div>

          <span className={styles.filterValue}>All</span>

          {open[section.key] && (
            <div className={styles.sectionBody}>
              <label className={styles.option}><input type="checkbox" /> Option A</label>
              <label className={styles.option}><input type="checkbox" /> Option B</label>
              <label className={styles.option}><input type="checkbox" /> Option C</label>
            </div>
          )}
        </div>
      ))}
    </aside>
  )
}

function ChevronIcon({ open }) {
  return (
    <svg className={open ? styles.chevronOpen : styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}


