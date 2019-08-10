import React, { Component } from "react";
import ReactDOM from "react-dom";
//import axios from "axios";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 1,
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
          id: 2,
          image:
            "https://abrilexame.files.wordpress.com/2018/10/simpsons-trinta-anos-tv-cultura-vip1.png",
          name: "Bart",
          age: 9,
          parent: ["Homer", " Marge"],
          hair: "blond",
          checked: false,
          icon: "simpsonsIcons bart"
        },
        {
          id: 3,
          image:
            "https://abrilexame.files.wordpress.com/2018/10/simpsons-trinta-anos-tv-cultura-vip1.png",
          name: "Maggie",
          age: 2,
          parent: ["Homer", " Marge"],
          hair: "black",
          checked: true
        },

        {
          id: 4,
          image:
            "https://abrilexame.files.wordpress.com/2018/10/simpsons-trinta-anos-tv-cultura-vip1.png",
          name: "Patty",
          age: 37,
          parent: ["Jacqueline"],
          hair: "blond",
          checked: true
        },
        {
          id: 5,
          image:
            "https://abrilexame.files.wordpress.com/2018/10/simpsons-trinta-anos-tv-cultura-vip1.png",
          name: "Selma",
          age: 38,
          parent: ["Jacqueline"],
          hair: "blond",
          checked: false
        },

        {
          id: 6,
          image:
            "https://abrilexame.files.wordpress.com/2018/10/simpsons-trinta-anos-tv-cultura-vip1.png",
          name: "Rod",
          age: 9,
          parent: ["Ned"],
          hair: "blond",
          checked: true
        },
        {
          id: 7,
          image:
            "https://abrilexame.files.wordpress.com/2018/10/simpsons-trinta-anos-tv-cultura-vip1.png",
          name: "Todd",
          age: 8,
          parent: ["Ned"],
          hair: "blond",
          checked: true
        },

        {
          id: 8,
          image:
            "https://abrilexame.files.wordpress.com/2018/10/simpsons-trinta-anos-tv-cultura-vip1.png",
          name: "Abe",
          age: 65,
          parent: ["Root"],
          hair: "none",
          checked: true
        },
        {
          id: 9,
          image:
            "https://abrilexame.files.wordpress.com/2018/10/simpsons-trinta-anos-tv-cultura-vip1.png",
          name: "Mona",
          age: 65,
          parent: ["Root"],
          hair: "none",
          checked: false
        },
        {
          id: 10,
          image:
            "https://abrilexame.files.wordpress.com/2018/10/simpsons-trinta-anos-tv-cultura-vip1.png",
          name: "Jacqueline",
          age: 63,
          parent: ["Root"],
          hair: "none",
          checked: true
        },
        {
          id: 11,
          image:
            "https://abrilexame.files.wordpress.com/2018/10/simpsons-trinta-anos-tv-cultura-vip1.png",
          name: "Homer",
          age: 42,
          parent: ["Abe", " Mona"],
          hair: "none",
          checked: false,
          icon: "simpsonsIcons homer",
          enabled: false
        },
        {
          id: 12,
          image:
            "https://abrilexame.files.wordpress.com/2018/10/simpsons-trinta-anos-tv-cultura-vip1.png",
          name: "Marge",
          age: 35,
          parent: ["Jacqueline"],
          hair: "blond",
          checked: true,
          icon: "simpsonsIcons marge"
        },
        { name: "Ned", age: 40, parent: ["Root"], hair: "none", checked: true },

        {
          id: 13,
          image:
            "https://abrilexame.files.wordpress.com/2018/10/simpsons-trinta-anos-tv-cultura-vip1.png",
          name: "Apu",
          age: 40,
          parent: ["Root"],
          hair: "black",
          checked: true
        },
        {
          id: 14,
          image:
            "https://abrilexame.files.wordpress.com/2018/10/simpsons-trinta-anos-tv-cultura-vip1.png",
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
              <Button onClick={this.handleButton}>Ação</Button>
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
