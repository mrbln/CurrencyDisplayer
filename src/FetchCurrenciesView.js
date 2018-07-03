import React from "react";

export class FetchCurrenciesView extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { onSubmit } = this.props;
    e.preventDefault();

    if (onSubmit) {
      onSubmit(e);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Currency:
            <input type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2 align="center">TRY: {this.props.TRY}</h2>
      </div>
    );
  }
}
