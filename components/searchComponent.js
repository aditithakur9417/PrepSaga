import {React} from 'react';
import PropTypes from 'prop-types';

function SearchInput({type,name,value,text:placeholder}){

    var attrObj = {
        type,
        name,
        value,
        placeholder
    }
    return (<input {...attrObj}/>);
}

SearchInput.defaultProps = {
    type: "text",
    name: "inputField",
    value: "",
    text: "search..."
}
SearchInput.PropTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    text: PropTypes.string
};

export default SearchInput;