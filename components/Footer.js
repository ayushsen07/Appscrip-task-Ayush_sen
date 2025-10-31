import styles from "../styles/Footer.module.css"
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.newsletter}>
          <h2 className={styles.footerHeading}>BE THE FIRST TO KNOW</h2>
          <p className={styles.subtext}>Sign up for updates from mettä musë.</p>
          <div className={styles.subscribeRow}>
            <input className={styles.emailInput} type="email" placeholder="Enter your e-mail..." aria-label="Email" />
            <button className={styles.subscribeButton}>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contact}>
          <h2 className={styles.footerHeading}>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3 className={styles.subheading}>CURRENCY</h3>
          <p>🇺🇸 • USD</p>
          <small className={styles.muted}>Transactions will be completed in Euros and a currency reference is available on hover.</small>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <div>
         <img src="/images/footer_logo.svg" alt="Mettä Musë" className={styles.footerLogo} />
          <ul className={styles.footerLinks}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">Artisans</a></li>
            <li><a href="#">Boutiques</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">EU Compliances Docs</a></li>
          </ul>
        </div>

        <div>
          <h3 className={styles.footerHeading}>QUICK LINKS</h3>
          <ul className={styles.footerLinks}>
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">Join/Login as a Seller</a></li>
            <li><a href="#">Payment & Pricing</a></li>
            <li><a href="#">Return & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h3 className={styles.footerHeading}>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            <span className={styles.socialIcon}><FaInstagram size={18} /></span>
            <span className={styles.socialIcon}><FaLinkedin size={18} /></span>
          </div>
          <div className={styles.paymentIcons}>
            <img src="/images/footer_imgs/Google_Pay.svg" alt="Google Pay" className={styles.paymentMethodsImg} />
            <img src="/images/footer_imgs/MasterCard.svg" alt="MasterCard" className={styles.paymentMethodsImg} />
            
            <img src="/images/footer_imgs/Paypal.svg" alt="PayPal" className={styles.paymentMethodsImg} />
            <img src="/images/footer_imgs/Amex.svg" alt="American Express" className={styles.paymentMethodsImg} />
            <img src="/images/footer_imgs/Apple_Pay.svg" alt="Apple Pay" className={styles.paymentMethodsImg} />
            <img src="/images/footer_imgs/D_Pay.svg" alt="Shop Pay" className={styles.paymentMethodsImg} />
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  )
}


