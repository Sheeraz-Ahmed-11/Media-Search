import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div className='py-6 px-10 bg-(--c3) flex justify-between items-center'>
            <Link className='text-2xl font-semibold' to={'/'}><h2>MediaSearch</h2></Link>
            <div className='flex gap-10 items-center text-xl'>
                <Link className='bg-(--c4) px-4 py-2 text-base font-medium rounded text-black' to={'/'}>Search</Link>
                <Link className='bg-(--c4) px-4 py-2 text-base font-medium rounded text-black' to={'/collection'}>Collection</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar