// this will carry the whole sections by calling the components one after the other as needed
'use client'
import { useEffect, useState } from 'react'
import { Header, Numbers, Services } from './components'
import LineStyle from './components/LineStyle'
import styles from './page.module.css'
import Image from 'next/image'
import MobileNav from './components/MobileNavigationBar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Industry from './components/Industry/IndustryContainer'
import Career from './components/career/Career'
import Footer from './components/footer/Footer'

export default function LandingPage () {
  useEffect(() => {
    AOS.init({ duration: 600, once: false })
    AOS.refresh()
  }, [])
  const [openMobile, setOpenMobile] = useState<boolean>(false)
  const closeMobile = () => setOpenMobile(false)
  const openMobileNav = () => setOpenMobile(true)
  // console.log(closeMobile)
  return (
    <>
      {openMobile && <MobileNav closeMobile={closeMobile} />}
      <main className={styles.page}>
        {/* hero section */}
        <section className={styles.hero} id='hero'>
          {/* header */}
          <div className={styles._header}>
            <Header openMobile={openMobileNav} />
          </div>
          <div className={styles.overlay}></div>
          {/* main-content */}

          <div className={styles.after_overlay}>
            <h1 data-aos='zoom-in' className={styles.big_intro_text}>
              THE FUTURE OF MOBILITY IS HERE
            </h1>
            <p
              data-aos='zoom-in'
              data-aos-delay='100'
              className={styles.intro_para}
            >
              Discover the safest self-driving experience with Autono.
            </p>
          </div>
        </section>

        {/* <section className={styles.empty}></section> */}
        {/* vision section */}
        <section className={styles.vision} id='about'>
          <div className={styles.col_1}>
            {/* line */}
            <LineStyle />
            <div className={styles.vision_content}>
              <h2 className={styles.content_head} data-aos='fade-in'>
                VISION
              </h2>
              <div>
                <p data-aos='fade-up'>
                  We’re Changing the Way the World Thinks About Cars
                </p>
                <p data-aos='fade-up'>
                  I&apos;m a paragraph. Click here to add your own text and edit me.
                  It&apos;s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. I&apos;m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </p>
              </div>
            </div>
          </div>
          {/* image */}
          <div className={styles.col_2} data-aos='slide-right'>
            <Image
              src='/car.avif'
              alt='a car'
              width={400}
              height={400}
              className={styles.flex_image}
            />
          </div>
        </section>

        <section className={styles.services} id='technology'>
          <div className={styles.service_col}>
            <div className={styles.service_line_container}>
              <span className={styles.line}></span>
              <span
                className={styles.line_child}
                data-aos='fade-up'
                data-aos-duration='400'
              ></span>
            </div>

            <div className={styles.services_main_content}>
              <h2 data-aos='fade-in'>SERVICES</h2>
              <p data-aos='fade-up' data-aos-delay='100'>
                We Deliver Exceptional Products and Services Around the World
              </p>
            </div>
          </div>
          <div>
            <Services />
          </div>
        </section>

        {/* why autono? */}
        <section
          className={styles.why_autono}
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <div className={styles.why_autono_content}>
            <div className={styles.autono_line_container}>
              <span className={styles.autono_line}></span>
              <span
                className={styles.autono_line_child}
                data-aos='fade-up'
              ></span>
            </div>
            <div>
              <h2 data-aos='fade-in'>WHY AUTONO</h2>
              <p className={styles.why_autono_content_intro} data-aos='fade-up'>
                A different approach,using a new method of manufacturing.
              </p>
              <p
                className={styles.why_autono_content_main_text}
                data-aos='fade-up'
              >
                I&apos;m a paragraph. Click here to add your own text and edit me.
                It&apos;s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I&apos;m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <button className='main_button'>Read More</button>
            </div>
          </div>
        </section>

        {/* autono in numbers */}
        <section className={styles.numbers}>
          <Numbers />
        </section>

        {/* industry */}
        <section className={styles.industry}>
          <Industry />
        </section>

        {/* Career */}
        <section className={styles.career} id='careers'>
          <Career />
        </section>

        <section className={styles.footer}>
          <Footer />
        </section>
      </main>
    </>
  )
}
