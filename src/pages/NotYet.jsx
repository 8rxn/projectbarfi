import React from 'react'
import Button from '../components/shared/Button'
import { Link } from 'react-router-dom'

function NotYet() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-[100%] bg-bg-primary box-border gap-8'>
    <div className='text-color-primary text-2xl font-[500]'>
        Page Not Yet Available
    </div>
        <Button><Link to="/">Home</Link></Button>
    </div>
  )
}

export default NotYet