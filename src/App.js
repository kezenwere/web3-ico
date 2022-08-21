import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import scrollToComponent from 'react-scroll-to-component';
import './css/App.css';
import Start from './components/Start';
import About from './components/About';
import Whitepaper from './components/Whitepaper';
import Roadmap from './components/Roadmap';
import Contribute from './components/Contribute';
import Team from './components/Team';
// import web3 from './web3';
// import ico from './ethereum/ico';

class App extends Component {
  myBalance = 20;
  myBalanceEther = 1000;
  myAddress = "akjhqwwdnwjkdhkjhkjsajasnddsadsa";

  // async componentDidMount() {
  //   let accounts = await web3.eth.getAccounts();
  //   this.myBalance = await ico.methods.myBalance().call({from: accounts[0]});
  //   this.myBalance = web3.utils.fromWei(myBalance, 'ether')

    
  //   this.myAddress = await ico.methods.myAddress().call({from: accounts[0]});

    
  //   let myBalanceEther = await web3.eth.getBalance(accounts[0]);
  //   myBalanceEther = web3.utils.fromWei(myBalanceEther, 'ether')
  // }

  render() {
    return (
      <div>
        <nav>

          <a href="/" className="titleICO">
            <i className="material-icons">group_work</i>
            <div>DEMOICO</div> 
          </a>

          {this.myBalance}

          <div className="middleNav">
            <a onClick={() => scrollToComponent(this.About, { offset: -70, align: 'top', duration: 1500})}><Button>About</Button></a>
            <a onClick={() => scrollToComponent(this.Whitepaper, { offset: -70, align: 'top', duration: 1500})}><Button>Whitepaper</Button></a>
            <a onClick={() => scrollToComponent(this.Roadmap, { offset: -70, align: 'top', duration: 1500})}><Button>Roadmap</Button></a>
            <a onClick={() => scrollToComponent(this.Contribute, { offset: -70, align: 'top', duration: 1500})}><Button>Contribute</Button></a>
            <a onClick={() => scrollToComponent(this.Team, { offset: -70, align: 'top', duration: 1500})}><Button>Team</Button></a>
          </div>

          <div className="rightNav">
            <i className="material-icons">account_box</i>

            <div className="myAccountBox">
              <div className="address"> {"Address: " + this.myAddress} </div>
              <div className="eth"> {"My Ether: " + this.myBalanceEther} </div>
              <div className="dctoken"> {"My DC: " + this.myBalance} </div>
            </div>
          </div>

        </nav>

        <div id="startDiv"> <Start/> </div>
        <div ref={(section) => { this.About = section; }}><About/></div>
        <div ref={(section) => { this.Whitepaper = section; }}> <Whitepaper/> </div>
        <div ref={(section) => { this.Roadmap = section; }}> <Roadmap/> </div>
        <div ref={(section) => { this.Contribute = section; }}> <Contribute/> </div>
        <div ref={(section) => { this.Team = section; }}> <Team/> </div>

      </div>
    );
  }
}

export default App;
