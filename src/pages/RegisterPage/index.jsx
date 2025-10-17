import React from 'react'
import SignIn from '../LoginPage/sign-in/SignIn'

const RegisterPage = () => {
  return (
    <div className='page'>
      <div className='form_contrainer'>
        <h1>회원가입</h1>
        <SignUp />
        <p>
          이미 계정이 있습니까 ?<Link to={"/login"}>로그인</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage