import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';




// export let renderTree = (state) => {



  ReactDOM.render( // рендер значит отрисовать
  <React.StrictMode>


    <Provider store={store} >
    
    <App
    store={store}
    />
  
    </Provider>

    
  </React.StrictMode>, document.getElementById('root')); 



// }


// store.subscribe( () => {
//   let state = store.getState()
//   renderTree(state);
// });


