"use client"

import styles from "../styles/Header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBanner} role="region" aria-label="Announcements">
        <ul className={styles.bannerList}>
          <li className={styles.bannerItem}><GiftIcon /> <span>Best quality</span></li>
          <li className={styles.bannerItem}><GiftIcon /> <span>Exciting Offers</span></li>
          <li className={styles.bannerItem}><GiftIcon /> <span>Best deals</span></li>
        </ul>
      </div>

      <div className={styles.topBar}>
        <div className={styles.leftCluster}>
          <a href="#" aria-label="Home" className={styles.brandLink}>
            <img src="/images/logo.svg" alt="Brand" className={styles.brandImg} />
          </a>
         
        </div>

        <div className={styles.logo}>
          <img src="/images/Beta_logo.svg" alt="Mettä Musë" className={styles.centerLogoImg} />
        </div>

        <div className={styles.rightControls}>
          <button aria-label="Search" className={styles.iconBtn}><SearchIcon /></button>
          <button aria-label="Wishlist" className={`${styles.iconBtn} ${styles.hideOnMobile}`}><HeartIcon /></button>
          <button aria-label="Bag" className={styles.iconBtn}><BagIcon /></button>
          <button aria-label="Profile" className={`${styles.iconBtn} ${styles.hideOnMobile}`}><UserIcon /></button>
          <div className={styles.langSelect}><span>ENG</span><ChevronDownIcon /></div>
        </div>
      </div>

      <nav aria-label="Primary" className={styles.nav}>
        <ul className={styles.menuList}>
          <li><a href="#" className={styles.menuLink}>SHOP</a></li>
          <li><a href="#" className={styles.menuLink}>SKILLS</a></li>
          <li><a href="#" className={styles.menuLink}>STORIES</a></li>
          <li><a href="#" className={styles.menuLink}>ABOUT</a></li>
          <li><a href="#" className={styles.menuLink}>CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <line x1="16.65" y1="16.65" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 21s-7-4.438-9-8.5C1.5 9.5 3.5 6 7 6c2.063 0 3.5 1.5 5 3 1.5-1.5 2.938-3 5-3 3.5 0 5.5 3.5 4 6.5-2 4.062-9 8.5-9 8.5z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 8h18v4H3V8zm2 4v8h14v-8" stroke="#E94560" strokeWidth="2" fill="none" />
      <path d="M12 8v12" stroke="#E94560" strokeWidth="2" />
      <path d="M9 6a2 2 0 1 1 4 0v2H9V6zm4 0a2 2 0 1 1 4 0v2h-4V6z" stroke="#E94560" strokeWidth="2" fill="none"/>
    </svg>
  )
}

export default Header



