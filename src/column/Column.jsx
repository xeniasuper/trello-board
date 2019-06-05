import React from "react";
import {Cards} from "../cards/Cards"
import {ColumnHeader} from "../column_header/ColumnHeader";
import "./column.css";

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNameAdded : false,
            cards : null,
        }
    }

    handleAddColumnClick = () => {
        this.setState({
            isNameAdded : true,
            cards : <Cards id={this.props.id}/>
        })
    };

    render() {
        return (
            <div className="column">
                <ColumnHeader handleAddColumnClick={this.handleAddColumnClick}
                              isAdded={this.state.isNameAdded}
                              handleRemoveColumn={() => this.props.removeColumn(this.props.id)}
                />
                {this.state.cards}
            </div>
        )
    }
}

export {Column}
