export type products=
{
  id:number;
  title:string;
  description:string;
  old:number;
  new:number;
  rating:number;
  discount:number;
  tags:string;
  category:string;
  image:string;
}
export type tags=
{
  t:string;
  c:number;
}
export type user={
  id:number;
  name:string;
  email:string;
  phone:number;
  password:string|number;
}
export type cart=products&user&{qty:number}
export type orders=products&user&{qty:number}
