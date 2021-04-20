// TODO: créer une navbar etc

import React from 'react';
import './App.css';
import Header from './component/Header';
import Foot from './component/Foot';
import './index.css';
import FriendList from './component/FriendList';

function App() {
  return (
    <div id="root">
    <Header></Header>
    <FriendList></FriendList>
    <Foot></Foot>
    </div>
  );
}

export default App;