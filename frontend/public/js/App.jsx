import React from 'react';

import ButtonMenu from './ButtonMenu';
import Page from './Page';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contentType: 'menu',
            breadcrumbs: []
        };

        this.changeContentType = this.changeContentType.bind(this);
        this.updateBreadcrumbs = this.updateBreadcrumbs.bind(this);
    }

    /**
    * Change the type of content being displayed
    * @contentType menu or page
    */
    //TODO: change this to updateContentType
    changeContentType(contentType, payload) {
        this.setState({
            contentType,
            payload
        })
    }

    updateBreadcrumbs(crumb) {
        this.setState({
             breadcrumbs: [...this.state.breadcrumbs, crumb]
        });
        console.log("CRUMBS", this.state.breadcrumbs);
    }

    render() {
        let content;

        if (this.state.contentType === 'menu') content = <ButtonMenu updateBreadcrumbs={this.updateBreadcrumbs} changeContentType={this.changeContentType} />;
        else content = <Page payload={this.state.payload} />;

        return (
            <div>
                <div className="header">
                    <img src="imgs/ghv-logo.png" />
                    <div className="nav-menu">
                        {this.state.breadcrumbs.map((crumb, index) => (
                            <span>{crumb.label}</span>
                        ))}

                    </div>
                </div>
                <div className="main-content">
                    {content}
                </div>
            </div>
        );
    }
}
