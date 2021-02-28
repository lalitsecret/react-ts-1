import React from "react";
import { connect } from "react-redux";
import { LeftProps } from "../types";
class Left extends React.Component<Props> {
  render() {
    let { tags, tagname } = this.props;
    return (
      <div className="left">
        {tags.map(x => (
          <p key={x.t}>
            {x.t} <span>{x.c}</span>
          </p>
        ))}
      </div>
    );
  }
}
export default connect(state => state)(Left);
