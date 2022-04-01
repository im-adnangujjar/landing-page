
import React from 'react'
import Styles from '../../../../style/HeaderSection.module.css'
import Navbar from '../../../component/navbar/Navbar'

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
      <img className={Styles.image} src={"/image6.png"} alt="image not found" />
    </div>

    </div >
  )
}

export default HeaderSection