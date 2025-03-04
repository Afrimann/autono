import styles from './components.module.css'
import ServiceCard from './ServiceCard'

// properly arranges and sets all list of services
export default function Services () {
  return (
    <div className={styles.service_list}>
      <div className={styles.auto_driving}>
        <ServiceCard
          btnText='Read More'
          image='/car3.avif'
          para={` I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.`}
          title='AUTONOMOUS DRIVING'
        />
      </div>

      <div className={styles.real_time}>
        <ServiceCard
          btnText='Read More'
          image='/measure.avif'
          para={` I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.`}
          title='REAL-TIME INFORMATION'
        />
      </div>

      <div className={styles.perception}>
        <ServiceCard
          btnText='Read More'
          image='/car4.avif'
          para={` I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.`}
          title='PERCEPTION ENABLED'
        />
      </div>
    </div>
  )
}
