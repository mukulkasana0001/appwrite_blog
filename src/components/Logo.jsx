import React from 'react'
import IMAGES from '../components/Images/IMAGES.JSX'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={IMAGES.image1} alt='first image' width={width} />
      {/* <img src="" alt="" /> */}
    </div>
  )
}

export default Logo
