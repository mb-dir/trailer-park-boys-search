import React from "react";
import Header from "../Header/Header";
import Season from "../Season/Season";
function App() {
  return(
    <React.Fragment>
      <Header/>
      <Season seasonData={"1st Season"}/>
      <Season seasonData={"2nd Season"}/>
      <Season seasonData={"3rd Season"}/>
      <Season seasonData={"4th Season"}/>
      <Season seasonData={"5th Season"}/>
      <Season seasonData={"6th Season"}/>
      <Season seasonData={"7th Season"}/>
    </React.Fragment>
  );
}

export default App;
