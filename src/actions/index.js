import {GET_USERS,USER_UPDATED,ERR} from '../constants/action-types';



export function getUserData() {
  return function(dispatch){
  return fetch("https://ti-react-test.herokuapp.com/users")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_USERS, payload: json });
    });
  };
}


export default function editUserData(id) {

  return function(dispatch){

  return fetch("https://ti-react-test.herokuapp.com/users/"+id+"",{
            method: 'PATCH',
            body: JSON.stringify({
             name:"ALPHA ALPHA",
             email:'sample@gmail.com',
             occupation:"Hunter",
             bio:'LIVE FREE'
            }),
            headers:{
              "Content-type": "application/json; charset=UTF-8"
            }
          })


    .then(response => response.json())
    .then(json => {
       dispatch({ type: USER_UPDATED, payload: json });
    })
    .catch(error => {
        dispatch({ type: ERR, payload: null });
    });
  };
}

