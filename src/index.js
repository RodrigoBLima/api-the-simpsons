import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "./Card";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
  }
  componentWillMount() {
    let INITIAL_URL = "https://thesimpsonsquoteapi.glitch.me/quotes";
    axios.get(INITIAL_URL).then(function(response) {
      console.log(response.data);
      this.setState({
        persons: response.data
      });
    });
  }
  render() {
    return (
      <div className="App">
      {this.state.persons.map(person)
        <Card />
      }
      </div>
    );
  }
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
