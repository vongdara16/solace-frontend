// import styles from './Landing.module.css'
import './Landing.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react';


const Landing = ({ user, handleSignupOrLogin }) => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <>
      <main className='container'>
        <h1>hello, {user ? user.name : 'friend'}</h1>
      </main>
      <LoginForm 
        handleSignupOrLogin={handleSignupOrLogin}
        updateMessage={updateMessage}
      />
    </>
  )
}

export default Landing
