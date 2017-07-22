import React, { Component, PropTypes } from 'react';

import ButtonMenu from './ButtonMenu';

import classNames from 'classnames';

export default class Breadcrumbs extends Component {


    render() {
        let breadcrumbHeader;
        if (this.props.breadcrumbs.length === 1) {
            breadcrumbHeader = (<span className="current-page">Current Page: </span>);
        }

        return (
            <div className={classNames([{active: this.props.showBreadcrumbs}, "breadcrumbs"])}>
                {breadcrumbHeader}
                <ButtonMenu
                    handleButtonClick={this.props.handleBreadcrumbClick}
                    btnMenu={this.props.breadcrumbs}
                    updateBreadcrumbs={this.props.removeBreadCrumb}
                    changeContentType={this.props.changeContentType}
                />
            </div>
        );

    }
}


Breadcrumbs.PropTypes = {
    showBreadcrumbs: PropTypes.bool.isRequired
};
