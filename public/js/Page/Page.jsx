import React, {Component} from 'react';

export default class Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeImageIndex: 0
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    componentDidMount() {
        // window.onbeforeunload = function(e) {
        //     var dialogText = 'Dialog text here';
        //     e.returnValue = dialogText;
        //     console.log("Return", e.returnValue);
        // };
        //
        // window.addEventListener("beforeunload", function (event) {
        //     event.returnValue = "\o/";
        //     console.log("FDIAUSHFIUYDSGFIG");
        // });
    }

    handleButtonClick(direction) {
        console.log("CLICK", direction);
        if (direction === 'left') {
            if (this.state.activeImageIndex === 0) {
                this.setState({
                    activeImageIndex: this.props.btn.payload.slider.imgs.length - 1
                });
            } else {
                this.setState({
                    activeImageIndex: this.state.activeImageIndex - 1
                });
            }
        }
        else if (direction === 'right') {
            if (this.state.activeImageIndex === this.props.btn.payload.slider.imgs.length - 1) {
                this.setState({
                    activeImageIndex: 0
                });
            } else {
                this.setState({
                    activeImageIndex: this.state.activeImageIndex + 1
                });
            }
        }
    }

    render() {
        let content = null;
        const { iframe, video, youtube, slider } = this.props.btn.payload;
        const { activeImageIndex } = this.state;

        if (iframe) {
            content = <iframe sandbox="allow-scripts allow-same-origin" src={iframe} />;
        }
        else if (youtube) {
            content = <iframe src={youtube + "?autoplay=1"} />;
        }
        else if (video) {
            content = (
                <video src={video} autoPlay controls></video>
            );
        }
        else if (slider) {
            content = (
                <div className="img-slider-container">
                    <h2>{this.props.btn.label}</h2>
                    <div className="img-slider">
                        <div className="slider-btn">
                            <span onClick={() => this.handleButtonClick('left')} className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        </div>
                        <img className="slide" src={slider.baseUrl + slider.imgs[activeImageIndex]} />
                        <div className="slider-btn">
                            <span onClick={() => this.handleButtonClick('right')} className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        </div>
                    </div>
                </div>
            );
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
