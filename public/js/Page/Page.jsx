import React, {Component} from 'react';

import Slider from '../Slider/Slider';

export default class Page extends Component {
    render() {
        let content = null;
        const { iframe, video, youtube, slider } = this.props.btn.payload;

        if (iframe) content = <iframe sandbox="allow-scripts allow-same-origin" src={iframe} />;
        else if (youtube) content = <iframe src={youtube + "?autoplay=1"} />;
        else if (video) content = <video src={video} autoPlay controls></video>;
        else if (slider) content = <Slider slider={slider} label={this.props.btn.label} />;
        else {
            //TODO Go back to the homepage
        }

        return (
            <div>
                <div className="page-content">
                    {content}
                </div>
            </div>
        )
    }
}
