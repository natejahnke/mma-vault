import React from "react";

const FighterCardSmall = (props) => (
      <div className="fighter-card">
        <div className="fighter-card-image-container">
          <img 
          src={props.image} 
          className="fighter-card-image"
          />
          {/* <div className="fighter-card-image-rank">1</div> */}
        </div>
          <div className="fighter-card-body">
            {/* <h1 className="fighter-card-body-name"><br/></h1>  */}
            <div>
              <p className="fighter-card-body-name">{props.first_name}</p>
            </div>
              <p className="fighter-card-body-name">{props.last_name}</p>
              <p className="fighter-card-body-record">{props.wins}-{props.losses}<span className="flag-icon flag-icon-ru"></span></p>
            
          </div>
      </div>
);

export default FighterCardSmall;


{/* <div className="fighter-card">
        <img 
        src={require("../../public/images/khabib_face.png")} 
        className="fighter-card-image"
        />
        <div className="fighter-card-body">
          <h1 className="fighter-card-body-name">Khabib Nurmagomedov</h1>
          <p className="fighter-card-body-record">27-0<span className="flag-icon flag-icon-ru"></span></p>
          
        </div>
      </div> */}