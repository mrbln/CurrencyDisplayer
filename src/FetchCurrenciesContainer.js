import React from "react";

import { FetchCurrenciesView } from "./FetchCurrenciesView";

export class FetchCurrenciesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "USD",
      base: "USD",
      currencies: []
    };

    this._handleOnSubmit = this._handleOnSubmit.bind(this);
    this._handleOnChange = this._handleOnChange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.openrates.io/latest?base=" + this.state.base)
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ currencies: data.rates }))
      .catch(error => console.log("Something went wrong 2 ..."));
  }

  _handleOnChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  _handleOnSubmit(e) {
    const { text } = this.state;

    if (text) {
      fetch("https://api.openrates.io/latest?base=" + text)
        .then(response => {
          return response.json();
        })
        .then(
          data =>
            data ? this.setState({ currencies: data.rates, base: text }) : null
        )
        .catch(error => console.log("Something went wrong 2 ..."));
    } else {
      alert("Please give a currency type!");
    }
  }

  render() {
    return (
      <FetchCurrenciesView
        onChange={this._handleOnChange}
        onSubmit={this._handleOnSubmit}
        currencies={this.state.currencies}
        text={this.state.text}
        base={this.state.base}
      />
    );
  }
}