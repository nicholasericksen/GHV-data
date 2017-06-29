import React from 'react';

import ButtonMenu from './ButtonMenu';

import { MENUS } from '../constants/menus';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            btnMenu: MENUS['MAIN_MENU_LINKS']
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(action) {
        if (action !== 'OPEN_PAGE') {
            this.setState({
                btnMenu: MENUS[action]
            });
        }
    }

    render() {
        console.log(this.state.btnMenu);

        //TODO: refactor icon map, create component to reduce onCLick handlingz
        return (
            <div>
                <div className="header">
                    <img src="imgs/ghv-logo.png" />
                </div>
                Hello World
                <div className="main-content">

                    //tab button Component
                    <ButtonMenu
                        btnMenu={this.state.btnMenu}
                        handleButtonClick={this.handleButtonClick}
                    />

                </div>
            </div>
        );
    }
}
