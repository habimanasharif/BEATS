import React from 'react';
import {GlobalProvider} from './context/Globalstate';
import Home from './components/home';


const App=()=>{
 
  
    return (
      <GlobalProvider>
        <Home/>
        
      </GlobalProvider>
    );


}

export default App;