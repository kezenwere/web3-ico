import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
// import web3 from '../web3';
// import ico from '../ethereum/ico';

class Contribute extends Component {
  value = '';
  statusError = false;
  statusLoading = false;
  success = false;
  errorMessage = '';

  onSubmit = async event => {
    event.preventDefault();

    // try {
    //   statusError = false;
    //   statusLoading = true;
    //   let accounts = await web3.eth.getAccounts();
    //   await ico.methods.buyTokens().send({
    //     from: accounts[0],
    //     value: web3.utils.toWei(this.value, 'ether')
    //   });

    //   statusLoading = false;
    //   success = true;
    // } catch (err) {
    //   statusError = true;
    //   statusLoading = false;
    //   success = false;
    //   errorMessage = "ERROR " + err.message;
    // }

  };

  render() {
    return (
      <div>
        <div class="contribute">Contribute</div>
          <div class=" contributeContainer">
            <form onSubmit= {this.onSubmit}>
              <div class="buyCoins">
                <div class="amountToBuy">Amount of ether to buy:</div>
                <TextField value={this.value} onChange= {event => this.value = event.target.value}> </TextField>
                <div> ≈ {this.value * 124} DC </div>
                <div class="etherDC"> (1 ETH ≈ 100 + 25 (Bonus) DC) </div>
              </div>
              <div class="buttonBuy">
                <Button type="submit" variant="contained" color="primary" value="Submit">Buy DC Tokens | 25% Bonus </Button>
              </div>
            </form>


            {this.statusError ? (
            <div class="flex errorMessage">
              <i class="material-icons">error_outline</i>
              <div >{this.errorMessage}</div>
            </div>)
            : null}

            {this.statusLoading ? (
            <div class="flex loadingContainer">
              <div>
                <div class="loadingText"> Waiting For Confirmation</div>
                <div class="loadTextSub">(this can take up to 30 seconds)</div>
              </div>
              <CircularProgress/>
            </div>)
            : null}

            {this.success ? (
            <div class="flex successfully">You successfully bought DC Coins!</div>)
            : null}

        </div>
      </div>
    );
  }
}

export default Contribute;
