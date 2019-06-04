import React from "react";
import "./column_header.css"

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

    componentDidMount(){
        this.textInput.focus();
    }

    render() {
        let none = this.state.isNameAdded ?  " none" : "";
        let type = this.state.isNameAdded ? " header-text" : "card column-name";
        return (
            <div className="column-header">
                <div className={type}
                     ref={(input) => { this.textInput = input; }}
                     contentEditable="true"
                     spellCheck="false"
                     placeholder="Введите название колонки"
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
