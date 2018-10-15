import React from "react";

export default class FighterCardSmall extends React.Component {
  state = {
    fighter: undefined
  };
  render() {
    return (
      <div>
        <img src={require("../../public/images/khabib_face.png")} />
        <h1>Khabib Nurmagomedov</h1>
        <p>27-0</p>
      </div>
    );
  }
}
