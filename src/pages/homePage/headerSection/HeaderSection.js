import { Grid } from '@mui/material'
import React from 'react'
import Styles from '../../../../style/HeaderSection.module.css'
import Navbar from '../../../component/navbar/Navbar'
import Image from 'next/image'
import image from '../../../assets/image 1.png'

function HeaderSection() {
  return (
    <div className={Styles.mainContainer}>
      <div><Navbar/></div>
      <div  className={Styles.display}>
      <div> 
        <h1 className={Styles.heading}>Build a career you love</h1>
        <div><p className={Styles.paragraph}>Become a UX designer, UI designer, web developer, or data analyst from scratch</p></div>
        <div className={Styles.bgColor}><p className={Styles.paragraph1}>Find the right program for you</p></div>
      </div>
      <div className={Styles.image}><Image src={image} alt="image not found" /></div>
    </div>

    </div >
  )
}

export default HeaderSection