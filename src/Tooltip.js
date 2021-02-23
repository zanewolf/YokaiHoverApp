import * as React from 'react'
import PropTypes from 'prop-types'
// import Hover from './Hover.js'
import useHover from "./hooks/useHover";

const styles = {
    container: {
        position: 'relative',
        display: 'flex'
    },
    tooltip: {
        height: "100%",
        left: "0",
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: 2,
        transition: "background-color 350ms ease",
        backgroundColor: "transparent",
        padding: "20px 20px 0 20px",
        boxSizing: "border-box",
        "pointer-events":"none",
        // boxSizing: 'border-box',
        // position: 'relative',
        // width: '160px',
        // // bottom: '100%',
        // left: '50%',
        // // marginLeft: '-80px',
        // borderRadius: '3px',
        // backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
        // // padding: '7px',
        // // marginBottom: '5px',
        // color: '#fff',
        // textAlign: 'center',
        // fontSize: '14px',
    }
}

export default function Tooltip ({ text, children, }) {
    // console.log({text})
    const [hovering,attrs] = useHover()
    //read in text that was assigned deliberately as well as the jsx that was passed in as children within the tooltip wrapper
    return (                //the name of this prop can be anything, thus avoiding naming collisions
        <div style={styles.container}{...attrs}>
            {hovering === true && <div style={styles.tooltip}>{text}</div>}
            {children}
        </div>

    )
}

Tooltip.propTypes = {
    text: PropTypes.string.isRequired
}
