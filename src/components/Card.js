import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Card.css'

class Card extends React.Component{
  
  render(){
    return(
      
      <div className="card text-white bg-dark mb-3 shadow " id="card">
        <div id="tit">
  <div className="card-header bg-dark" >{this.props.title} </div>
  </div>
  <div className="card-body" id="bod">
    <p className="card-text text-dark">{this.props.body}</p>
  </div>
  </div>
  


    )
  }
} 
export default Card;