import React, {Component} from 'react';

export default class Page extends Component {
    render() {
        return (
            <div>{this.props.payload.iframe}</div>
        )
    }
}
