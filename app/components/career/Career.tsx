import styles from './career.module.css'
import CareerCarousel from './CareerCarousel'
export default function Career () {
  return (
    <div className={styles.career}>
      <div className={styles.career_container}>
        <div className={styles.career_content_box}>
          <div className={styles.line_container}>
            <span className={styles.line}></span>
            <span
              className={styles.line_child}
              data-aos='fade-up'
              data-aos-duration='1000'
            ></span>
          </div>
          <div className={styles.career_content}>
            <h2 data-aos='fade-in'>CAREER</h2>
            <p data-aos='fade-up' data-aos-delay='200'>
              We’re looking for innovative talent to join our team. See all
              positions and submit your CV.
            </p>
            <button className='main_button'>Openings</button>
          </div>
        </div>
        <div className={styles.career_carousel}>
              <CareerCarousel />
        </div>
      </div>
    </div>
  )
}
