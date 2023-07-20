import React from 'react'
import {BiSearch} from 'react-icons/bi'
import Example from './Chart1'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Link, Outlet } from 'react-router-dom';


const Dashbord = () => {
  return (
    <div className='w-full h-full bg-gray-100 relative '>
        
        <section className=' bg-slate-400  w-[75%] right-0  flex flex-row justify-around place-items-center h-16 absolute '>
        <p className='font-mono font-extrabold text-3xl'>Dashbord</p>

        <aside className='flex bg-white w-[26rem] items-center border-2 border-slate-950 '>
        <input type='text' className='w-[90%] border-none text-center' placeholder='search your preference' />
        <BiSearch className='bg-white ' size={30} />
        </aside>

       <Link to={'/login'}> <p className='shadow-blue-900 shadow-sm bg-slate-50 rounded-md py-2 px-4 font-semibold'>Log Out</p> </Link>
        </section>

        <section className='bg-slate-950 flex flex-col w-[25%] gap-y-4 text-white h-[40rem] '>

        <div className='mt-6 m-auto bg-blue-400 px-6 py-2 rounded-md flex flex-row w-[14rem] justify-between items-center font-mono font-extrabold' > 
         <p>Saurabh Pranjale</p>
         <div className='border-2  border-white w-[3rem] h-[3rem] rounded-full flex justify-center
         items-center'>
            SP
        </div>

        </div>
    
    <ul className='m-auto  w-[16rem] text-center flex flex-col gap-y-6 h-[26rem]'>
        <li className='shadow-pink-200 shadow-sm py-2 rounded-sm hover:scale-105'>Analysis</li>
        <li className='shadow-pink-200 shadow-sm py-2 rounded-sm hover:scale-105'>Vocabulary</li>
        <li className='shadow-pink-200 shadow-sm py-2 rounded-sm hover:scale-105'>Improvement</li>
        <li className='shadow-pink-200 shadow-sm py-2 rounded-sm hover:scale-105'>Live Test</li>
        <li className='shadow-pink-200 shadow-sm py-2 rounded-sm hover:scale-105'>Help</li>
    </ul>
    

        </section>
        <section className='  place-items-center absolute top-[4rem] right-0 w-[75%]' >
            <div className='flex flex-row  justify-around py-4'>
      <Link to={'price1'}>  <div className='w-[12rem] bg-slate-50 shadow-sm shadow-black rounded-xl h-[9rem] grid grid-cols-1 place-items-center '><p>Overall</p> <p>$27,00</p> <p>average</p></div> </Link>
      <Link to={'price2'}> <div className='w-[12rem] bg-slate-50 shadow-sm shadow-black rounded-xl h-[9rem] grid grid-cols-1 place-items-center '><p>Overall</p> <p>$27,00</p> <p>average</p></div></Link>
      <Link to={'price3'}> <div className='w-[12rem] bg-slate-50 shadow-sm shadow-black rounded-xl h-[9rem] grid grid-cols-1 place-items-center '><p>Overall</p> <p>$27,00</p> <p>average</p></div></Link>
      <Link to={'price4'}> <div className='w-[12rem] bg-slate-50 shadow-sm shadow-black rounded-xl h-[9rem] grid grid-cols-1 place-items-center '><p>Overall</p> <p>$27,00</p> <p>average</p></div></Link>
        </div>
 <div className='m-auto  flex flex-row justify-center items-center py-12'><Example/> <Outlet /></div>
 
        </section>
        
    </div>
  )
}

export default Dashbord