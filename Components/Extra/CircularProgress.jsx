import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import AnimatedProgressProvider from "./AnimatedProgressProvider";

import { easeQuadInOut, easeCircleIn, easeCubicIn, easeBounceIn } from "d3-ease";
export default function CircularProgress({ fillColor, outColor, textColor, percentage, title }) {
    return (
        <>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={percentage}
                duration={1.5}
                easingFunction={easeQuadInOut}
                fillColor outColor percentage title
            >
                {value => {
                    const roundedValue = Math.round(value);
                    return (
                        <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            counterClockwise={true}
                            strokeWidth={15}

                            styles={buildStyles({
                                strokeLinecap: "butt",
                                backgroundColor: outColor,
                                textColor: textColor,
                                pathColor: fillColor,
                                trailColor: outColor,
                                trail: {
                                    stroke: outColor,
                                    strokeWidth: 2
                                },

                            })}
                        />
                    );
                }}
            </AnimatedProgressProvider>

        </>

    )
}
