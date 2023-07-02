'use client'
import React, { useRef } from 'react'
import styles from './signup.module.scss'
import axios from 'axios'

// const postBody = await axios.post('localhost:3001/', {})

const Signup = () => {
  const nameVar = useRef<HTMLInputElement>(null);
  const surnameVar = useRef<HTMLInputElement>(null);
  const emailVar = useRef<HTMLInputElement>(null);
  const passwordVar = useRef<HTMLInputElement>(null);
  const passwordAVar = useRef<HTMLInputElement>(null);


  const submitForm = async() => {
    console.log("çalışıyom")
    if(passwordAVar.current?.value != passwordVar.current?.value){
      console.log(passwordAVar.current?.value + " " + passwordVar.current?.value + " " + "buraya girdim")
      return null;
    }

    const res = await axios.post('http://localhost:3001/', {
      Name:nameVar.current?.value,
      Surname :surnameVar.current?.value,
      Email : emailVar.current?.value,
      Password : passwordVar.current?.value
    });
    if(res.status == 401){
      console.error(res.data);
    }
    if(res.status == 200){
      console.log(res.data);
    }
  }

  return (
    <div>
        <h3 className={styles.h3}>Welcome to XXX.</h3>
        <p>To sign up to the XXX please fill the fields below.</p>
          <div className = {styles.signupForm}>
            <form>
              <label className={styles.h1} htmlFor='nameField'>Name</label>
              <input ref={nameVar} type="text" id='nameField' className={styles.basicInputField} placeholder='Name' />
              <label className={styles.h1} htmlFor='surnameField'>Surname</label>
              <input ref={surnameVar} type="text" id='surnameField' className={styles.basicInputField} placeholder='Surname'/>
              <label className={styles.h1} htmlFor='emailField'>Email</label>
              <input ref={emailVar} type="email" id="emailField" className={styles.basicInputField} placeholder='Email'/>
              <label className={styles.h1} htmlFor='passwordField'>Password</label>
              <input ref={passwordVar} type="password" id="passwordField"  className={styles.basicInputField} placeholder='Password'/>
              <label className={styles.h1} htmlFor='passwordAgainField'>Password Again</label>
              <input ref={passwordAVar} type="password" id="passwordAgainField" className={styles.basicInputField} placeholder='Password'/>
              <button type="button" onClick={submitForm}>Submit</button>
            </form>
          </div>
    </div>
  )
}

export default Signup