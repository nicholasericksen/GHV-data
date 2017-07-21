import React from 'react';
import classNames from 'classnames';

import ButtonMenu from './ButtonMenu/ButtonMenu';
import Button from './Button/Button';
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
        };

        this.changeContentType = this.changeContentType.bind(this);
        this.addBreadCrumb = this.addBreadCrumb.bind(this);
        this.removeBreadCrumb = this.removeBreadCrumb.bind(this);
        this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
        this.handleBreadcrumbClick = this.handleBreadcrumbClick.bind(this);
        this.showBreadcrumbs = this.showBreadcrumbs.bind(this);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
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

        let breadcrumbHeader;

        if (this.state.breadcrumbs.length === 1) {
            breadcrumbHeader = (<span className="current-page">Current Page: </span>);
        }

        return (
            <div>
                <div className="header">
                    <img src="public/imgs/GHV-logo.png" />
                    <div className="nav-btns">
                        <div onClick={this.handleBackButtonClick} className="back-btn">
                            <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
                        </div>
                        <div className="home-btn" onClick={() => this.handleBreadcrumbClick({action: 'MAIN_MENU_LINKS'}, 0)}>
                            <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                        </div>
                        <div onClick={this.showBreadcrumbs} className="breadcrumb-btn">
                            <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                        </div>
                    </div>
                </div>

                    <div className={classNames([{active: this.state.showBreadcrumbs}, "breadcrumbs"])}>
                        {breadcrumbHeader}
                        <ButtonMenu
                            handleButtonClick={this.handleBreadcrumbClick}
                            btnMenu={this.state.breadcrumbs}
                            updateBreadcrumbs={this.removeBreadCrumb}
                            changeContentType={this.changeContentType}
                        />
                    </div>
                <div className="main-content">
                    {content}
                </div>
            </div>
        );
    }
}
