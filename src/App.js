import "./App.css";
import MultiTabView from "./components/MultiTabView";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditPage from "./components/EditPage";

class App extends React.Component {
  render() {
    return (
      <div className="App mt-4">
        <Router>
          <Routes>
            <Route path="/" element={<MultiTabView />}></Route>
            <Route path="/edit" element={<EditPage />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
