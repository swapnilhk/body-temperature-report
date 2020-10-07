import React from 'react';
import './styles.css';
import Navbar from "./Navbar"
import RecordTemperature from "./RecordTemperature"

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <RecordTemperature/>
    </React.Fragment>
  );
}

export default App;
