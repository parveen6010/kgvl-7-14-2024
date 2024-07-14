import React from 'react'

const Blog = () => {
  return (
    // style={{ backgroundImage: "url('photo-background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', lineHeight: '80px' }}
    
<div  style={{backgroundImage: "url(coverphotoblog.jpg)" , backgroundSize: 'cover', backgroundPosition:'center' , backgroundRepeat:'no-repeat', lineHeight:'80px' , backgroundColor: 'rgba(222, 222, 222, 1)'   }}  className=' opacity-80 w-screen'>
{/* <div className='absolute inset-0 bg-black bg-opacity-5'></div> */}

<div style={{ lineHeight: "80px" }} className=' text-black font-bold pt-4 pb-4 h-auto w-auto mx-auto flex flex-col max-w-[80%] justify-center items-start capitalize'>
       
        <h1 className=' mt-6 font-semibold text-[30px]   flex ' >Know how to reduce commuting costs by 90%</h1>
        <div className='text-[15px] flex flex-col  ' style={{lineHeight : "30px"}}>
        <h1>Do you know, what is the carbon emission of a petrol bike in a day? Traveling 100 km on a small motorbike emits 8.3kg of CO2e, while a larger bike emits 12.8kg. These emissions prompt many to switch to EV bikes. But can an EV cover the distance of a petrol bike?</h1>
        <div style={{lineHeight:'40px', paddingTop:'20px' }} >
        <h1>"We've unearthed the key to unlock your answer."</h1>
        <h1>Karishma Global Venture (KGV): Pioneering the Path to Sustainable Mobility</h1>
      </div>
     </div>
        <div className='flex justify-center items-center w-[100%]  h-auto mt-4 '>
     <img src='photo1.jpeg' className='w-[600px]  hover:scale-[1.02] transition-all duration-500 hover:sadhow-lg ' />
       </div>

      <h1 style={{lineHeight:'80px'}} className=' mt-6 font-semibold text-[25px]'>Revolutionizing Commuting: Riding the Wave of Eco-Friendly Innovation</h1>
      <div className='text-[15px] flex flex-col items-start' style={{lineHeight: "30px"}}>
        <h1>We at Karishma Global Venture (KGV) stand at the forefront of sustainable transportation innovation envisioning a future where every motorcycle embodies eco-friendly values. Our mission is clear: to transform India's commuting landscape into a vibrant tapestry of environmentally conscious options</h1>
      </div>

 <h1 className='mt-6 font-semibold text-[25px]' style={{lineHeight:'80px'}}>Empowering Emt-6 very Rider: Redefining Mobility</h1>
       
       <div className='text-[15px] flex flex-col items-start ' style={{lineHeight:'30px'}}>
       <h1>At KGV, our focus is on empowering motorcycle owners to make sustainable choices that    benefit both their wallets and the planet. Our plug-in hybrid kit isn't just an accessory; it's a transformative addition to any rider's lifestyle. Our plug-in hybrid kit isn't just an accessory; it's a transformative addition to any rider's lifestyle.</h1> 
       </div>

      <h1 className=' mt-6 font-semibold text-[25px] ' style={{lineHeight:'80px'}}>Innovation Tmt-6 hat Matters: From Concept to Reality</h1>

      <div className='text-[15px] flex flex-col items-start ' style={{lineHeight:'30px'}}>
       <h1>Driven by a commitment to practical solutions, we at KGV introduce a plug-in hybrid solution that not only lowers travel costs significantly but also reduces carbon footprints. This innovation promises to enhance profitability for businesses while ensuring a seamless journey for riders.</h1> 
       </div>


       <h1 className=' mt-6 font-semibold text-[25px] ' style={{lineHeight:'80px'}}>Customer-Centric Excellence: Crafting Tomorrow's Solutions Today</h1>

<div className='text-[15px] flex flex-col items-center ' style={{lineHeight:'30px'}}>
 <h1>Our approach to innovation goes beyond technology it's about deeply understanding customer needs and surpassing expectations. Our customer-centric products are designed to tackle high transportation costs head-on with state-of-the-art solutions.</h1> 
 </div>
 <div className='flex justify-center items-center w-[100%]  h-auto  m-4 '>
     <img src='photo2.jpeg' className='w-[600px]  hover:scale-[1.02] transition-all duration-500 hover:sadhow-lg ' />
       </div>

    </div>
    </div>
  
  )
}

export default Blog