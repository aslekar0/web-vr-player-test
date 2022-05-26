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
    className?: string,
    coverImage?: string,
    siteQualities?: string,
    defaultVolume?: string,
    defaultZoom?: string,
    enableScrollToZoom?: string,
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
                className={this.props.className || ""}
                coverimage={this.props.coverImage}
                sitequalities={this.props.siteQualities}
                defaultvolume={this.props.defaultVolume}
                defaultzoom={this.props.defaultZoom}
                enablescrolltozoom={this.props.enableScrollToZoom}
                defaultprojection={this.props.defaultProjection}
                hapticscsv={this.props.hapticsCSV}
            >
                {this.props.children}
            </web-vr-video-player>
        )
    }
}