import React from 'react'
import styles from './Body.module.css'
import InputEmail from './InputEmail'

function Body() {
    return (
        <div className={styles.container}>
           <div>
             <img  className={styles.img}alt="" src="/images/cs.png"/>
           </div>
           <div className={styles.content}>
             <h1 className={styles.hone}>Welcome are launching soon</h1>
             <h2 className={styles.hthree}>India's First Clinical Career Counselling Initiative</h2>
             <h2 className={styles.htwo}>Book your free session today with us</h2>
            <InputEmail />
           </div>
        </div>
    )
}

export default Body
