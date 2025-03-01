// this is the header component
'use client'
import styles from './components.module.css'
import { useEffect, useState } from 'react'

export default function Header () {
  const [scrolled, setScrolled] = useState<boolean>(false)
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50) // Adjust the scroll position threshold as needed
    }

    window.addEventListener('scroll', handleScroll)

    // Initial check in case the user is already scrolled past the threshold when the component mounts
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      id='header'
    >
      {/* CONTAINER */}
      <div>
        <span>AUTONO</span>
        {/* nav-items */}
        <div>
          <ul>
            <li>
              <a href='#'>Technology</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
            <button className={`${styles.subs_btn} `}>Subscribe</button>
          </ul>
        </div>
      </div>
    </header>
  )
}
