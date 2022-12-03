import "./App.css";
import MultiTabView from "./components/MultiTabView";
import Tab from "./components/Tab";
import React from "react";
import PolicyDetails from "./components/PolicyDetails";
import PolicyConfiguration from "./components/PolicyConfiguration";
import Association from "./components/Association";
import AssignedNodes from "./components/AssignedNodes";
import Assests from "./components/Assests";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 'PolicyDetails'
    }
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  }
  render() {
    return (
      <div className="App mt-4">
        <MultiTabView tabs={['PolicyDetails', 'PolicyConfigurations', 'Association','AssignedNodes','Assests']} selected={this.state.selected} setSelected={this.setSelected}>
          <Tab isSelected={this.state.selected === 'PolicyDetails'}>
            <PolicyDetails/>
          </Tab>
          <Tab isSelected={this.state.selected === 'PolicyConfigurations'}>
            <PolicyConfiguration/>
          </Tab>
          <Tab isSelected={this.state.selected === 'Association'}>
            <Association/>
          </Tab>
          <Tab isSelected={this.state.selected === 'AssignedNodes'}>
            <AssignedNodes/>
          </Tab>
          <Tab isSelected={this.state.selected === 'Assests'}>
            <Assests/>
          </Tab>
        </MultiTabView>
      </div>
    );
  }
}

export default App;
