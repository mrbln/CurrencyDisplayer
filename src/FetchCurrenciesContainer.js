import React from "react";

import { FetchCurrenciesView } from "./FetchCurrenciesView";

export class FetchCurrenciesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      currencies: []
    };

    this._handleOnSubmit = this._handleOnSubmit.bind(this);
    this._handleOnChange = this._handleOnChange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.openrates.io/latest?base=USD")
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
    e.preventDefault();
    console.log(this.state.text);
  }

  render() {
    return (
      <FetchCurrenciesView
        onChange={this._handleOnChange}
        onSubmit={this._handleOnSubmit}
        TRY={this.state.currencies.TRY}
      />
    );
  }
}
