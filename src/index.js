import React, { Component } from "react";
import ReactDOM from "react-dom";
//import axios from "axios";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: "Lisa",
          image:
            "https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2019/04/lisa-1.jpg",
          age: 10,
          parent: ["Homer", " Marge"],
          hair: "blond",
          checked: true,
          icon: "simpsonsIcons lisa"
        },
        {
          name: "Bart",
          age: 9,
          parent: ["Homer", " Marge"],
          hair: "blond",
          checked: false,
          icon: "simpsonsIcons bart"
        },
        {
          name: "Maggie",
          age: 2,
          parent: ["Homer", " Marge"],
          hair: "black",
          checked: true
        },

        {
          name: "Patty",
          age: 37,
          parent: ["Jacqueline"],
          hair: "blond",
          checked: true
        },
        {
          name: "Selma",
          age: 38,
          parent: ["Jacqueline"],
          hair: "blond",
          checked: false
        },

        { name: "Rod", age: 9, parent: ["Ned"], hair: "blond", checked: true },
        { name: "Todd", age: 8, parent: ["Ned"], hair: "blond", checked: true },

        { name: "Abe", age: 65, parent: ["Root"], hair: "none", checked: true },
        {
          name: "Mona",
          age: 65,
          parent: ["Root"],
          hair: "none",
          checked: false
        },
        {
          name: "Jacqueline",
          age: 63,
          parent: ["Root"],
          hair: "none",
          checked: true
        },
        {
          name: "Homer",
          age: 42,
          parent: ["Abe", " Mona"],
          hair: "none",
          checked: false,
          icon: "simpsonsIcons homer",
          enabled: false
        },
        {
          name: "Marge",
          age: 35,
          parent: ["Jacqueline"],
          hair: "blond",
          checked: true,
          icon: "simpsonsIcons marge"
        },
        { name: "Ned", age: 40, parent: ["Root"], hair: "none", checked: true },

        {
          name: "Apu",
          age: 40,
          parent: ["Root"],
          hair: "black",
          checked: true
        },
        {
          name: "Manjula",
          age: 40,
          parent: ["Apu"],
          hair: "brown",
          checked: false
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.persons.map(person => (
          <div>
            <Card>
              <CardImg top width="100%" src={person.image} />
              <CardBody>
                <CardTitle>{person.name}</CardTitle>
                <CardText>{person.age}</CardText>
                <CardText>{person.parent}</CardText>
                <CardText>{person.icon}</CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
