import React from "react";

export class FetchCurrenciesView extends React.Component {
  constructor(props) {
    super(props);

    this._handleOnChange = this._handleOnChange.bind(this);
    this._handleOnSubmit = this._handleOnSubmit.bind(this);
  }

  _handleOnSubmit(e) {
    const { onSubmit } = this.props;
    e.preventDefault();
    console.log(e.target.value);
    if (onSubmit) {
      onSubmit(e);
    }
  }

  _handleOnChange(e) {
    const { onChange } = this.props;

    console.log(e.target.value);

    if (onChange) {
      onChange(e);
    }
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
        <h2 align="center">TRY: {this.props.TRY}</h2>
      </div>
    );
  }
}
