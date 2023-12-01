import React from 'react';
import styled from 'styled-components';

function InputWrap({ level, label, required, text, helpText }) {
    return (
        <Wrap level={level}>
            <label className={`label ${required}`}>{label}</label>
            <Designinput>{text}</Designinput>
            <span className="help-text">{helpText}</span>
        </Wrap>
    );
}

const Designinput = styled.div`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    line-height: 40px;
    border-radius: 4px;
`;

const Wrap = styled.div`
    width: 100%;

    ${Designinput} {
        color: ${(props) => {
            switch (props.level) {
                case 'disabled':
                    return 'rgba(140, 140, 140, 0.7)';
                default:
                    return '#292929';
            }
        }};

        border: 1px solid
            ${(props) => {
                switch (props.level) {
                    case 'error':
                        return '#f90000';
                    default:
                        return '#d1d1d1';
                }
            }};

        background-color: ${(props) => {
            switch (props.level) {
                case 'disabled':
                    return '#d9d9d9';
                case 'readonly':
                    return '#d9d9d9';
                default:
                    return '#ffffff';
            }
        }};

        & + .help-text {
            color: ${(props) => {
                switch (props.level) {
                    case 'error':
                        return '#f90000';
                    case 'success':
                        return '#29cc6a';
                    default:
                        return '#8c8c8c';
                }
            }};
        }
    }
`;

export default InputWrap;
