import { Component, HTMLAttributes } from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "web-vr-video-player": any;
        }
    }
}

export class VideoPlayer extends Component {

    script: HTMLScriptElement

    constructor(props: any) {
        super(props);

        this.script = document.createElement("script");
        this.script.src = "https://video-player.nyc3.digitaloceanspaces.com/bundle.js";
        this.script.async = true;
    }

    componentDidMount() {
        document.body.appendChild(this.script);
    }

    componentWillUnmount() {
        document.body.removeChild(this.script);
    }

    render() {
        return (
            <web-vr-video-player
                thumbnail="https://b8h6h9v9.ssl.hwcdn.net/vrh/hugethumbs/vrh0373_minxxmarley_oliverfaze_180-c760x430.jpg"
                allPossibleQualities="1080p,1440p,4K,6K,8K"
                defaultVolume="1"
                defaultZoom="0.5"
                defaultProjection="flat"
                hapticsCSV="https://video-player.nyc3.digitaloceanspaces.com/trail-vrh0373_minxxmarley_oliverfaze_180_1k.csv"
            >
                <source src="https://e2z4r8q7.ssl.hwcdn.net/vrh/trail-vrh0373_minxxmarley_oliverfaze_180_1k.mp4?ri=2000000&rs=10000&ttl=1649274462&token=a89bc5f2499d784eb7698b169d47834d" data-quality="1080p"></source>
                <source src="https://e2z4r8q7.ssl.hwcdn.net/vrh/trail-vrh0373_minxxmarley_oliverfaze_180_2k.mp4?ri=2000000&rs=10000&ttl=1649274462&token=a89bc5f2499d784eb7698b169d47834d" data-quality="1440p"></source>
                <source src="https://e2z4r8q7.ssl.hwcdn.net/vrh/trail-vrh0373_minxxmarley_oliverfaze_180_4k.mp4?ri=2000000&rs=10000&ttl=1649274462&token=a89bc5f2499d784eb7698b169d47834d" data-quality="4K"></source>
                <source src="https://e2z4r8q7.ssl.hwcdn.net/vrh/trail-vrh0373_minxxmarley_oliverfaze_180_6k.mp4?ri=2000000&rs=10000&ttl=1649274462&token=a89bc5f2499d784eb7698b169d47834d" data-quality="6K"></source>
                <source src="https://e2z4r8q7.ssl.hwcdn.net/vrh/trail-vrh0373_minxxmarley_oliverfaze_180_6k.mp4?ri=2000000&rs=10000&ttl=1649274462&token=a89bc5f2499d784eb7698b169d47834d" data-quality="8K"></source>
            </web-vr-video-player>
        )
    }
}