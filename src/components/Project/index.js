import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div
      className="card"
      style={{
        backgroundPortrait: props.portrait ? `url(${props.portrait})` : "none"
      }}
    >
      {!props.portrait && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pick"
      />
    </div>
  );
}

export default Card;
