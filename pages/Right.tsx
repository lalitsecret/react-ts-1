import React from 'react'
import Filters from './Filters'
import Products from './Products'
class Right extends React.Component
{
  render()
  {
    return <div className="right">
      <Filters/>
      <Products/>
    </div>
  }
}
export default Right;