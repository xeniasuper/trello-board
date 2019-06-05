import React from "react";
import "./card.css";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue : "",
        }
    }

    componentDidMount() {
        this.textInput.focus();
    }

    handleInput = (e) => {
        this.setState({
            inputValue : e.target.textContent,
        })
    };

    render() {
        return (
                <div className="card"
                >
                    <div className="card-text"
                         ref={(input) => { this.textInput = input; }}
                         contentEditable="true"
                         placeholder="Введите название кaрточки"
                         spellCheck="false"
                         onInput={this.handleInput}
                    >
                    </div>
                    <div className="delete-icon remove-card"
                         onClick={() => this.props.removeCard(this.props.id)}
                    >
                    </div>
                </div>
        )
    }
}

export {Card}