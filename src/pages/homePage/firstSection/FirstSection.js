import { style } from '@mui/system'
import React from 'react'
import styles from '../../../../style/FirstSection.module.css'
// import { Grid } from '@mui/material'
import Image from 'next/image'
// import image from '../../../assets/image1.png'
// import image1 from '../../../assets/image2.png'
// import image2 from '../../../assets/image3.png'

function FirstSection() {
  return (
    <div>
      <div className={styles.mainContainer}>
    
         <div>
            <div className={styles.display}>
             <div> <img src={"/image1.png"} alt="image not found" /></div>
              <div><h1 className={styles.heading}>Learn Online</h1>
              <p className={styles.paragraph}>at a flexible pace</p></div>
            </div>
          </div>
          <div>
            <div className={styles.display}>

            <div ><img className={styles.image2} src={"/image2.png"} alt='image not found' /></div>
              <div><h1 className={styles.heading}>Work with expert mentors</h1>
                <p className={styles.paragraph}>and build your portfolio</p></div>
            </div>
            </div>
         <div>
            <div className={styles.display}>
            <div><img className={styles.image3} src={"/image3.png"} alt='image not found'/></div>
              <div><h1 className={styles.heading}>Land a job in tech</h1>
                <p className={styles.paragraph}>backed by our Job Guarantee</p>
              </div>
            </div>
          </div>
      

      </div>
    </div>
  )
}

export default FirstSection