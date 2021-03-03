import * as React from 'react'
import PropTypes from 'prop-types'
import useHover from "./hooks/useHover";
import './style.css'

const styles = {
    container: {
        position: 'relative',
        display: 'flex',
        backgroundColor: "rgba(0,0,0,.5)"
    } ,
    tooltip: {
        color: "white",
        height: "100%",
        left: "0",
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: 2,
        transition: "background-color 350ms ease",
        backgroundColor:  "rgba(0,0,0,.5)",
        padding: "20px 20px 0 20px",
        boxSizing: "border-box",
        pointerEvents:"none",
    },
    creatureName: {
        textTransform: "uppercase"
    },
    by: {
        fontStyle: "italic"
    }

}

export default function Tooltip ({text,children, }) {
    // console.log({text})
    const [hovering,attrs] = useHover()
    //read in text that was assigned deliberately as well as the jsx that was passed in as children within the tooltip wrapper
    return (                //the name of this prop can be anything, thus avoiding naming collisions
        <div style={styles.container}{...attrs}>
            {hovering === true && <div
                    className ="hoverTooltip" style={styles.tooltip}>
                <h3 style={styles.creatureName}>{text.name}</h3>
                <p style={styles.by}>created by {text.creator}</p>
                <p>⚡ {text.attack}</p>
                <p>❓ {text.sattack}</p>
                </div>
            }

            {children}
        </div>

    )
}

// Tooltip.propTypes = {
//     text: PropTypes.string.isRequired
// }
