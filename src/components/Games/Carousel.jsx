import React from 'react'
import Card from './Card'
import images from '../../config/images'
function Carousel() {
  return (
    <div className='box-border flex items-center justify-center lg:overflow-x-auto overflow-x-scroll gap-4 w-[92vw] scroll-m-3 p-2'>
      <Card src={images.PUBGgame.src} alt={images.PUBGgame.alt} text={"PUBG"}/>
      <Card src={images.PUBGgame.src} alt={images.PUBGgame.alt} text={"PUBG"}/>
      <Card src={images.PUBGgame.src} alt={images.PUBGgame.alt} text={"PUBG"}/>
      <Card src={images.PUBGgame.src} alt={images.PUBGgame.alt} text={"PUBG"}/>
      <Card src={images.PUBGgame.src} alt={images.PUBGgame.alt} text={"PUBG"}/>
      <Card src={images.PUBGgame.src} alt={images.PUBGgame.alt} text={"PUBG"}/>
    </div>
  )
}

export default Carousel