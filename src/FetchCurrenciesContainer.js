import React from "react";

import { FetchCurrenciesView } from "./FetchCurrenciesView";

export class FetchCurrenciesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: []
    };

    this._handleOnSubmit = this._handleOnSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.openrates.io/latest?base=USD")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ currencies: data.rates }))
      .catch(error => console.log("Something went wrong 2 ..."));
  }

  _handleOnSubmit(e) {
    e.preventDefault();
    console.log("Deger: " + e.target.value);
  }

  render() {
    return (
      <FetchCurrenciesView
        TRY={this.state.currencies.TRY}
        onSubmit={this._handleOnSubmit}
      />
    );
  }
}
