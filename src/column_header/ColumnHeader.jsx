import React from 'react';
import PropTypes from 'prop-types';
import './column_header.css';

export default class ColumnHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isNameAdded: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.currentTarget.textContent,
    });
  };

  handleAddColumnName = () => {
    const { handleAddColumnClick } = this.props;
    handleAddColumnClick();
    this.setState({
      isNameAdded: true,
    });
  };

  componentDidMount = () => {
    this.textInput.focus();
  };

  render() {
    const { handleRemoveColumn } = this.props;
    const { isNameAdded } = this.state;
    const none = isNameAdded ? 'none' : '';
    const type = isNameAdded ? 'header-text' : 'card column-name';

    return (
      <div className="column-header">
        <div
          className={type}
          ref={(input) => { this.textInput = input; }}
          contentEditable="true"
          spellCheck="false"
          placeholder="Введите название колонки"
          onInput={this.handleChange}
        />
        <button
          type="button"
          className={'add-column ' + none}
          onClick={this.handleAddColumnName}
        >
          Добавить колонку
        </button>
        <div
          className="delete-icon remove-column"
          onClick={handleRemoveColumn}
        />
      </div>
    );
  }
}

ColumnHeader.propTypes = {
  handleAddColumn: PropTypes.func.isRequired,
  handleAddColumnClick: PropTypes.func.isRequired,
  handleRemoveColumn: PropTypes.func.isRequired,
};
