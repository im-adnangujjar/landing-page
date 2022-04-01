
import React from 'react'
import styles from '../../../../style/LastSection.module.css'
import { skillData } from '../../../component/data/data'


function LastSection() {
    return (
    
            <div className={styles.mainContainer}>
                    <h1 className={styles.heading}>Explore Courses</h1>
                    <div className={styles.display1}>
                        {
                            skillData.map((item, index) => {
                                return (
                                        <div key={index} className={styles.bgColor}>
                                            <div className={styles.display}>
                                                 <img  className={styles.image}src={'/image4.png'} alt="image not found" /> 
                                                <div>
                                                    <p className={styles.paragraph}>{item.title}</p>
                                                    <p className={styles.paragraph1}>{item.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                )})}
                    </div>
        </div>
    )}

export default LastSection