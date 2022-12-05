import "./App.css";
import MultiTabView from "./components/MultiTabView";
import React from "react";


class App extends React.Component {
  
  render() {
    return (
      <div className="App mt-4">
        <MultiTabView/>
      </div>
    );
  }
}

export default App;
