import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../bg1.jpg'


const Home = () => {
  return (
    <div className='w-full'>
    <img src={bg} alt='bg' className='absolute -z-10' />
<section className='w-[95%]  h-[3rem] m-auto py-2 flex justify-end'>

<Link to={'/'}> <p className='absolute left-6 font-mono font-extrabold top-1 text-3xl'>SP</p></Link>
   <Link to={'/reg'}> <h3 className='p-2 text-center border-2 mr-2 border-slate-950'>Registration</h3> </Link>
   <Link to={'/login'}> <h3 className='p-2 text-center border-2 border-slate-950'>Log In</h3> </Link>
</section>

<section className=' h-[26rem] mt-2 w-[80%] m-auto grid grid-cols-1 place-items-center '>
    <div className=' py-12 px-6'>
    <h1 className='text-4xl font-extrabold text-red-400'>Welcome to You Guys</h1>
    <p className='max-w-[36rem] mt-4'>At sunset, the villagers went looking for the boy who hadnt returned with their sheep. When they went up the hill, they found him weeping.

“There really was a wolf here! The flock is gone! I cried out, Wolf! but you didnt come,” he wailed.</p>
</div>
</section>
    </div>
  )
}

export default Home