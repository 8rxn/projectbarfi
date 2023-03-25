import React from 'react'
import { Link } from 'react-router-dom'

function Card({text,link,toggleProfile}) {
  return (
    <div className='flex flex-col sm:flex-row w-[100%] md:w-[80%] xl:w-[220px] items-start sm:items-center justify-between gap-3 bg-bg-primary border-color-primary border-[2px] py-2 px-2 rounded-tr-xl rounded-bl-xl flex-shrink-0'>
        <p className='text-base lg:text-xl font-[500] text-color-primary'>{text}</p>
          <Link to={`/clan/${link}`}>
          <button onClick={toggleProfile} className='text-color-primary rounded-xl bg-bg-secondary py-1 px-2 border-[1px] border-color-primary'>View Clan</button>
          </Link>
    </div>
  )
}

export default Card