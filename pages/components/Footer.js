import React from 'react'
import styles from './Footer.module.css'


function Footer() {
    return (
        <div className={styles.container}>
              <div className={styles.img}>
            
            <img className= {styles.fi} alt="" src=" https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"/>
            <img className= {styles.fi} alt="" src="https://cdn1.iconfinder.com/data/icons/free-98-icons/32/call-512.png"></img>
            
         </div>
    
         <div ClassName={styles.text}>
            <h2 >+91 89203 40443</h2>
             </div>
        </div>
    )
}

export default Footer
