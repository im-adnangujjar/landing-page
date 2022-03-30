import { Grid, imageListClasses } from '@mui/material'
import React from 'react'
import styles from '../../../../style/LastSection.module.css'
import Image from 'Next/image'
import { skillData } from '../../../component/data/data'
import image from '../../../assets/image4.png'


function LastSection() {
    return (
        <div>
            <div className={styles.mainContainer}>
                <div>
                    <h1 className={styles.heading}>Explore Courses</h1>
                    <div className={styles.display1}>
                        {
                            skillData.map((item,index) => {
                                return (
                            
                                    <div key={index}>
                                        <div className={styles.bgColor}>
                                            <div className={styles.display}>
                                               <div className={styles.image}> <Image objectFit='fill' height={188} src={image} alt="image not found"/> </div>
                                                <div><p className={styles.paragraph}>{item.title}</p>
                                                    <p className={styles.paragraph1}>{item.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                )
                            })
                        }
                </div>
                </div>

            </div>
        </div>
    )
}

export default LastSection