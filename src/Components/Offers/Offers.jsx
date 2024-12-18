import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
export default function Offers() {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers</h1>
        <h2>Only for you</h2>
        <button>Check Now</button>
      </div>

      <div className="offers-right">
        <img src={exclusive_image} alt=""/>
      </div>
    </div>
  )
}
