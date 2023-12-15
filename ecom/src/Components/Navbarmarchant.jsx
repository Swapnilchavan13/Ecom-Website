import React from 'react'
import { Link } from 'react-router-dom'

export const Navbarmarchant = () => {
  return (
    <div className='nav'>
    <Link to="/merchantdatapage">
      <h3>Deatails</h3>
      </Link>
      <Link to="/merchantdatapage/merchantadd">
      <h3>Add Products</h3>
      </Link>
      <Link to="/merchantdatapage/merchantproduct">
      <h3>All Products</h3>
      </Link>
      <Link to="/merchantdatapage/merchantorder">
      <h3>All Orders</h3>
      </Link>
    </div>

    )
}
