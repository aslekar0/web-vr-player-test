import { Component } from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "web-vr-video-player": any;
        }
    }
}

let instances: VideoPlayer[] = [];
let script: HTMLScriptElement = document.createElement("script");
script.src = "https://video-player.nyc3.digitaloceanspaces.com/bundle.js";
script.async = true;

type Props = {
    thumbnail?: string,
    allPossibleQualities?: string,
    defaultVolume?: string,
    defaultZoom?: string,
    defaultProjection?: string,
    hapticsCSV?: string,
    children?: JSX.Element[]
}

export class VideoPlayer extends Component<Props> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        instances.push(this);
        if (instances.length === 1) {
            document.body.appendChild(script);
        }
    }

    componentWillUnmount() {
        if (instances.length === 1) {
            document.body.removeChild(script);
        }
        instances.splice(instances.indexOf(this), 1);
    }

    render() {
        return (
            <web-vr-video-player
                thumbnail={this.props.thumbnail}
                allPossibleQualities={this.props.allPossibleQualities}
                defaultVolume={this.props.defaultVolume}
                defaultZoom={this.props.defaultZoom}
                defaultProjection={this.props.defaultProjection}
                hapticsCSV={this.props.hapticsCSV}
            >
                {this.props.children}
            </web-vr-video-player>
        )
    }
}