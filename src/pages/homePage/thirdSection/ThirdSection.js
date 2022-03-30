import { Grid } from '@mui/material'
import React from 'react'
import styles from '../../../../style/ThirdSection.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {newData} from '../../../component/data/data'
// import { flexbox, style } from '@mui/system';

function ThirdSection() {
    return (
        <div>
            <div className={styles.mainContainer1}>
                <h1 className={styles.heading1}>100% free</h1>
               <p className={styles.paragraph3}>Start Learning with Free Courses</p>
               <p className={styles.paragraph4}>Free online courses from the world's top universities and companies.</p>
      
            <div className={styles.display1}>
                {newData.map((item) => {
                    return (
                        
                            <div style={{ background: item.background }} className={styles.mainContainer}>
                                <div className={styles.bgColor}><h1 className={styles.heading}>Job Gurantee</h1></div>
                                <p className={styles.paragraph}>{item.title}</p>

                                <p className={styles.paragraph1}>{item.text}</p>

                                <div className={styles.display}>
                                    <p className={styles.paragraph2}>View Programs</p>
                                    <ArrowForwardIcon className={styles.icon} />
                                </div>
                            </div>

                    // </div>
                    )

                })}

            </div>
            </div>
        </div>
    )
}

export default ThirdSection