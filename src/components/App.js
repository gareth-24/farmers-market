import React from "react";
import MarketControl from "./MarketControl";
import ProduceControl from "./ProduceControl";
import Header from "./Header";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <MarketControl />
      <ProduceControl />
    </React.Fragment>
  );
}

export default App;
