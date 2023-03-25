import React from 'react'
import Card from './Card'
import images from '../../config/images'
function Carousel() {
  return (
    <div className='box-border flex items-center justify-center lg:overflow-x-auto overflow-x-scroll gap-4 w-[92vw] scroll-m-3 p-2'>
      <Card src={images.BGMI.src} alt={images.BGMI.alt} text={"BGMI"}/>
      <Card src={images.FreeFire.src} alt={images.FreeFire.alt} text={"FreeFire"}/>
      <Card src={images.Valorant.src} alt={images.Valorant.alt} text={"Valorant"}/>
      <Card src={images.ClashofClans.src} alt={images.ClashofClans.alt} text={"Clash of Clans"}/>
      <Card src={images.GTA.src} alt={images.GTA.alt} text={"Grand Theft Auto"}/>
      <Card src={images.SmashKarts.src} alt={images.SmashKarts.alt} text={"SmashKarts"}/>
    </div>
  )
}

export default Carousel