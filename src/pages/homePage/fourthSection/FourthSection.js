// import { Grid } from '@mui/material'
import React from 'react'
import Image from 'next/image'
// import image from '../../../assets/image 1.png'
import styles from '../../../../style/FourthSection.module.css'

function FourthSection() {
  return (
    <div>
      <div className={styles.maiContainer}>
      
        <div className={styles.display}>
          <img  className={styles.image} src={"/image6.png"} alt="errors" />

          <div><p className={styles.paragraph}>Take the next step toward your personal and professional goals with Coursera.</p>
            <p className={styles.paragraph1}>Join now to receive personalized recommendations from the full Coursera catalog.</p>
            <div className={styles.button}><p className={styles.buttonStyle}>join for free</p></div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default FourthSection