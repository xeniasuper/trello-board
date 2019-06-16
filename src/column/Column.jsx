import React from 'react';
import PropTypes from 'prop-types';
import Cards from '../cards/Cards';
import ColumnHeader from '../column_header/ColumnHeader';
import './column.css';

export default class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNameAdded: false,
      cards: null,
    };
  }

  handleAddColumnClick = () => {
    const { id } = this.props;
    this.setState({
      isNameAdded: true,
      cards: <Cards id={id} />,
    });
  };

  render() {
    const { cards } = this.state;
    const { isNameAdded } = this.state;
    const { removeColumn } = this.props;
    const { id } = this.props;
    return (
      <div className="column">
        <ColumnHeader
          handleAddColumnClick={this.handleAddColumnClick}
          isAdded={isNameAdded}
          handleRemoveColumn={() => removeColumn(id)}
        />
        {cards}
      </div>
    );
  }
}

Column.propTypes = {
  id: PropTypes.string.isRequired,
  removeColumn: PropTypes.func.isRequired,
};
