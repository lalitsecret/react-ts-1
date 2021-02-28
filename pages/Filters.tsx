import React from "react";

class Filters extends React.Component {
  render() {
    return (
      <div className="filters">
        <button>
          {" "}
          <i className=" fa fa-sort" />
        </button>
        <input placeholder="saerch..." />
      </div>
    );
  }
}
export default Filters;
