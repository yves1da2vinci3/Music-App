import React from 'react'
import {  IconPhonePause,
    IconSearch,
    IconSettings} from '@tabler/icons'
    import {TbGridDots} from 'react-icons/tb'
import {FaRegBell} from 'react-icons/fa'
import { IoIosArrowDropdown } from 'react-icons/io';
import { Autocomplete, Avatar } from '@mantine/core';
function NavBar() {
  return (
    <div className='h-20  px-5 flex justify-between' >
    {/* searchbar and Menu */}
    <div className='gap-x-4 flex items-center'>
     <TbGridDots size={24} />
     <Autocomplete
          className='drop-shadow-lg rounded-2xl '
          placeholder="Search"
          icon={<IconSearch className='text-pink-500  ' size={16} stroke={1.5} />}
          data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
        />
    </div>
    {/* little Menu  */}
    <div className='gap-x-4 divide-x-2 flex items-center'>
      {/* photo nom menu  */}
      <div className='flex gap-x-2 items-center'>
      <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWw6l_bZgJo-oESQSCyK1XhI8i-hAc8RdTAPzvQIezoVIt1phz' radius={80} />
     <p className='text-md text-black '>Yves  DIOMANDE</p>
     <IoIosArrowDropdown size={24} color='gray' />
      </div>
      <div className='flex gap-x-2 items-center'>
     <div className='relative'>
      <div className='h-2 w-2 absolute top-1 right-1 rounded-full bg-red-600'> </div>
<FaRegBell size={24} />
     </div>
    <IconSettings />
      </div>
    
    </div>
     </div>
  )
}

export default NavBar