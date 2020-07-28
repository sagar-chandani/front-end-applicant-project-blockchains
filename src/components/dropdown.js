import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/dropdown.css";

class Dropdown extends Component {
  static propTypes = {
    /**
     * The items to display in the dropdown menu
     */
    colorsList: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      listItems: [],
      suggestions: [],
      text: "",
      colorSelected: false,
      searchQuery: "",
    };

    this.colorRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      listItems: this.props.colorsList,
    });
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      console.log(this.state.listItems);
      if (value !== null || value.match(/^ *$/) === null) {
        const regex = new RegExp(`${value}`, "i");
        suggestions = this.state.listItems.sort().filter((v) => regex.test(v));
      }
    }
    this.setState(() => ({
      suggestions,
      text: value,
      colorSelected: false,
      searchQuery: value,
    }));
    if (!this.state.colorSelected) {
      this.colorRef.current.style.display = "none";
    }
  };

  handleEnter = (e) => {
    console.log(e);
    console.log(e.currentTarget);
    const value = e.target.value;
    if (e.keyCode === 13) {
      this.setState(() => ({
        text: value,
        suggestions: [],
        colorSelected: true,
      }));
    }
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
      colorSelected: true,
    }));

    console.log(this.colorRef);
    this.colorRef.current.style.display = "inline-block";
    this.colorRef.current.style.backgroundColor = value;
  }

  renderSuggestions() {
    const { suggestions, searchQuery } = this.state;
    console.log(suggestions + "bolded == >>" + searchQuery);
    this.boldedString = (item) => {
      const value = searchQuery;
      const regex = new RegExp(`${value}`, "i");
      const match = item.match(regex);
      if (match != null && (value !== null || value.match(/^ *$/) === null)) {
        const parts = item.split(match[0], 2);
        return (
          <li
            onKeyDown={this.handleEnter}
            tabIndex="0"
            onClick={() => this.suggestionSelected(item)}
          >
            {parts[0]}
            <strong>{match[0]}</strong>
            {parts[1]}
          </li>
        );
      }
      return (
        <li
          onKeyDown={this.handleEnter}
          tabIndex="0"
          onClick={() => this.suggestionSelected(item)}
        >
          {item}
        </li>
      );
    };

    if (this.state.colorSelected && suggestions.length === 0) {
      return null;
    } else if (suggestions.length === 0) {
      return null;
    } else {
      return (
        <ul className="Dropdown-content">
          {suggestions.map((item) => this.boldedString(item))}
        </ul>
      );
    }
  }

  render() {
    const { text } = this.state;
    return (
      <div className="Dropdown">
        <h2>Dropdown List for Colors</h2>
        <div className="show-color-in-circle" ref={this.colorRef} />
        <input
          tabIndex="0"
          placeholder="Search your color here..."
          value={text}
          onChange={this.onTextChanged}
          type="text"
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default Dropdown;
