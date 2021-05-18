import CircularProgress from "../../Extra/CircularProgress";

const CircularGraphs = () => (
    <div className="elementor-widget-container">
        <div className="skill-circle-holder">
            <div className="custom-skill-circle">
                <CircularProgress fillColor="#6db363" outColor="#232329" textColor="#f37b83" percentage={80} title="Laravel" />
                <p className="skill-circle-text">
                    <b className="text-light-orange"
                        onMouseEnter={(e) => { e.target.className = 'text-light-green'; }}
                        onMouseLeave={(e) => { e.target.className = 'text-light-orange'; }} >
                        Laravel
                    </b>
                </p>
            </div>
            <div className="custom-skill-circle" style={{ marginRight: '6%' }}>
                <CircularProgress fillColor="#f37b83" outColor="#232329" textColor="#6db363" percentage={65} title="NodeJS" />
                <p className="skill-circle-text">
                    <b className="text-light-orange"
                        onMouseEnter={(e) => { e.target.className = 'text-light-orange'; }}
                        onMouseLeave={(e) => { e.target.className = 'text-light-green'; }}>
                        NodeJS
                    </b>
                </p>
            </div>

            <div className="custom-skill-circle">
                <CircularProgress fillColor="#6db363" outColor="#232329" textColor="#f37b83" percentage={70} title="VueJS" />
                <p className="skill-circle-text">
                    <b className="text-light-orange"
                        onMouseEnter={(e) => { e.target.className = 'text-light-green'; }}
                        onMouseLeave={(e) => {
                            e.target.className = 'text-light-orange';
                        }}>
                        VueJS</b>
                </p>
            </div>
            <div className="custom-skill-circle">
                <CircularProgress fillColor="#f37b83" outColor="#232329" textColor="#6db363" percentage={60} title="Django" />
                <p className="skill-circle-text">
                    <b className="text-light-orange"
                        onMouseEnter={(e) => { e.target.className = 'text-light-orange'; }}
                        onMouseLeave={(e) => { e.target.className = 'text-light-green'; }}>
                        Django
                    </b>
                </p>
            </div>
        </div>
    </div>
)

export default CircularGraphs;