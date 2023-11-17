import HeroAccomodations from '@/componentsAccomodations/HeroAccomodations'
import Pricing from '@/componentsAccomodations/Pricing'
import Rooms from '@/componentsAccomodations/Rooms'
import React from 'react'

export default function page() {
  return (
    <>
        <HeroAccomodations/>
        <Rooms/>
       <Pricing/>
    </>
  )
}
