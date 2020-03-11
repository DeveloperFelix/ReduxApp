import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {Provider} from 'react-redux';
import store from './store/index';
import App from'./App';

class AppList extends Component{


render(){

   return(
  
     <Provider store={store}>

     <App/>

     </Provider>

     );
}
   	
}

ReactDOM.render(<AppList/>,document.getElementById('root'));


