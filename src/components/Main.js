import React from 'react'
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import './Card.css'
import Footer from './Footer';
class Main extends React.Component{
  constructor(){
    super();
    this.state={
      items :
      [ {key: 0, title: 'Sign Up & Check Credit Score', body : 'Sign-up to avail products from across diverse loans, properties and being connected to over 50 lenders. In addition, check your Credit Score without impacting it, and get the best loan offer suited to your needs.'},
      {key: 1, title: 'PAN Card Update', body : 'Update your PAN Crd with us so that we can perform a soft-check for your Credit Score. Upload a copy from your gallery anytime, anywhere.'},
      {key: 2, title: 'Address Proof Update', body : 'Update your address proof by uploading either your Driving License / Registered Rent Agreement/ Utility Bill. You will, in no time, be made a loan offer to get closer to your dream home.'},
      {key: 3, title: 'Loan Offer', body : 'We are delighted to offer you a loan for the purchase of your dream home. You are now only two steps away: you will be required to e-sign the offer in acceptance and will be provided with a Provisional Sanction Letter.'},
      {key: 4, title: 'E-Sign', body : 'We are glad to know of your acceptance of our loan offer. Please e-sign the same, so that we can proceed with sharing a Provisional Sanction Letter.'},
      {key: 5, title: 'Sanction Letter', body : 'Congratulations! You are now officially one step away from realising what you dreamt! Here\'s presenting a Provisional Sanction Letter to be produced at the bank, and have them process your loan.'}
      ]
    }
    
  }
  render(){
    return(<div >
      <div className="container text-center">
        <Header/>
      </div>
      <div className="container text-center" id="cardbody" >
        
        <div className="row">
          <div className="col-sm-4 ">
            <Card key={this.state.items[0].key} title={this.state.items[0].title} body={this.state.items[0].body}/> 
          </div>
          <div className="col-sm-4">
            <Card key={this.state.items[1].key} title={this.state.items[1].title} body={this.state.items[1].body}/> 
          </div>
          <div className="col-sm-4">
            <Card key={this.state.items[2].key} title={this.state.items[2].title} body={this.state.items[2].body}/> 
          </div>
        </div> 
        <div className="row">
          <div className="col-sm-4">
            <Card key={this.state.items[3].key} title={this.state.items[3].title} body={this.state.items[3].body}/> 
          </div>
          <div className="col-sm-4">
            <Card key={this.state.items[4].key} title={this.state.items[4].title} body={this.state.items[4].body}/> 
          </div>
          <div className="col-sm-4">
            <Card key={this.state.items[5].key} title={this.state.items[5].title} body={this.state.items[5].body}/> 
          </div>
        </div> 
      </div>
      <div>
        <Footer/>
      </div>
      </div>




    )
  }
}
export default Main;