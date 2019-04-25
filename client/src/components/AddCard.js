import React from "react";

class AddCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        title: "",
        contents: ""
      }
    };
  }
  onChange = e => {
    this.setState({
      card: {
        ...this.state.card,
        [e.target.name]: e.target.value
      }
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addCard(this.state.card)();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            type="text"
            name="title"
            value={this.state.card.title}
            placeholder="title"
          />
          <input
            onChange={this.onChange}
            type="text"
            name="contents"
            value={this.state.card.contents}
            placeholder="contents"
          />
          <button type="submit">Add Card</button>
        </form>
      </div>
    );
  }
}
export default AddCard;
