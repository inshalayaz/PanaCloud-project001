import React from 'react';
import './App.css';
import Hello from './Hello'

function App({name,age}) {
  return  <div> 
    Hello from the other side {name} {age-5}
    <Hello firstName = {name}/>
  </div>
}

export default App;
