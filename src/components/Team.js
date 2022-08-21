import React, { Component } from 'react';

class Team extends Component {

  render() {

    return (
        <div>
          <div className="team"> Team </div>
          <div className="teamSub"> Our people are our greatest asset and biggest differentiator.</div>
          <div className="teamSub"> They also believe in having a lot of fun along the way. </div>

          <div className="teamPics">

            <div className="circlePic">
              <img src="https://www.nicepng.com/png/full/810-8105444_male-placeholder.png"/>
              <div className="userName"> Donald Trump </div>
              <div className="userText"> The CEO and bla bla, Before </div>
              <div className="userText">  Owner and  ... </div>
            </div>

            <div className="circlePic">
              <img src="https://www.nicepng.com/png/full/810-8105444_male-placeholder.png"/>
              <div className="userName"> Barack Obama </div>
              <div className="userText"> The CEO and bla bla, Before </div>
              <div className="userText">  Owner and  ... </div>
            </div>

            <div className="circlePic">
              <img src="https://www.nicepng.com/png/full/810-8105444_male-placeholder.png"/>
              <div className="userName"> Angela Merkel </div>
              <div className="userText"> The CEO and bla bla, Before </div>
              <div className="userText">  Owner and  ... </div>
            </div>
          </div>

        </div>

    );
  }
}

export default Team;
