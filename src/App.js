import React from "react";
import Main from "./main";
import './global/style.scss'
import Provider from './context/provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
