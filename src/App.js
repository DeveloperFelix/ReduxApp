import React,{Component} from 'react';
import { connect } from "react-redux";
import {UserItem} from './User';
import {getUserData} from './actions/index';
import editUserData from './actions/index';
import USER_UPDATED from './constants/action-types';
import { v4 as uuidv4 } from 'uuid';


 const mapDispatchToProps = (dispatch,ownProps) => ({
       
         handleClick: (arg) => {
              dispatch(editUserData(arg));
              },
         getUserData:() =>{
          dispatch(getUserData());
         }        
        
 });



const mapStateToProps = state => {
  return {users:state.users};
};

export class App extends Component{

componentDidMount(){
  this.props.getUserData();
}

render() {
     
    let sortedList = this.props.users.sort((a, b) => (a.name > b.name) ? 1 : -1);

    let sortedUserList = sortedList.map((item) => (

         <UserItem
           key={uuidv4()}
           id={item.id}
           unique_id={item.created_at}
           name={item.name}
           job={item.occupation}
           email={item.email}
           bio={item.bio}
           edit={this.props.handleClick}
         />

    ));;

  return (

     <div id='list_div'>
     {sortedUserList}
     </div>

  );

}
}



export default connect(mapStateToProps,mapDispatchToProps)(App);

