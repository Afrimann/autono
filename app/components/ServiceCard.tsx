// card for service list
'use client'
import { useEffect } from 'react'
import styles from './components.module.css'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface ServiceCardProps {
  title: string
  image: string
  para: string
  btnText: string
}
export default function ServiceCard ({
  title,
  btnText,
  image,
  para
}: ServiceCardProps) {
  useEffect(() => {
    AOS.init({ duration: 600, once: false })
  }, [])
  return (
    //     <div className={styles.service_card}
    //     >
    <>
      <div className={styles.service_card_content}>
        <h2 data-aos='fade-up' className={styles.service_card_content_head}>{title}</h2>
        <p data-aos='fade-up' className={styles.service_card_content_para}>{para}</p>
        <button>{btnText}</button>
      </div>
      <div className={styles.service_card_image_container} data-aos='slide-right' data-aelay='200'>
        <Image
          src={image}
          alt='car'
          width={400}
          height={400}
          className={styles.service_card_image}
        />
        {/* </div> */}
      </div>
    </>
  )
}
