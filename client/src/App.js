import React from "react";
import CardList from "./components/CardList";
import "./App.css";
import axios from "axios";
import AddCard from "./components/AddCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/posts")
      .then(res => {
        this.setState({
          cards: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  deleteCard = id => async () => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    await axios.get("http://localhost:5000/api/posts/").then(res => {
      this.setState({
        cards: res.data
      });
    });
  };
  getCards = () => {
    axios.get("http://localhost:5000/api/posts/");
  };
  addCard = card => async () => {
    await axios
      .post("http://localhost:5000/api/posts", card)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response));
    await axios.get("http://localhost:5000/api/posts").then(res => {
      this.setState({
        cards: res.data
      });
    });
  };
  render() {
    if (!this.state.cards) {
      return (
        <div>
          <h1>Loading Cards...</h1>
        </div>
      );
    } else {
      return (
        <div className="App">
          <AddCard addCard={this.addCard} />
          <CardList deleteCard={this.deleteCard} cardList={this.state.cards} />
        </div>
      );
    }
  }
}

export default App;
