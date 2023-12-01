import React from 'react';
import styled, { css } from 'styled-components';

function StyledInput(props) {
    return (
        <div className="textfield">
            <label className={'label ' + props.required}>{props.label}</label>
            <Designinput type={props.type} className={props.name} bordercolor={props.borderColor} bgcolor={props.bgColor}>
                {props.text}
            </Designinput>
            <span className="help-text">{props.helpText}</span>
        </div>
    );
}

const Designinput = styled.div`
    width: 100%;
    height: 40px;
    border: 1px solid ${(props) => props.bordercolor || '#d1d1d1'};
    border-radius: 4px;
    background-color: ${(props) => props.bgcolor || '#ffffff'};
`;

export default StyledInput;
