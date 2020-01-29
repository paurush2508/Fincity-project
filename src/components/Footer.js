import React from 'react'
import './Card.css'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
class Footer extends React.Component{
  render(){
    return(
           <div id="foot">
            <div className="row">
              <div className="col-md-4" id="first">
                <img src="https://fincity.com/static/home_page/images/Fincity%20Logo.svg" style={{width: '100px',height: '50px'}}/ >
              <Map google={this.props.google} zoom={18}
                initialCenter={{
                lat: 12.971988,
                lng: 77.597315
                }} style={{width: '250px',height: '300px'}}/>
              
              </div>
              <div className="col-md-4" id="second">
                <div className="row">
                <div className="col-mid-4" id="a">
                  
                    <p><strong>Email ID: </strong>contact@fincity.com</p>
                    <p><strong>Phone: </strong>080-40828400</p>
                    <p><label><strong>Address: </strong></label><p>33/1,3rd Floor, Vittal Mallya Road,<br/> (Near UB City),<br/> Bangalore, 560001</p></p>
                 
                </div>
                <div className="col-mid-4" id="b">
                  
                  <p><strong>Company</strong></p>
                  <p>About Us</p>
                  <p>Terms of Use</p>
                  <p>Privacy Policy</p>
               
                </div>
                <div className="col-mid-4" id="c">
                
                  <p><strong>Products</strong></p>
                  <p>Home Loan</p>
                  <p>Salaried</p>
                  <p>Self-Employed</p>
                  <p>Pradhan Mantri Awas Yojana</p>
                  
                </div>

                </div>
                
              </div>
              <div className="col-md-4" id="third">
              <button type="button" id="car1" class="btn btn-info">Career</button>
              <button type="button" id="car2" class="btn btn-info">Business Partner Registration</button>
              <br/>
              <br/>
              <br/>
              <img src="https://www.cibil.com/resources/cibil/img/lp/choose-subscription/CIBIL-Logo.png" id="i1" style={{width: '120',height: '50px'}}/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Experian_logo.svg" id="i2" style={{width: '120px',height: '50px'}}/>
              </div>
            </div> 



          </div>

    )
  }
  }
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCKtcJmqGRMjsHodE18_J_9ysqweniCFxI',
    version: 3.31
   })(Footer);
