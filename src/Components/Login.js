import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bg from '../bg1.jpg'
const Login = () => {
    const [ep,setEP] = useState('')
    const [pass,setPass] = useState('')

    const epr = localStorage.getItem('ep')
    const passr = localStorage.getItem('pass')

    const navigate = useNavigate()

    const Submit = (e) =>{
  e.preventDefault()
  if(ep === "saurabh" && pass === "pranjale"){
    navigate('/dashboard')
}
if(epr === ep && passr === pass){
    navigate('/dashboard')
}

    }
    
  return (
    <div>
      <img src={bg} alt='bg' className='absolute -z-10' />
      <section className='w-[95%]  h-[3rem] m-auto py-2 flex justify-end'>

<Link to={'/'}> <p className='absolute left-6 font-mono font-extrabold top-1 text-3xl'>SP</p></Link>
   <Link to={'/reg'}> <h3 className='p-2 text-center border-2 mr-2 border-slate-950'>Registration</h3> </Link>
   <Link to={'/login'}> <h3 className='p-2 text-center border-2 border-slate-950'>Log In</h3> </Link>
</section>
<section className=' h-[26rem] mt-12'>
<h1 className=' py-6 text-2xl font-extrabold text-center'>Log In</h1>
    <form onSubmit={Submit} className=' w-[35%] m-auto flex flex-col h-[12rem] gap-y-4 mt-6'>
        <input type='text' placeholder='Enter your Email or phone number..' onChange={(e)=>{setEP(e.target.value)}}/>
        <input type='password' placeholder='Enter your password...' onChange={(e)=>{setPass(e.target.value)}} />
        <input type='submit' className='cursor-pointer' value="Submit" />
    </form>
</section>
    </div>
  )
}

export default Login