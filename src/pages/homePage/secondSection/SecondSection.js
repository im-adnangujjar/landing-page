import React from 'react'
import styles from '../../../../style/SecondSection.module.css'
// import Card from '../../../component/data/card/Card'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Grid } from '@mui/material'
import { data } from '../../../component/data/data'


function SecondSection() {
    return (
        <div>
            <div className={styles.mainContainer1}>
                <div>
                    <h1 className={styles.heading1}>Choose a program 
                        and transform your career </h1>
                    <p className={styles.paragraph3}>Our programs will teach you everything you need to get your first job in tech in as little as 5 months—even if you don’t have any previous experience.</p>
                </div>

                <div className={styles.margin}>

                    <div className={styles.display1}>
                        {data.map((item) => {
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
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection