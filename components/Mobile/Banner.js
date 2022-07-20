import React from 'react'

const Banner = ({bannersData}) => {
  return (
      <img className='w-full h-1/2' src={bannersData.imageURL} />
  )
}

export default Banner;