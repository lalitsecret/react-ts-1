import React from 'react'

class Item extends React.Component
{
  render()
  {
    return <div className="item">
      <div>title</div>
      <div>pirce</div>
      <div>rating</div>
      <div>discount</div>
      <div>tags</div>
      <div>add to cart</div>
    </div>
  }
}
export default Item;