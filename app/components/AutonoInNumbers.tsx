import Image from 'next/image'
import styles from './components.module.css'
export default function Numbers () {
  const numbers = [
    { number: '200', title: 'Employees' },
    { number: '5', title: 'Core Teams' },
    { number: '200M$', title: 'Capital' },
    { number: '326', title: 'Partners' }
  ]
  return (
    <div className={styles.numbers}>
      {/* image */}
      <div className={styles.number_image_container}>
        <Image
          src='/spanner.avif'
          alt='spanner-like image'
          width={400}
          height={400}
          className={styles.numbers_image}
        />
      </div>
      {/* mapped content */}
      <div className={styles.num_display}>
        {numbers.map((number, index) => (
          <div className={styles.num_container} key={index}>
            <h2>{number.number}</h2>
            <div className={styles.num_div_line}>
              <div></div>
              <div></div>
            </div>
            <h2>{number.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
