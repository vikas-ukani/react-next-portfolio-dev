const AudioBars = () => {
    return (
        <div className="elementor-element elementor-element-6961185 elementor-widget elementor-widget-coco-music-waves"
            data-id="6961185" data-element_type="widget"
            data-widget_type="coco-music-waves.default">
            <div className="elementor-widget-container">
                <div className="music-waves">
                    <div className="relative" >
                        <audio id="musicWaves" src={process.env.LINK + "/images/audio.mp3"} loop >
                        </audio>
                        <span
                            className="global-background-color"></span>
                        <span
                            className="global-background-color"></span>
                        <span
                            className="global-background-color"></span>
                        <span
                            className="global-background-color"></span>
                        <span
                            className="global-background-color"></span>
                    </div>
                    <p className="music-waves-text">SOUND ON
                    </p>
                </div>

            </div>
        </div>
    );
}

export default AudioBars;