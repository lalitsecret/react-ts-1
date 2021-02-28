import data from './data'
import {state,action} from '../types'



const initialState:state={
  products:data.products,
  tags:data.tags,
  cart:data.cart,
  orders:data.orders,
  users:data.users,
  filters:data.filters,
  col:"id",
  order:true,
  tagname:"",
  search:"",
  loggedin:false,
  user:{id:0,name:"",email:"",phone:"",password:""}
}

const reducer=(state=initialState,action:action):state=>{
  switch(action.type)
  {
    default:
      return state
  }
}
export default reducer