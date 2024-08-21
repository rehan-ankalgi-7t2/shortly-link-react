import React from 'react'
// import './styles/header.css'

const Header = () => {
  return (
    <header className='bg-white w-100 h-100 shadow-md p-5 px-10 flex items-center justify-between' >
        <h1 className='text-3xl'>Shortly</h1>
        <ul className='flex items-center gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Developer API</li>
        </ul>
    </header>
  )
}

export default Header