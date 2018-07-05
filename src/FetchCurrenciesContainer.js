import React from "react";

import { FetchCurrenciesView } from "./FetchCurrenciesView";

export class FetchCurrenciesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      currencies: null
    };

    this._handleOnSubmit = this._handleOnSubmit.bind(this);
    this._handleOnChange = this._handleOnChange.bind(this);
  }

  _handleOnChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  fetchCurrencies(url) {
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => this.setState({ currencies: data.rates }))
    .catch(error => console.log("Something went wrong 2 ..."));
  }

  _handleOnSubmit(e) {
    e.preventDefault();

    const url = `https://api.openrates.io/latest?base=${this.state.text}`;
    console.log("url: " + url);
    this.fetchCurrencies(url);
  }

  render() {
    return (
      <FetchCurrenciesView
        onChange={this._handleOnChange}
        onSubmit={this._handleOnSubmit}
        currencies={this.state.currencies}
        text={this.state.text}
      />
    );
  }
}
