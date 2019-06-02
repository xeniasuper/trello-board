import React from 'react';
import {Column} from './Column'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns : [<Column id="0column"
                               key="0column"
                               removeColumn={this.removeColumn}
            />],
            ids : ["0column"],
        }
    }

    addColumn = () => {
        const {columns, ids} = this.state;
        const newId = parseInt(ids[ids.length-1]) + 1 + "column";
        this.setState({
            columns : [...columns, <Column id={newId}
                                           key={newId}
                                           removeColumn={this.removeColumn}/>],
            ids : [...ids, newId],
        });
    };

    removeColumn = (id) => {
        const { ids, columns } = this.state;
        const columnIdx = ids.indexOf(id);
        this.setState({
            columns: [...columns.slice(0, columnIdx), ...columns.slice(columnIdx+1)],
            ids: [...ids.slice(0, columnIdx), ...ids.slice(columnIdx+1)]
        });
        console.log(ids)
    };

    render() {
        return (
            <div className="board">
                {this.state.columns}
                <div className="one-more-column column"
                     onClick={this.addColumn}
                >
                    <div className="plus-icon"></div>
                    <p>Добавить еще одну колонку</p>
                </div>
            </div>
        )
    }
}

export {Board}