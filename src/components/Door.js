import React from "react";

export default class Door extends React.Component {

    handleButtonClick = () => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    };

    render() {
        return (
            <button style={{ left: this.props.location.left + "%", top: this.props.location.top + "%" }} onClick={this.handleButtonClick}>{`${this.props.title}`}</button>
        );
    }
}

