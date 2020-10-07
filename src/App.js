import React from 'react';
import './css/style.css'
import Dashboard from './components/Post'
import storeInstance from './store/store'
import {StoreContext} from './context'


function App() {
  return (
    <StoreContext.Provider value={storeInstance}>
      <Dashboard/>
    </StoreContext.Provider>
  );
}

export default App;
