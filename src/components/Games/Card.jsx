import React from 'react'
import Button from '../shared/Button'

function Card({src, alt, text}) {
  return (
    <div className='flex flex-col items-center justify-center gap-3 bg-bg-primary border-color-primary border-[2px] p-5'>
        <div className='w-full'>
            <img src={src} alt={alt} text={text} className="w-48 h-48 border-white border-[1px] min-w-48 object-cover"/>
        </div>
        <h3 className='text-xl font-[500]'>{text}</h3>
        <Button>Join Clan</Button>
    </div>
  )
}

export default Card