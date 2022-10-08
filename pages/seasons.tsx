import type { NextPage } from 'next'
import Image from 'next/image'
import map from "../public/images/map.jpg"


const Seasons: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <Image src={map} alt="map"/>
    </div>
  )
}

export default Seasons