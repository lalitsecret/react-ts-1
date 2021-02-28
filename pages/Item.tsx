import React from 'react'
import {product} from '../types'
class Item extends React.Component<product>
{
  render()
  {
    let {x}=this.props
    return <div className="item">
      <div>{x.title}</div>
      <div>{x.new}</div>
      <div>
        <i className="fa fa-star"> </i> 
        <i className="fa fa-star"> </i> 
        <i className="fa fa-star"> </i> 
        <i className="fa fa-star"> </i> 
        <i className="fa fa-star"> </i> 
      </div>
      <div className="discount">{x.discount}</div>
      <div className="tags">{x.tags}</div>
      <div className="cart-btn">
        <i className="fa fa-shopping-cart"> </i> 
      </div>
    </div>
  }
}
export default Item;