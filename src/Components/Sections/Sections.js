import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Skills from '../Skills/Skills'
import { memo } from 'react'

const Sections = memo(({ openModal, setOpenModal, darkImages, setDarkImages }) => {
    return (
        <Routes>
            <Route path='/' element={
                <Home
                    darkImages={darkImages}
                />
            } />
            <Route path='/about' element={
                <About
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            } />
            <Route path='/portfolio' element={
                <Portfolio
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            } />
            <Route path='/skills' element={
                <Skills
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    darkImages={darkImages}
                />
            } />
        </Routes>
    )
})

export default Sections