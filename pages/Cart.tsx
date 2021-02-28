import React from "react";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <h1>total order</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>qty</th>
              <th>total</th>
              <th>products</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Cart;
