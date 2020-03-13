import {GET_USERS,USER_UPDATED,ERR} from '../constants/action-types';

const initialState = {	
  type:GET_USERS,
  users: []
};


function rootReducer(state = initialState, action) {

  if (action.type === GET_USERS) {
    return Object.assign({}, state, {
      users: state.users.concat(action.payload)
    });
  }else if(action.type === USER_UPDATED){
    return Object.assign({}, state, {
      users: state.users.concat(action.payload)
    });
  }else if(action.type === ERR){
     return Object.assign({}, state, {
      users: state.users.concat(action.error)
    });
  }else{

    return state;
}

};

export default rootReducer;