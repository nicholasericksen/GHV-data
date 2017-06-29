import React from 'react';

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
        console.log("ACTION", action);
        if (action !== 'OPEN_PAGE') {
            this.setState({
                btnMenu: MENUS[action]
            });
        }

        
        // console.log("aACtion", this.state.btnMenu);i
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
                    <div className="main-menu menu-container">
                        <ul>
                            {this.state.btnMenu.map((btn) => {
                                return (

                                <li key={btn.label} className="category-btn">
                                    <div
                                        onClick={() => this.handleButtonClick(btn.action)}
                                        className="menu-text"
                                    >
                                        {btn.label}
                                    </div>
                                </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}
