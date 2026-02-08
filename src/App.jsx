import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <div className='min-h-screen text-white w-full bg-(--c3)'>

      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />}/>
      </Routes>

      <ToastContainer />

    </div>
  )
}

export default App