import React from "react";

export class FetchCurrenciesView extends React.Component {
  constructor(props) {
    super(props);

    this._handleOnChange = this._handleOnChange.bind(this);
    this._handleOnSubmit = this._handleOnSubmit.bind(this);
    this._displayCurrencies = this._displayCurrencies.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    //const { currencies } = nextProps;
    //currencies ? console.log(currencies) : null;
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

  _displayCurrencies() {
    const { currencies } = this.props;
    return currencies ? Object.keys(currencies).map(currencyName => <div align="center" key={currencyName}> {currencyName} : {currencies[currencyName]} </div>) : null;
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleOnSubmit}>
          <label>
            Currency:
            <input type="text" onChange={this._handleOnChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this._displayCurrencies()}
      </div>
    );
  }
}
