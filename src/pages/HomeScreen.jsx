import { useState } from 'react';
import { createStyles, Navbar, Group, Code,Slider, Autocomplete, Avatar } from '@mantine/core';
import {
  IconHome,
  IconVideo,
  IconUser,
  IconFile,
  IconLayoutBoard,
  IconAlarm,
  IconFileDigit,
  IconRepeat,
  IconSwitch,

} from '@tabler/icons';
// import { MantineLogo } from '@mantine/ds';

import {BsArrowDownSquare, BsFillPauseFill, BsSuitHeartFill} from 'react-icons/bs'
import {AiFillBackward, AiFillForward} from 'react-icons/ai'

import MusicListItem from '../Components/MusicListItem';
import NavBar from '../Components/NavBar';

import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
function HomeScreen() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');
  const [value, setValue] = useState(2200);
  const collections = [
    { emoji: '👍', label: 'Sales' },
    { emoji: '🚚', label: 'Deliveries' },
    { emoji: '💸', label: 'Discounts' },
    { emoji: '💰', label: 'Profits' },

  ];
  const collectionLinks = collections.map((collection) => (
    <a
      href="/"
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: 9, fontSize: 16 }}>{collection.emoji}</span> {collection.label}
    </a>
  ));
  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));
  const links2 = data2.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <div className='h-screen w-screen flex' >
      {/* sideBar */}
      <div className=''>
      <Navbar className='h-full' width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
       
        {links}
       
      </Navbar.Section>
      <p className='text-gray-500 ml-4 font-semibold mt-6'>MY MUSIC</p>
      <Navbar.Section grow>
       
        {links2}
       
      </Navbar.Section>
      <p className='text-gray-500 ml-4 font-semibold mt-2'>PLAYIST</p>
      <Navbar.Section grow>
  
     <div className={classes.collections}>{collectionLinks}</div>
       
      </Navbar.Section>
      {/* <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section> */}
    </Navbar>
      </div>
{/* main Part  */}
<div className='bg-red-100 flex-1 grabient  flex flex-col md:grid md:grid-rows-2 ' >
  {/* choose  */}
  <div className=' flex flex-col '>
    {/* navBar  */}
  <NavBar />
  {/* carsousel Container  */}
  <div className='flex flex-col'>
    {/* carousel controllers and title  */}
<div className='flex px-2 items-center  justify-between' >
  <p className='text-lg font-bold text-black'>Top Artists <sapn className='text-gray-400  text-sm font-semibold'>- top 50</sapn></p>
  {/* controllers  */}
  <div className='flex items-center mt-5 gap-x-3'>
<div className='h-8 w-8 flex items-center bg-white justify-center rounded-lg drop-shadow-md' >
<MdKeyboardArrowLeft size={24} />
</div>
<div className='h-8 w-8 flex items-center bg-white justify-center rounded-lg drop-shadow-md' >
<MdKeyboardArrowRight size={24} />
</div>
  </div>
</div>

{/* realt Carousel container  */}
<div className='flex px-2 h-full gap-x-4 w-full' >
<div className='h-[15rem] w-[12rem] flex-col p-2 flex ' >
<img src='https://i.pinimg.com/736x/82/4c/75/824c75d5d8baddac1e3ab99a48b77f36.jpg' className='h-[10rem] drop-shadow-lg w-[11rem] rounded-2xl self-center ' />
<p className='font-bold' >Stoney</p>
<p className='font-semibold capitalize text-gray-400' >Post malone</p>
</div>
<div className='h-[15rem] w-[12rem] flex-col p-2 flex ' >
<img src='https://i.pinimg.com/736x/82/4c/75/824c75d5d8baddac1e3ab99a48b77f36.jpg' className='h-[10rem] drop-shadow-lg w-[11rem] rounded-2xl self-center ' />
<p className='font-bold' >Stoney</p>
<p className='font-semibold capitalize text-gray-400' >Post malone</p>
</div>
<div className='h-[15rem] w-[12rem] flex-col p-2 flex ' >
<img src='https://i.pinimg.com/736x/82/4c/75/824c75d5d8baddac1e3ab99a48b77f36.jpg' className='h-[10rem] drop-shadow-lg w-[11rem] rounded-2xl self-center ' />
<p className='font-bold' >Stoney</p>
<p className='font-semibold capitalize text-gray-400' >Post malone</p>
</div>
<div className='h-[15rem] w-[12rem] flex-col p-2 flex ' >
<img src='https://i.pinimg.com/736x/82/4c/75/824c75d5d8baddac1e3ab99a48b77f36.jpg' className='h-[10rem] drop-shadow-lg w-[11rem] rounded-2xl self-center ' />
<p className='font-bold' >Stoney</p>
<p className='font-semibold capitalize text-gray-400' >Post malone</p>
</div>
<div className='h-[15rem] w-[12rem] flex-col p-2 flex ' >
<img src='https://i.pinimg.com/736x/82/4c/75/824c75d5d8baddac1e3ab99a48b77f36.jpg' className='h-[10rem] drop-shadow-lg w-[11rem] rounded-2xl self-center ' />
<p className='font-bold' >Stoney</p>
<p className='font-semibold capitalize text-gray-400' >Post malone</p>
</div>
</div>
  </div>
  </div>
  {/* msuci  */}
  <div className=' grid grid-cols-2'>

