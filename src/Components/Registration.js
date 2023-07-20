import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bg from '../bg1.jpg'
const Registration = () => {
    const [name,setName] = useState("")
    const [lname,setLName] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
console.log(name,lname)
const nav = useNavigate()
    const Submit = (e) =>{
        e.preventDefault()
        localStorage.setItem("ep",email)
        localStorage.setItem('pass',pass)
        nav('/login')
    }

    
  return (
    <div>
        <img src={bg} alt='bg' className='absolute -z-10' />
        <section className='w-[95%]  h-[3rem] m-auto py-2 flex justify-end'>

<Link to={'/'}> <p className='absolute left-6 font-mono font-extrabold top-1 text-3xl'>SP</p></Link>
   <Link to={'/reg'}> <h3 className='p-2 text-center border-2 mr-2 border-slate-950'>Registration</h3> </Link>
   <Link to={'/login'}> <h3 className='p-2 text-center border-2 border-slate-950'>Log In</h3> </Link>
</section>
<h1 className=' py-6 text-2xl font-extrabold text-center mt-10'>Register YourSelf</h1>
        <form onSubmit={Submit} className=' w-[35%] flex flex-col gap-y-4 h-[22rem] m-auto mt-4'>
            <input type='text' placeholder='Enter your Name' onChange={(e)=>{setName(e.target.value)}} />
            <input type='text' placeholder='Enter your Last Name' onChange={(e)=>{setLName(e.target.value)}} />
            <input type='text' placeholder='Enter your Email or phone' onChange={(e)=>{setEmail(e.target.value)}} />
            <input type='text' placeholder='Enter your password' onChange={(e)=>{setPass(e.target.value)}} />
            <input type='submit'   value='Create an account' className='cursor-pointer  text-xl' />
        </form>
    </div>
  )
}

export default Registration