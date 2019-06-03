import React from "react"

class AddCard extends React.Component {
    render() {
        return (
            <div className={"add-card flex"}>
                <div className="plus-icon"></div>
                <p onClick={this.props.createCard}
                >
                    Добавить еще одну карточку
                </p>
            </div>
        )
    }
}

export {AddCard}