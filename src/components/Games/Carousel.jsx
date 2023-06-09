import React from 'react'
import Card from './Card'
import images from '../../config/images'
function Carousel() {
  return (
    <div className='flex lg:overflow-x-auto overflow-x-scroll gap-4 w-[92vw] 2xl:w-fit scroll-m-3 p-2'>
      <Card src={images.BGMI.src} alt={images.BGMI.alt} text={"BGMI"} link="bgmi"/>
      <Card src={images.FreeFire.src} alt={images.FreeFire.alt} text={"FreeFire"} link="freefire"/>
      <Card src={images.Valorant.src} alt={images.Valorant.alt} text={"Valorant"} link="valorant"/>
      <Card src={images.ClashofClans.src} alt={images.ClashofClans.alt} text={"Clash of Clans"} link="clashofclans"/>
      <Card src={images.GTA.src} alt={images.GTA.alt} text={"Grand Theft Auto"} link="grandtheftauto"/>
      <Card src={images.SmashKarts.src} alt={images.SmashKarts.alt} text={"SmashKarts"} link="smashkarts"/>
    </div>
  )
}

export default Carousel