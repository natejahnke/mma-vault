import React from "react";

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
          <h1 className="fighter-card-name">Khabib Nurmagomedov</h1>
          <p>27-0</p>
        </div>
      </div>
    );
  }
}
