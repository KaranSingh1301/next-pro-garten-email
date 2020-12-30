import React , {useState}  from 'react'
import styles from'./InputEmail.module.css';

function InputEmail() {
    const[email, inputEmail] =useState("");

    function updateEmail(e){
        e.preventDefault();
        
        alert(`Email is ${email}`)
      
        inputEmail("");
        }

    return (
        <div >
              <form onSubmit={updateEmail} className={styles.container}  >
               
               <div className={styles.group}>
               <input type="email" className={styles.inputemail} id="ex2" placeholder="Email" value={email} onChange={e =>inputEmail(e.target.value)}/>
               <div className={styles.groupappend}>
              <button id="button" className={styles.btn} type="Submit" >Subscribe</button>
            </div>
        </div>
            
          
           </form>
        </div>
    )
}

export default InputEmail
