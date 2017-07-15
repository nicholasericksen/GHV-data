import React from 'react';

import ButtonMenu from './ButtonMenu';
import Button from './Button';
import Page from './Page';

import { MENUS } from '../constants/menus';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contentType: 'menu',
            btnMenu: MENUS['MAIN_MENU_LINKS'],
            breadcrumbs: []
        };

        this.changeContentType = this.changeContentType.bind(this);
        this.updateBreadcrumbs = this.updateBreadcrumbs.bind(this);
        this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    }

    /**
    * Change the type of content being displayed
    * @param {string} contentType menu or page
    * @param {object} payload describes content
    */
    //TODO: change this to updateContentType
    changeContentType(contentType, payload) {
        this.setState({
            contentType,
            payload
        })
    }

    /**
    * Function to update the breadcrumbs of the menu buttons clicked
    * @param {object} crumb the btn object with action and payload
    */
    updateBreadcrumbs(crumb) {
        this.setState({
             breadcrumbs: [...this.state.breadcrumbs, crumb]
        });
        console.log("CRUMBS", this.state.breadcrumbs);
    }

    /**
    * Function to handle the clicking of a button menu Button
    * @param {object} btn determines the action and payload
    */
    handleMenuButtonClick(btn) {
        if (btn.action === 'OPEN_PAGE' && btn.payload) {
            this.changeContentType('page', btn.payload);
        } else {
            this.setState({
                btnMenu: MENUS[btn.action]
            });
            this.updateBreadcrumbs({label: btn.label, action: btn.action});
        }
    }

    render() {
        let content;

        if (this.state.contentType === 'menu') content = <ButtonMenu handleButtonClick={this.handleMenuButtonClick} btnMenu={this.state.btnMenu} updateBreadcrumbs={this.updateBreadcrumbs} changeContentType={this.changeContentType} />;
        else content = <Page payload={this.state.payload} />;

        return (
            <div>
                <div className="header">
                    <img src="imgs/ghv-logo.png" />
                    <div className="nav-menu">
                        <ButtonMenu handleButtonClick={this.handleMenuButtonClick} btnMenu={this.state.breadcrumbs} updateBreadcrumbs={this.updateBreadcrumbs} changeContentType={this.changeContentType} />
                    </div>
                </div>
                <div className="main-content">
                    {content}
                </div>
            </div>
        );
    }
}
