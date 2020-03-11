import React,{Component} from 'react';
import './css/App.css';
import { connect } from "react-redux";


export class UserItem extends Component{


render(){

  return(
       
   <div id='User' key={this.props.id} >
   <div id='header'>
    <label id='name'>{this.props.name.length <= 0 ? 'No Name' : this.props.name }</label>
    <label id='prof'>{this.props.job}</label>
   </div>
   <div id='email'>
    <label>{this.props.email.length <= 0 ? 'No Email' :this.props.email}</label>
   </div>
   <div id='body'>
   <label>Bio...</label>
   <div id='bio_div'>
   <p id='page'>{this.props.bio <= 0 ? 'No Bio' : this.props.bio}</p>
   </div>
   </div>
   <button id="btn" onClick={(event)=>{event.preventDefault(); this.props.edit(this.props.id)}}>EDIT</button>
   </div>

  );
  }
 
}


export default connect()(UserItem);
