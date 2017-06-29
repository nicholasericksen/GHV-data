import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.props.handleButtonClick(this.props.btn)
    }

    render() {
        return(
            <li className="category-btn">
                <div
                    onClick={this.handleClick}
                    className="menu-text"
                >
                    {this.props.btn.label}
                </div>
            </li>
        )
    }
}

// TODO: update object to shape for btn
Button.propTypes = {
    handleButtonClick: PropTypes.func.isRequired,
    btn: PropTypes.object.isRequired
};
