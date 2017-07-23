import React from 'react';
import classNames from 'classnames';

import ButtonMenu from './ButtonMenu/ButtonMenu';
import Button from './Button/Button';
import Breadcrumbs from './ButtonMenu/Breadcrumbs';
import Page from './Page/Page';

import { MENUS } from './constants/menus';

import './style.less';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contentType: 'menu',
            btnMenu: MENUS['MAIN_MENU_LINKS'],
            breadcrumbs: [{
                action: 'MAIN_MENU_LINKS',
                label: 'Main Menu'
            }],
            active: null,
            showBreadcrumbs: false,
            showInfoModal: false
        };

        this.changeContentType = this.changeContentType.bind(this);
        this.addBreadCrumb = this.addBreadCrumb.bind(this);
        this.removeBreadCrumb = this.removeBreadCrumb.bind(this);
        this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
        this.handleBreadcrumbClick = this.handleBreadcrumbClick.bind(this);
        this.showBreadcrumbs = this.showBreadcrumbs.bind(this);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.handleInfoButtonClick = this.handleInfoButtonClick.bind(this);
    }

    /**
    * Change the type of content being displayed
    * @param {string} contentType menu or page
    * @param {object} payload describes content
    */
    //TODO: change this to updateContentType
    changeContentType(contentType, active) {
        this.setState({
            contentType,
            active
        })
    }

    /**
    * Function to update the breadcrumbs of the menu buttons clicked
    * @param {object} crumb the btn object with action and payload
    */
    addBreadCrumb(crumb) {
        this.setState({
             breadcrumbs: [...this.state.breadcrumbs, crumb]
        });
    }

    /**
    * Function to remove a breadcrumbs
    * @param {object} index the index of the breadcrumb selected
    */
    removeBreadCrumb(index) {
        let breadcrumbs = this.state.breadcrumbs;

        breadcrumbs.length = index + 1;

        this.setState({
            breadcrumbs: breadcrumbs
        });
    }


    /**
    * Function to handle the clicking of a button.  Update contentType.
    * @param {object} btn determines the action, label, and payload
    */
    handleButtonClick(btn) {
        if (btn.action === 'OPEN_PAGE' && btn.payload) {
            this.changeContentType('page', btn);
        } else {
            this.setState({
                btnMenu: MENUS[btn.action]
            });

            this.changeContentType('menu', null);
        }
    }

    /**
    * Function to handle the clicking of a button menu Button
    * @param {object} btn determines the action, label, and payload
    */
    handleMenuButtonClick(btn) {
        this.handleButtonClick(btn);

        this.addBreadCrumb({label: btn.label, action: btn.action});
    }

    /**
    * Function to handle the clicking of a breadcrumb Button
    * @param {object} btn determines the action, label, and payload
    * @param {number} index the index of the breadcrumb
    */
    handleBreadcrumbClick(btn, index) {
        this.handleButtonClick(btn);
        this.removeBreadCrumb(index);
        this.setState({showBreadcrumbs: false});
    }

    /**
    * Handles clicking on the back arrow icon
    */
    handleBackButtonClick() {
        if (this.state.breadcrumbs.length > 1) {
            const currentIndex = this.state.breadcrumbs.length - 1;
            const prevIndex = currentIndex - 1;

            this.handleBreadcrumbClick(this.state.breadcrumbs[prevIndex], prevIndex);
        }
    }

    /**
    * Determines if breadcrumbs should be shown
    */
    showBreadcrumbs() {
        this.setState({showBreadcrumbs: !this.state.showBreadcrumbs});
    }

    handleInfoButtonClick() {
        this.setState({showInfoModal: !this.state.showInfoModal});
    }

    render() {
        let content;

        if (this.state.contentType === 'menu') {
            content = (
                <ButtonMenu
                    handleButtonClick={this.handleMenuButtonClick}
                    btnMenu={this.state.btnMenu}
                    updateBreadcrumbs={this.addBreadCrumb}
                    changeContentType={this.changeContentType}
                />
            );
        }
        else {
            content = <Page btn={this.state.active} />;
        }

        return (
            <div>
                <div className="header">
                    <img src="public/imgs/GHV-logo.png" />
                    <div className="nav-btns">
                        <div onClick={this.handleBackButtonClick} className="back-btn nav-btn">
                            <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
                        </div>
                        <div className="home-btn nav-btn" onClick={() => this.handleBreadcrumbClick({action: 'MAIN_MENU_LINKS'}, 0)}>
                            <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                        </div>
                        <div onClick={this.handleInfoButtonClick} className="info-btn nav-btn">
                            <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
                            {this.state.showInfoModal ?
                                <div className="info-modal">
                                    <div className="info-modal-content">
                                        <h2>About</h2>
                                        <p>
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor \
                                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                        </p>
                                        <div className="logo-container">
                                            <img src="public/imgs/logos/IRI.jpeg" />
                                            <img src="public/imgs/logos/NOAA.png" />
                                            <img src="public/imgs/logos/STEM.png" />
                                            <img src="public/imgs/logos/IAC_APPS.png" />
                                        </div>
                                    </div>
                                </div> : null}
                        </div>
                        {/*}<div onClick={this.showBreadcrumbs} className="breadcrumb-btn">
                            <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                        </div>*/}
                    </div>
                    {/*<Breadcrumbs
                        showBreadcrumbs={this.state.showBreadcrumbs}
                        breadcrumbs={this.state.breadcrumbs}
                        handleBreadcrumbClick={this.handleBreadcrumbClick}
                        btnMenu={this.state.breadcrumbs}
                        removeBreadCrumb={this.removeBreadCrumb}
                        changeContentType={this.changeContentType}
                    />*/}
                </div>


                <div className="main-content">
                    {content}
                </div>
            </div>
        );
    }
}
