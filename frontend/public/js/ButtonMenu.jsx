import React, { Component, PropTypes } from 'react';

export default class ButtonMenu extends Component {
    // static propTypes = {
    //     handleButtonClick: PropTypes.func.isRequired,
    //     btnMenu: PropTypes.array.isRequired
    // };

    render() {
        return (
            <div className="main-menu menu-container">
                <ul>
                    {this.props.btnMenu.map((btn) => (
                        <li key={btn.label} className="category-btn">
                            <div
                                onClick={() => this.props.handleButtonClick(btn.action)}
                                className="menu-text"
                            >
                                {btn.label}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
