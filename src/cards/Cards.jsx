import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import AddCard from '../add_card/AddCard';
import './cards.css';

export default class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: [],
      cards: [],
    };
  }

  componentDidMount() {
    this.setState({
      ids: ['0card'],
      cards: [<Card
                id="0card"
                key="0card"
                index={0}
                removeCard={this.removeCard}
              />],
    });
  }

  removeCard = (id) => {
    const { ids, cards } = this.state;
    const cardIdx = ids.indexOf(id);
    this.setState({
      cards: [...cards.slice(0, cardIdx), ...cards.slice(cardIdx + 1)],
      ids: [...ids.slice(0, cardIdx), ...ids.slice(cardIdx + 1)],
    });
  };

  createCard = () => {
    const { cards, ids } = this.state;
    let newId;
    try {
      newId = parseInt(ids[ids.length - 1]) + 1 + 'card';
      this.setState({
        cards: [
                ...cards,
                <Card
                  id={newId}
                  key={newId}
                  removeCard={this.removeCard}
                />],
        ids: [...ids, newId],
      });
    } catch (e) {
      newId = '0card';
    }
    this.setState({
      cards: [
              ...cards,
              <Card
                id={newId}
                key={newId}
                removeCard={this.removeCard}
              />],
      ids: [...ids, newId],
    });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="cards block">
        {cards}
        <AddCard createCard={this.createCard} />
      </div>
    );
  }
}

Cards.propTypes = {
  id: PropTypes.string.isRequired,
};