{/* Music player  */}
<div className='h-full   flex  flex-col p-2 '>
  <h1 className='font-semibold text-[1.4rem] capitalize text-left' >now playing</h1>
  {/* the player  */}
  <div className='h-[22rem] self-start ml-3 drop-shadow-lg shadow-lg p-4 w-[25rem] mt-2 flex flex-col gap-y-3 bg-white rounded-xl ' >
  {/* next part   */}
  <p className='text-right text-gray-500 capitalize font-semibold' > next - <span  className='text-black' >Rockstar</span></p>
  
  {/* image */}
  <img src='https://i.pinimg.com/736x/82/4c/75/824c75d5d8baddac1e3ab99a48b77f36.jpg' className='h-32 w-32 rounded-2xl self-center ' />

<div>
    {/* Title   */}
  <p className='text-black text-center capitalize font-semibold' >Saint-Trophez</p>
  {/* Artist Name   */}
  <p className='text-gray-500 text-center capitalize font-semibold' >Post Malone</p>
</div>


  {/* music tracking  */}
<div className='flex flex-col' >
<Slider
        max={8000}
        step={50}
        min={0}
        label={null}
        value={value}
        onChange={setValue}
        size={2}
        radius={0}
    color='green'
      />
      {/* Minutes  */}
<div className='flex justify-between items-center' >
<p className='text-gray-500 font-medium ' >2.10</p>
<p className='text-gray-500 font-medium '>-03.56</p>
</div>
</div>
  {/* controller  */}
  <div className=' flex items-center justify-between px-4' >
  <div className='cursor-pointer hover:bg-gray-200 hover:p-1 hover:rounded-lg' >
    <IconSwitch />
  </div>
  <div className='cursor-pointer hover:bg-gray-200 hover:p-1 hover:rounded-lg' >
    <AiFillBackward size={24} />
  </div>
  <div className='h-16 w-16 rounded-full bg-white  btnPlayGrabient flex justify-center items-center' >
    <div className='h-10 w-10 rounded-full flex justify-center  items-center bg-white' >
      <BsFillPauseFill size={24} className='text-blue-800 ' />
       </div>
     </div>
  <div className='cursor-pointer hover:bg-gray-200 hover:p-1 hover:rounded-lg  ' >
  <AiFillForward size={24} />
  </div>
  <div className='cursor-pointer hover:bg-gray-200 hover:p-1 hover:rounded-lg' >
    <IconRepeat />
  </div>

  </div>
   </div>
</div>
{/* list of music  */}
<div className='h-full p-2  '>
  <div className='flex justify-between ' >
    {/* most loved & song  */}
    <div className='flex gap-x-4 items-center' >
  <h1 className='font-semibold text-[1.4rem] capitalize text-left' >Mostly loved</h1>
<div className='h-8 w-8 rounded-full bg-white drop-shadow-lg flex justify-center items-center ' >
<BsSuitHeartFill size={18} className='text-red-500' />
</div>
    </div>
  {/* number of song  */}
  <div className='flex gap-x-3 items-center' >
<p className='text-gray-500 font-semibold '>55 songs on the list</p>
<BsArrowDownSquare size={24} className='text-gray-500 font-semibold '  />
  </div>
  </div>

{/* list of music  */}
<div className='h-[90%] p-2 flex flex-col gap-y-2' >
 <MusicListItem />
 <MusicListItem />
 <MusicListItem />
 <MusicListItem />
 <MusicListItem />
   </div>
</div>
  </div>
</div>

    </div>
  )
}

export default HomeScreen
const data = [
  { link: '', label: 'Home', icon: IconHome },
  { link: '', label: 'Browse', icon: IconLayoutBoard },
  { link: '', label: 'Album', icon: IconFile },
  { link: '', label: 'Artists', icon: IconUser },
  { link: '', label: 'videos', icon: IconVideo }
];
const data2 = [
  { link: '', label: 'Recently Played', icon: IconAlarm },
  { link: '', label: 'Local files', icon: IconFileDigit },

];

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    collections: {
      paddingLeft: theme.spacing.md - 6,
      paddingRight: theme.spacing.md - 6,
      paddingBottom: theme.spacing.md,
    },
  
    collectionsHeader: {
      paddingLeft: theme.spacing.md + 2,
      paddingRight: theme.spacing.md,
      marginBottom: 5,
    },
    collectionLink: {
      display: 'block',
      padding: `8px ${theme.spacing.xs}px`,
      textDecoration: 'none',
      borderRadius: theme.radius.sm,
      fontSize: theme.fontSizes.xs,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      lineHeight: 1,
      fontWeight: 500,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
      },
    },
  };
});


