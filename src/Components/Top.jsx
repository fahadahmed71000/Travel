import React from 'react'
import Card1 from '../assets/card1.jpg';
import Card2 from '../assets/card2.png';
import Card3 from '../assets/card3.png';
import V1 from '../assets/v1.png';

const Top = () => {
return (
    <div>
        {/* second card */}


      <div className="text-center pt-32">
       
       <div>
         <p className="font-bold text-[#5E6282]">Top Selling</p>
       </div>
       <h1 className="text-3xl font-bold text-[#14183E]">Top Destinations</h1>
     </div>

     {/* cards */}

     <div className="container flex space-x-7 justify-center pt-16">
        {/* card 1 */}

     <h2 class="text-2xl font-semibold mb-4 pt-14"></h2>
<div class="w-72 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
  <img src={Card1} alt="Avatar" className="w-72 rounded-t-2xl h-96"/>
  <div class="p-4">

     
      <div className='flex space-x-24 text-[#5E6282]'>
        <h4 class="text-xl font-bold mb-2">Rome, Italy</h4>
        <h1 className='font-bold'>$5,42k</h1>
        </div>
        
        <div className='flex space-x-4 text-[#5E6282]'>
            <img src={V1} alt="" />
    <p class="text-gray-700">10 Days Trip</p>
    </div> 
  </div>
</div>
{/* card closed */}

<h2 class="text-2xl font-semibold mb-4 pt-14"></h2>
<div class="w-72 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
  <img src={Card1} alt="Avatar" className="w-72 rounded-t-2xl h-96"/>
  <div class="p-4">

     
      <div className='flex space-x-24 text-[#5E6282]'>
        <h4 class="text-xl font-bold mb-2">Rome, Italy</h4>
        <h1 className='font-bold'>$5,42k</h1>
        </div>
        
        <div className='flex space-x-4 text-[#5E6282]'>
            <img src={V1} alt="" />
    <p class="text-gray-700">10 Days Trip</p>
    </div> 
  </div>
</div>


{/* card3 */}

<h2 class="text-2xl font-semibold mb-4"></h2>
<div class="w-72 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
  <img src={Card1} alt="Avatar" className="w-72 rounded-t-2xl h-96"/>
  <div class="p-4">

     
      <div className='flex space-x-24 text-[#5E6282]'>
        <h4 class="text-xl font-bold mb-2">Rome, Italy</h4>
        <h1 className='font-bold'>$5,42k</h1>
        </div>
        
        <div className='flex space-x-4 text-[#5E6282]'>
            <img src={V1} alt="" />
    <p class="text-gray-700">10 Days Trip</p>
    </div> 
  </div>
</div>


        


     </div>



    </div>
  )
}

export default Top;