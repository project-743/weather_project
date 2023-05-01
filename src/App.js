import React from 'react';
import Navbar from './component/navbar';
import Demo from './component/current_location/current.jsx';
import { useState } from "react";
import { UserContext } from "./component/current_location/SampleContexts.js";

function App() {
  const [value, setValue] = useState("default context value");

  return (
    <div >

      <UserContext.Provider value={{ value, setValue }}>
        <section id="component">
          <Navbar />
        </section>

        <Demo />
      </UserContext.Provider>


    </div>
  );
}

export default App;
