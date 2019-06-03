import React from "react";
import {Cards} from "./Cards"
import {ColumnHeader} from "./ColumnHeader";

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.id,
            isNameAdded : false,
            cards : null,
        }
    }

    handleAddColumnClick = () => {
        this.setState({
            isNameAdded : true,
            cards : <Cards />
        })
    };

    render() {
        return (
            <div className="column">
                <ColumnHeader handleAddColumnClick={this.handleAddColumnClick}
                              isAdded={this.state.isNameAdded}
                              handleRemoveColumn={() => this.props.removeColumn(this.state.id)}
                />
                {/*<Cards visible={this.state.isNameAdded}/>*/}
                {this.state.cards}
            </div>
        )
    }
}

export {Column}
