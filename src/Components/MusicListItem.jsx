import React from 'react'
import {IoMdArrowDropright} from 'react-icons/io'
import {GiNetworkBars} from 'react-icons/gi'
function MusicListItem() {
  return (
    <div className='h-16 drop-shadow-lg rounded-lg bg-white flex items-center px-2' >
    <p className='font-semibold mr-3' >01</p> 
    <img src='https://i.pinimg.com/736x/82/4c/75/824c75d5d8baddac1e3ab99a48b77f36.jpg' className='h-10 w-10 rounded-lg self-center ' />
    <IoMdArrowDropright size={24} className='text-gray-400' />
    <p className='font-semibold' >Rockstar</p> 
    <div className='flex flex-1 px-5 justify-between' >
    <p className=' text-gray-500 ml-4 font-bold' >post malone</p> 
    <p className='font-semibold text-gray-400' >4:31</p> 
 <div>
  <GiNetworkBars size={24} className='text-gray-400'  />
 </div>
    </div>
   
  </div>
  )
}

export default MusicListItem