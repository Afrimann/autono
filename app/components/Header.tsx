// this is the header component
'use client'
import styles from './components.module.css'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'

interface Props {
  openMobile: () => void
}
export default function Header ({ openMobile }: Props) {
  const [showHeader, setShowHeader] = useState(true)
  const [bgWhite, setBgWhite] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  // console.log(openMobile)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowHeader(false)
        if (currentScrollY < 100) {
          setBgWhite(true) // Show white bg for a short distance
        } else {
          setBgWhite(false) // Remove white bg after scrolling further
        }
      } else {
        // Scrolling up
        setShowHeader(true)
        if (currentScrollY > 50) {
          setBgWhite(true)
        } else {
          setBgWhite(false)
        }
      }

      if (currentScrollY === 0) {
        setBgWhite(false) // Reset at top
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`${styles.header} `}
      id=''
      style={{
        position: 'fixed',
        left: 0,
        top: showHeader ? 0 : '-80px',
        width: '100%',
        height: '80px',
        backgroundColor: bgWhite ? 'white' : '',
        transition: 'top 0.3s ease, background-color 0.3s ease',
        boxShadow: bgWhite ? '0px 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        zIndex: '20'
      }}
    >
      {/* CONTAINER */}
      <div style={{ display: `${!showHeader ? 'none' : ''}` }}>
        <span><a href="#hero">AUTONO</a></span>
        {/* nav-items */}
        <div>
          <ul>
            <li>
              <a href='#technology'>Technology</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#careers'>Careers</a>
            </li>
            <button className={`${styles.subs_btn} `}>Subscribe</button>
            <span className={styles.hamburger}>
              <FaBars
                style={{ fontSize: '20px', cursor: 'pointer' }}
                onClick={openMobile}
              />
            </span>
          </ul>
        </div>
      </div>
    </header>
  )
}
