import React from 'react'
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const Blogs = () => {

  return (
    <div className='h-90 '>
    <h1 className='font-bold text-[40px] underline m-4  '>Blogs</h1>
        <Link to ={'/blog'} >
        <div  className='w-[400px] relative m-4  mb-8 border border-2 border-solid border-black hover:scale-[1.01] transition-all duration-500 active:translate-y-1 hover:shadow-lg '  >
        <img src='KGVBLOGCOVER.png' className='w-[400px]  ' alt='Blog-Cover'  />
        <div className= ' absolute bottom-0  items-center justify-center bg-black bg-opacity-80 text-white'>
          <span className='capitalize font-semibold text-center bottom-0'>
            Know how to reduce your commuting cost by 90%
          </span>
        </div>    
        </div>
    
</Link>
    </div>
  )
}

export default Blogs