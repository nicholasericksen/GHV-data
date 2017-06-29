import React from 'react';

const MENUS = {
    MAIN_MENU_LINKS: [
        {
            label: 'Climate Monitoring',
            action: 'CLIMATE_MENU_LINKS',
        },
        {
            label: 'Biotic Communities',
            action: 'BIOTIC_MENU_LINKS',
        },
        {
            label: 'Water Resources',
            action: 'WATER_MENU_LINKS',
        }
    ],
    CLIMATE_MENU_LINKS: [
        {
            label: 'WHY Climate Data Matters',
            action: 'MAIN_MENU_LINKS',
        },
        {
            label: 'NOAA Global Climate Dashboard',
            action: 'MAIN_MENU_LINKS',
        },
        {
            label: 'Ice Core Video',
            action: 'MAIN_MENU_LINKS',
        }
    ],
    BIOTIC_MENU_LINKS: [
        {
            label: 'WHY Climate Data Matters',
            action: 'MAIN_MENU_LINKS',
        },
        {
            label: 'NOAA Global Climate Dashboard',
            action: 'MAIN_MENU_LINKS',
        },
        {
            label: 'Ice Core Video',
            action: 'MAIN_MENU_LINKS',
        }
    ],
    WATER_MENU_LINKS = [
        {
            label: 'Deluge or Draught',
            action: 'MAIN_MENU_LINKS',
        },
        {
            label: 'Freshwater Availablity and Consumption',
            action: 'MAIN_MENU_LINKS',
        },
        {
            label: 'Water Contamination',
            action: 'MAIN_MENU_LINKS',
        },
        {
            label: 'Water and Energy',
            action: 'MAIN_MENU_LINKS',
        }
    ],
};

const
const ;
export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            btnMenu: MENUS['MAIN_MENU_LINKS']
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(action) {
        this.setState({
            btnMenu: MENUS[action]
        });

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
