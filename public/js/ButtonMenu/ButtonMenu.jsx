import React, { Component } from 'react';

import Button from '../Button/Button';

import { MENUS } from '../constants/menus';

//TODO Rename this to Menu
//TODO Make this a functional component

export default class ButtonMenu extends Component {
    render() {
        return (
            <div className="main-menu menu-container">
                <ul>
                    {this.props.btnMenu.map((btn, index) => (
                        <Button
                            key={btn.label + '-' + index}
                            index={index}
                            btn={btn}
                            handleButtonClick={this.props.handleButtonClick}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}
