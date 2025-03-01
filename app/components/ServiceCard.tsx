// card for service list
import styles from './components.module.css'
import Image from 'next/image'

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
  return (
    //     <div className={styles.service_card}
    //     >
    <>
      <div className={styles.service_card_content}>
        <h2 className={styles.service_card_content_head}>{title}</h2>
        <p className={styles.service_card_content_para}>{para}</p>
        <button>{btnText}</button>
      </div>
      <div className={styles.service_card_image_container}>
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
