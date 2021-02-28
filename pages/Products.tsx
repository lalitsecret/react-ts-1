import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { ProductsProps } from "../types";
class Products extends React.Component<ProductsProps> {
  render() {
    let { products, search, col, order, tagname } = this.props;
    return (
      <div className="products">
        {products.map(x => (
          <Item key={x.id} x={x} />
        ))}
      </div>
    );
  }
}
export default connect(state => state)(Products);
