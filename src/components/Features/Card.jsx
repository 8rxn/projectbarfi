import React from 'react'

function Card({src, alt, text}) {
  return (
    <div className='bg-bg-primary border-color-primary border-[2px] p-5 rounded-sm text-center flex flex-col gap-3'>
        <div className='border-white border-[1px] overflow-hidden rounded-tr-xl rounded-bl-xl'>
            <img src={src} alt={alt} className="w-40 scale-125"/>
        </div>
        <div>
          <p className='text-lg font-[500]'>{text}</p>
        </div>
    </div>
  )
}

export default Card