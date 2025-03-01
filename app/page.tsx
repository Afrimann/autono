// this will carry the whole sections by calling the components one after the other as needed
import { Header, Numbers, Services } from './components'
import LineStyle from './components/LineStyle'
import styles from './page.module.css'
import Image from 'next/image'
export default function LandingPage () {
  return (
    <main className={styles.page}>
      {/* hero section */}
      <section className={styles.hero}>
        {/* header */}
        <div className={styles._header}>
          <Header />
        </div>
        <div className={styles.overlay}></div>
        {/* main-content */}

        <div className={styles.after_overlay}>
          <h1 className={styles.big_intro_text}>
            THE FUTURE OF MOBILITY IS HERE
          </h1>
          <p className={styles.intro_para}>
            Discover the safest self-driving experience with Autono.
          </p>
        </div>
      </section>

      <section className={styles.empty}></section>
      {/* vision section */}
      <section className={styles.vision}>
        <div className={styles.col_1}>
          {/* line */}
          <LineStyle />
          <div className={styles.vision_content}>
            <h2 className={styles.content_head}>VISION</h2>
            <div>
              <p>We’re Changing the Way the World Thinks About Cars</p>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
          </div>
        </div>
        {/* image */}
        <div className={styles.col_2}>
          <Image
            src='/car.avif'
            alt='a car'
            width={400}
            height={400}
            className={styles.flex_image}
          />
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.service_col}>
          <div className={styles.service_line_container}>
            <span className={styles.line}></span>
            <span className={styles.line_child}></span>
          </div>

          <div className={styles.services_main_content}>
            <h2>SERVICES</h2>
            <p>We Deliver Exceptional Products and Services Around the World</p>
          </div>
        </div>
        <div>
          <Services />
        </div>
      </section>

      {/* why autono? */}
      <section className={styles.why_autono}>
        <div className={styles.why_autono_content}>
          <div className={styles.autono_line_container}>
            <span className={styles.autono_line}></span>
            <span className={styles.autono_line_child}></span>
          </div>
          <div>
            <h2>WHY AUTONO</h2>
            <p className={styles.why_autono_content_intro}>
              A different approach,using a new method of manufacturing.
            </p>
            <p className={styles.why_autono_content_main_text}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <button className='main_button'>Read More</button>
          </div>
        </div>
      </section>

      {/* autono in numbers */}
      <section className={styles.numbers}>
        <Numbers />
      </section>
    </main>
  )
}
