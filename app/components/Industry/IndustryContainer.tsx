'use client'
import styles from './industry.module.css'
import Image from 'next/image'
export default function Industry () {
  return (
    <div className={styles.industry}>
      <div className={styles.col_1}>
        <div className={styles.line_container}>
          <span className={styles.line} ></span>
          <span className={styles.line_child} data-aos='fade-up' data-aos-duration='1000'></span>
        </div>

        {/* content */}
        <div className={styles.content}>
          <h2 data-aos='fade-in'>INDUSTRY</h2>

          <span data-aos='fade-up'>Our <span  style={{paddingTop:'16px'}}>Partners</span></span>
          <p data-aos='fade-up'>
            Click here to add your own content and customize the text. This is a
            great place to tell a story about your company and let your users
            know a little more about the company's history, the team's
            background, or any other information you'd like to share. Just click
            "Edit Text" to get started.
          </p>
        </div>
      </div>

      {/* images */}
      <div className={styles.col_2}>
        <div className={styles.images_display}>
          <div >
            <Image 
              src='/transport.avif'
              alt='transport'
              width={150}
              height={150}
              className={styles.image}
              data-aos='zoom-in' data-aos-duration='1700' data-aos-delay='0'
            />
            <span>GENERAL TRANSPORT</span>
          </div>
          <div >
             <Image 
              src='/software.avif'
              alt='software'
              width={150}
              height={150}
              className={styles.image}
              data-aos='zoom-out' data-aos-duration='1800' data-aos-delay='100'
            />
            <span>IDI SOFTWARE</span>
          </div>
          <div >
             <Image 
              src='/imogen.avif'
              alt='imogen cars'
              width={150}
              height={150}
              className={styles.image}
              data-aos='zoom-in' data-aos-duration='1900' data-aos-delay='200'
            />
            <span>IMOGEN CARS</span>
          </div>
          <div >
             <Image 
              src='/tri-nex.avif'
              alt='tri-nex'
              width={150}
              height={150}
              className={styles.image}
              data-aos='zoom-out' data-aos-duration='2000' data-aos-delay='300'
            />
            <span>TRI-NEX</span>
          </div>
        </div>
      </div>
    </div>
  )
}
