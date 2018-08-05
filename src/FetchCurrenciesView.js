import React from "react";

var divStyle = {
  margin: "auto",
  position: "absolute",
  left: "40%",
  bottom: 0
};

export class FetchCurrenciesView extends React.Component {
  constructor(props) {
    super(props);

    this._handleOnChange = this._handleOnChange.bind(this);
    this._handleOnSubmit = this._handleOnSubmit.bind(this);
  }

  _handleOnSubmit(e) {
    const { onSubmit } = this.props;
    e.preventDefault();

    if (onSubmit) {
      onSubmit(e);
    }
  }

  _handleOnChange(e) {
    const { onChange } = this.props;

    if (onChange) {
      onChange(e);
    }
  }

  _displayCurrencyValue() {
    const { base, currencies, text } = this.props;

    if (currencies && base.toUpperCase() === "TRY") {
      return (
        <h2 align="center">
          <p>1 {base.toUpperCase()} = 1 TRY</p>
        </h2>
      );
    } else if (currencies) {
      return (
        <h2 align="center">
          <p>
            1 {base.toUpperCase()} = {currencies.TRY} TRY
          </p>
        </h2>
      );
    } else {
      return (
        <div align="center">
          <p>
            You gave wrong currency type! Please give the correct type of
            currency.
          </p>
        </div>
      );
    }
  }

  render() {
    const { currencies, text } = this.props;

    return (
      <div>
        <form align="center" onSubmit={this._handleOnSubmit}>
          <label>
            Currency:
            <input type="text" onChange={this._handleOnChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this._displayCurrencyValue()}
        <p style={divStyle}>Initially given values are based on USD</p>
      </div>
    );
  }
}
