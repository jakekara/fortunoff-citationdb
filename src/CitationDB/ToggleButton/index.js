import React from 'react';
import "./style/main.scss"
import Button from "../Button";

export default class ToggleButton extends React.Component {

    render() {
        return (
            <div
                onClick={this.props.handleClick}
                className={`ToggleButton ${this.props.itemType} ${this.props.status ? "on" : "off"}`}>
                <Button text={this.props.label}></Button>
            </div>
        )
    }
}