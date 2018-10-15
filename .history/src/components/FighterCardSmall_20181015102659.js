import React from "react";
import Flag from "react-flags";

export default class FighterCardSmall extends React.Component {
  state = {
    fighter: undefined
  };
  render() {
    return (
      <div className="fighter-card">
        <img 
        src={require("../../public/images/khabib_face.png")} 
        className="fighter-card-image"
        />
        <div className="fighter-card-body">
          <h1 className="fighter-card-body-name">Khabib Nurmagomedov</h1>
          <p className="fighter-card-body-record">27-0</p>
        </div>
      </div>
    );
  }
}