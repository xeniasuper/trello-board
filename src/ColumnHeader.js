import React from 'react';

class ColumnHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text : "",
            isNameAdded : false,
        }
    };

    handleChange = (e) => {
        this.setState({
            text : e.currentTarget.textContent,
        })
    };

    handleAddColumnName = () => {
        this.props.handleAddColumnClick();
        this.setState({
            isNameAdded : true,
        })
    };

    render() {
        let none = this.state.isNameAdded ?  " none" : "";
        let type = this.state.isNameAdded ? " header-text" : "card column-name";
        return (
            <div className="column-header">
                <div className={type}
                     contentEditable="true"
                     spellCheck="false"
                     onInput={this.handleChange}
                >
                </div>
                <button className={"add-column" + none}
                        onClick={this.handleAddColumnName}
                >
                    Добавить колонку
                </button>
                <div className="delete-icon remove-column"
                     onClick={this.props.handleRemoveColumn}
                ></div>
            </div>
        )
    }
}

export {ColumnHeader}
