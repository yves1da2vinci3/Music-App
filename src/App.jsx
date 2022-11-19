

import HomeScreen from './pages/HomeScreen'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen';
import './index.css'
function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
      <Routes>
        <Route  path='/user/home' element={  <HomeScreen />} />
        <Route  path='/' element={  <LoginScreen />} />
  
    </Routes>
    </Router>
  </MantineProvider>

  )
}

export default App
