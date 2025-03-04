'use client'

import styles from './components.module.css'
import { FaTimes } from 'react-icons/fa'
interface Props {
  openMobile?: () => void
  closeMobile: () => void
}
export default function MobileNav ({ closeMobile }: Props) {
  return (
    <nav className={styles.nav} data-aos='slide-left' data-aos-duration='1000'>
      <FaTimes
        style={{
          fontSize: '20px',
          position: 'absolute',
          top: '30px',
          right: '20px'
        }}
        onClick={closeMobile}
      />
      <span
        style={{
          position: 'absolute',
          top: '30px',
          left: '20px',
          fontSize: '20px',
          letterSpacing: '2px'
        }}
        onClick={closeMobile}
      >
        <a href="#hero">AUTONO</a>
      </span>

      <ul>
        <li onClick={closeMobile}><a href="#technology">Technology</a></li>
        <li onClick={closeMobile}><a href="#about">About</a></li>
        <li onClick={closeMobile}><a href="#careers">Careers</a></li>
        <span>Get Started</span>
      </ul>
    </nav>
  )
}
