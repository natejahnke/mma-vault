import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import FighterCardSmall from "./FighterCardSmall";
import lightweights from "../../lightweights.json";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class FightersHome extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    lightweights
  };
  handleAddLightweights = () => {
    this.setState(() => ({ lightweights: [] }));
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };
  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div>
        <div className="container">
          {this.state.lightweights.map(lightweight => (
            <FighterCardSmall
              first_name={lightweight.first_name}
              last_name={lightweight.last_name}
              image={lightweight.image}
              wins={lightweight.wins}
              losses={lightweight.losses}
              rank={lightweight.rank}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FightersHome;