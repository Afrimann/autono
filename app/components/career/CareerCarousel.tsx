'use client'
import { useState, useEffect } from 'react'
import styles from './career.module.css'

export default function CareerCarousel () {
  type CarouselProps = {
    position: string
    location: string
    content: string
  }

  const CarouselDetails: CarouselProps[] = [
    {
      position: 'Electrical Engineer',
      location: 'San Francisco, CA',
      content: `Requires a degree in Electrical Engineering, three years of experience in circuit design, and proficiency in MATLAB, AutoCAD, and PCB design. Strong problem-solving skills and knowledge of NEC/IEEE standards are essential.`
    },
    {
      position: 'Data Scientist',
      location: 'San Francisco, CA',
      content: `Must have a degree in Data Science or related field, two years of experience in machine learning, and proficiency in Python, R, SQL, and TensorFlow. Experience with Tableau or Power BI is a plus.`
    },
    {
      position: 'Artificial Intelligence Researcher',
      location: 'San Francisco, CA',
      content: `Requires a master’s or Ph.D. in AI or Computer Science, three years of research experience, and expertise in Python, TensorFlow, and PyTorch. Strong math skills and published research are advantageous.`
    },
    {
      position: 'Deep Learning Engineer',
      location: 'San Francisco, CA',
      content: `Needs a degree in AI or related field, three years of experience in deep learning, and proficiency in TensorFlow, PyTorch, and cloud computing (AWS/GCP). Strong coding and math skills are required.`
    }
  ]

  const [carouselInView, setCarouselInView] = useState<number>(0)
  const [animationKey, setAnimationKey] = useState(0) // Key to restart animation

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselInView(prev => (prev + 1) % CarouselDetails.length)
      setAnimationKey(prev => prev + 1) // Forces animation restart
    }, 10000)

    return () => clearInterval(interval)
  }, [CarouselDetails.length])
// check if it works
  return (
    <div className={styles.carousel} key={animationKey}>
      <h2 key={carouselInView} className={styles.fade_in}>
        {CarouselDetails[carouselInView].position}
      </h2>
      <p key={`${carouselInView}-loc`} className={styles.fade_in}>
        {CarouselDetails[carouselInView].location}
      </p>
      <p key={`${carouselInView}-content`} className={styles.fade_in}>
        {CarouselDetails[carouselInView].content}
      </p>
      <button
        key={`${carouselInView}-btn`}
        data-aos='fade-in'
        data-aos-duration='400'
        className='main_button'
      >
        Apply Now
      </button>
      {/* Progress Indicators */}
      <div className={styles.indicator_container}>
        {CarouselDetails.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${
              carouselInView === index ? styles.active_indicator : ''
            }`}
          />
        ))}
      </div>
    </div>
  )
}
