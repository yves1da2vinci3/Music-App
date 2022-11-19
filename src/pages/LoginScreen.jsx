import React, { useState } from 'react'
import {LoginMeshLink} from '../assets/MeshLinks'
import {
    TextInput,
    Paper,
    Title,
    Text,
    Container,
  
  } from '@mantine/core';
  import { createStyles, UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';
import data from '../assets/LanguagesImages' 
import { Link } from 'react-router-dom';
function LoginScreen() {
    // styles Language Picker
    const useStyles = createStyles((theme, { opened }) => ({
        control: {
          width: 200,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 15px',
          borderRadius: theme.radius.md,
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
          }`,
          transition: 'background-color 150ms ease',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[opened ? 5 : 6]
              : opened
              ? theme.colors.gray[0]
              : theme.white,
      
          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
          },
        },
      
        label: {
          fontWeight: 500,
          fontSize: theme.fontSizes.sm,
        },
      
        icon: {
          transition: 'transform 150ms ease',
          transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
        },
      }));
      
      const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
    className='bg-white'
      icon={<Image src={item.image} width={18} height={18} />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <div  className='h-screen w-screen  relative flex flex-col justify-center ' style={{ 
        backgroundImage :`url('${LoginMeshLink}')` 
     }} >
    
    {/* card */}
    <Container size={500} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome back!
      </Title>
    

      <Paper className='flex flex-col md:w-[30rem] w-[20rem] h-[16rem] ' withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <TextInput label="userName" placeholder="you@mantine.dev" required />
       
       
      <Link to="/user/home" className='h-[3rem] w-[14rem] rounded-sm p-5 flex justify-center items-center hover:bg-blue-900 cursor-pointer bg-blue-600 mt-5 self-center '>
<p className='text-white'>Sign In</p>
      </Link>
      </Paper>
    </Container>

    <Text
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        choose your language
      </Text>
      <div className='flex justify-center mt-7 '>
      <Menu
      className='bg-white self-center'
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <Image src={selected.image} width={22} height={22} />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
      </div>
    
    <p className='absolute bottom-5 text-xl text-center self-center ' >made with <span className='text-red-600 text-xl' >&hearts;</span>  by Yves Lionel DIOMANDE</p>
     </div>
  )
}

export default LoginScreen