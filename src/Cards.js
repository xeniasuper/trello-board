import React from 'react';
import {Card} from './Card.js'
import {AddCard} from "./AddCard";

class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ids : ["0card"],
            cards : [<Card id="0card"
                           key="0card"
                           removeCard={this.removeCard}
            />],
        }
    }

    removeCard = (id) => {
        const { ids, cards } = this.state;
        const cardIdx = ids.indexOf(id);
        this.setState({
            cards: [...cards.slice(0, cardIdx), ...cards.slice(cardIdx+1)],
            ids: [...ids.slice(0, cardIdx), ...ids.slice(cardIdx+1)]
        });
    };

    createCard = () => {
        const {cards, ids} = this.state;
        let newId;
        try {
            newId = parseInt(ids[ids.length-1][0]) + 1 + "card";
            this.setState({
                cards : [...cards, <Card id={newId}
                                         key={newId}
                                         removeCard={this.removeCard}/>],
                ids : [...ids, newId],
            })
        } catch (e) {
            newId = 0 + "card";
        }
        this.setState({
            cards : [...cards, <Card id={newId}
                                     key={newId}
                                     removeCard={this.removeCard}/>],
            ids : [...ids, newId],
        })
    };

    render() {
        let visibilityClassBlock = this.props.visible ? "block" : "none";
        let visibilityClassFlex = this.props.visible ? "flex" : "none";
        return (
            <div className={`cards ${visibilityClassBlock}`}
            >
                {this.state.cards}
                <AddCard visibilityClass={visibilityClassFlex}
                         createCard={this.createCard}
                />
            </div>
        )
    }
}

export {Cards}