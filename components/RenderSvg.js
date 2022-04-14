import {React} from "react";
import PropTypes from 'prop-types';

var svgprops;
function StaticSvg({url,width,height,imgSvg:imgSvges}){
    imgSvges ? (svgprops = true) : (svgprops = false);
    var svgStyle = {width,height};
    return svgprops ? (<img style={svgStyle} src={`https://cdn.igp.com/raw/upload/assets/svg-icons/${url}.svg`} />) : null
}


StaticSvg.defaultProps = {
    width: '100%',
    height: 'auto',
    imgSvg: false
};
StaticSvg.PropTypes = {
    url: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    imgSvg: PropTypes.bool
}

export default StaticSvg;