import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    this.textInput.focus();
  }

  handleInput = (e) => {
    this.setState({
      inputValue: e.target.textContent,
    });
  };

  render() {
    const { removeCard, id } = this.props;
    return (
      <div className="card">
        <div
          className="card-text"
          ref={(input) => { this.textInput = input; }}
          contentEditable="true"
          placeholder="Введите название кaрточки"
          spellCheck="false"
          onInput={this.handleInput}
        />
        <div
          className="delete-icon remove-card"
          onClick={() => removeCard(id)}
        />
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  removeCard: PropTypes.func.isRequired,
};
