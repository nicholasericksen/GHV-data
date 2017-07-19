import React, {Component} from 'react';

export default class Page extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.btn.label}</h2>
                <iframe src={this.props.btn.payload.iframe} />
            </div>
        )
    }
}
