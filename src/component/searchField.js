import React from "react";

class SearchField extends React.Component {
  state = {
    entry: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      entry: value,
    });

    this.props.filter(value);
  };

  render() {
    return (
      <div className="searchField">
        <label>
          Search:
          <input
            type={"search"}
            onChange={this.handleInputChange}
            value={this.state.entry}
            autoFocus
          ></input>
        </label>
      </div>
    );
  }
}

export default SearchField;
