import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import scrollToComponent from 'react-scroll-to-component';
import { Player, BigPlayButton, ControlBar } from 'video-react';
// import web3 from '../web3';
// import ico from '../ethereum/ico';


class Start extends Component {
  totalSupply = 0;
  contributers = "";
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  // async componentDidMount(){

  //   this.contributers = await ico.methods.allContributers().call();
  //   this.totalSupply = await ico.methods.totalSupply().call();
  //   this.totalSupply = web3.utils.fromWei(totalSupply, 'ether');
  
  //   let icoEndTime = await ico.methods.icoEnds().call();
  //   let timeNow = Math.round((new Date()).getTime() / 1000);
  //   let timeLeft = icoEndTime - timeNow;
  
  //   let date = new Date(timeLeft*1000);
  
  //   this.days = date.getDate();
  //   this.hours = date.getHours();
  //   this.minutes = date.getMinutes();
  //   this.seconds = date.getSeconds();
  
  //   this.setState({contributers, totalSupply, days, hours, minutes, seconds})
  // }

  render() {
    return (
      <div>

        <div class="container">
          <div class="containerMiddle">
            <div class="header1">#ICO Landing page for your cryptocurrency project</div>
            <div class="flex">
              <div class="textArea">
                <div>Decentralized Demo Platform for ICO Developers, Advisors, Crypto-Experts
                     and Investors. </div>
                <div class="buttonContainer">
                  <div> <Button variant="contained" color="primary"> SIGN UP TO JOIN </Button> </div>
                </div>
              </div>

              <div class="movieContainer">
                <Player poster="https://blog.sodio.tech/wp-content/uploads/2018/03/ethex-is-decentralized2x.1551cb1c.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" >
                  <BigPlayButton position="center" />
                   <ControlBar autoHide={false} disableCompletely={true} />
                </Player>
              </div>
            </div>

            <div class="tokenSaleContainer flex">
              <div class="tokenSaleLeftSide">
                <div class="flex space-between">
                  <div class="tokensSold">Total-Supply</div>
                  <div class="contributors">Contributers:<b> {this.contributers}</b></div>
                </div>
                <div class="totalSuppy"> {this.totalSupply}<b> DC</b></div>
                <div ><Button variant="contained" color="primary" onClick={() => scrollToComponent(this.Contribute, { offset: -70, align: 'top', duration: 1500})}>BUY TOKENS | 25% Bonus</Button></div>
              </div>

              <div class="tokenSaleRightSide">
                <div class="titleTokenSale">TOKEN SALE IS LIVE</div>
                <div class="tokenSaleEnds"> TOKEN SALE ENDs IN </div>
                <div class="time flex space-around">
                  <div>
                    <div class="headerTime">{this.days}</div>
                    <div>Days</div>
                  </div>
                  <div>
                    <div class="headerTime" >{this.hours}</div>
                    <div>Hours</div>
                  </div>
                  <div>
                    <div class="headerTime" >{this.minutes}</div>
                    <div>Min</div>
                  </div>
                  <div>
                    <div class="headerTime" >{this.seconds}</div>
                    <div>Sec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="Icons space-around flex">
          <i class="fab fa-bitcoin"></i>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-telegram-plane"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-reddit-alien"></i>
        </div>

      </div>

    );
  
  }

}

export default Start;
