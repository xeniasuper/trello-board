import React from 'react';
import './add_card.css';
import PropTypes from 'prop-types';

export default function AddCard(props) {
  const { createCard } = props;
  return (
    <div className="add-card flex">
      <div className="plus-icon" />
      <p
        id="add-one-more-card"
        onClick={createCard}
      >
        Добавить еще одну карточку
      </p>
    </div>
  );
}

AddCard.propTypes = {
  createCard: PropTypes.func.isRequired,
};
