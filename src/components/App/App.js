import React from "react";
import Header from "../Header/Header";
import Season from "../Season/Season";
function App() {
  return(
    <React.Fragment>
      <Header/>
      <Season seasonData={{title: "1st Season", id:0}}/>
      <Season seasonData={{title: "2nd Season", id:1}}/>
      <Season seasonData={{title: "3rd Season", id:2}}/>
      <Season seasonData={{title: "4th Season", id:3}}/>
      <Season seasonData={{title: "5th Season", id:4}}/>
      <Season seasonData={{title: "6th Season", id:5}}/>
      <Season seasonData={{title: "7th Season", id:6}}/>
    </React.Fragment>
  );
}

export default App;
