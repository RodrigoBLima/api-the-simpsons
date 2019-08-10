import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    let INITIAL_URL = "ausausah";

    axios.get(INITIAL_URL).then(function(response) {
      console.log(response.data);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
