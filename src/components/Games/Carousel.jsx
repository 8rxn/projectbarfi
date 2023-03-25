import React from 'react'
import Card from './Card'
import images from '../../config/images'
function Carousel() {
  return (
    <div className='flex items-center justify-center overflow-x-scroll gap-4'>
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