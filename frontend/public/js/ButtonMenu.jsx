import React, { Component } from 'react';

import Button from './Button';

import { MENUS } from '../constants/menus';

//TODO Rename this to Menu
export default class ButtonMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            btnMenu: MENUS['MAIN_MENU_LINKS']
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(btn) {
        if (btn.action === 'OPEN_PAGE' && btn.payload) {
            this.props.changeContentType('page', btn.payload);
        } else {
            this.setState({
                btnMenu: MENUS[btn.action]
            });
            this.props.updateBreadcrumbs({label: btn.label, action: btn.action});
        }
    }

    render() {
        return (
            <div className="main-menu menu-container">
                <ul>
                    {this.state.btnMenu.map((btn) => (
                        <Button
                            key={btn.label}
                            btn={btn}
                            handleButtonClick={this.handleButtonClick}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}
