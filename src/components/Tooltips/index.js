import React from 'react';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const Tooltips = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h2>Tooltips</h2>
            <span 
                data-for="test1" 
                data-tip="<h1>Hello</h1> <h3>Hello</h3>" 
                // data-place="bottom" 
                data-html={true} 
                data-tip-disable={false}
                style={{width: "10%", margin: "auto"}}>
                <FontAwesomeIcon icon={faInfoCircle} name="icon"/>
            </span>
            <ReactTooltip id="test1" />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            {/* <div data-tip="Test 2"  data-place="top" data-for="test2">Tooltip 2</div>
            <ReactTooltip id="test2" data-place="top"/> */}
        </div>
    );
};

export default Tooltips;