import React from 'react';

const CLIMATE_MENU_LINKS = [
    {
        label: 'WHY Climate Data Matters',
        action: MAIN_MENU_LINKS,
    },
    {
        label: 'NOAA Global Climate Dashboard',
        action: MAIN_MENU_LINKS,
    },
    {
        label: 'Ice Core Video',
        action: MAIN_MENU_LINKS,
    }
];
const MAIN_MENU_LINKS = [
    {
        label: 'Climate Monitoring',
        action: CLIMATE_MENU_LINKS,
    },
    {
        label: 'Biotic Communities',
        action: BIOTIC_MENU_LINKS,
    },
    {
        label: 'Water Resources',
        action: WATER_MENU_LINKS,
    }
];



const BIOTIC_MENU_LINKS = [];
const WATER_MENU_LINKS = [];
export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            btnMenu: MAIN_MENU_LINKS
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(action) {
        console.log("HAHAH", action);

        this.setState({
            btnMenu: action
        });

        console.log("aACtion", this.state.btnMenu);
    }

    render() {
        //TODO: refactor icon map, create component to reduce onCLick handlingz
        console.log(this.state.btnMenu);
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
                            {this.state.btnMenu.map((btn, index) => {
                                console.log(btn);
                                return (

                                <li className="category-btn">
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
