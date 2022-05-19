import { useState } from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import NavBarBottom from './Components/NavBar/NavBarBottom';
import Sections from './Components/Sections/Sections';
import Modal from './Components/Modal/Modal';
import useDarkMode from './CustomHooks/useDarkMode';

function App() {

  const [darkImages, setDarkImages] = useDarkMode()

  const [openModal, setOpenModal] = useState({
    open: false,
    text: '',
    title: '',
    icon: ''
  })

  return (
    <div className='App'>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <div className="circle1" />
      <div className="circle2" />
      <div className="circle3" />
      <div className='app-container'>
        <NavBar
          darkImages={darkImages}
          setDarkImages={setDarkImages}
        />
        <Sections
          openModal={openModal}
          setOpenModal={setOpenModal}
          darkImages={darkImages}
          setDarkImages={setDarkImages}
        />
        <NavBarBottom />
      </div>
    </div>
  )
}

export default App

