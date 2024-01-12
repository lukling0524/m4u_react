import React from 'react';
import styled, { css } from 'styled-components';

function Button1({ color, size, btnText, round, btnstyle }) {
    return (
        <CommonBtn color={color} btnstyle={btnstyle} size={size} round={round}>
            {btnText}
        </CommonBtn>
    );
}

const CommonBtn = styled.button`
    display: inline-block;
    margin: 0 20px 20px 0;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.08px;
    border-radius: 4px;
    transition: background-color, color, 0.2s;
    cursor: pointer;

    /* color: ${(props) => (props.$primary ? '#fff' : '#595959')}; */
    /* background-color: ${(props) => (props.$primary ? '#6a27d8' : '#fff')}; */
    padding: 10px 24px;
    /* color: #434343; */
    border: 1px solid #d9d9d9;
    /* background-color: #ffffff; */

    ${({ btnstyle }) =>
        btnstyle === 'Ghost' &&
        css`
            color: #6a27d8;
            border: 1px solid #6a27d8;
            background-color: #ffffff;
        `}

    ${({ btnstyle }) =>
        btnstyle === 'Primary' &&
        css`
            color: #ffffff;
            border: 1px solid #6a27d8;
            background-color: #6a27d8;
        `}

    ${({ btnstyle }) =>
        btnstyle === 'Ghost' &&
        css`
            color: #6a27d8;
            border: 1px solid #6a27d8;
            background-color: #ffffff;
        `}

    ${({ size }) =>
        size === 'large' &&
        css`
            padding: 16px 24px;
            font-size: 18px;
            line-height: 26px;
        `}

    ${({ size }) =>
        size === 'small' &&
        css`
            padding: 10px 16px;
            font-size: 14px;
            line-height: 14px;
        `} /* @@@@@@@@@@@@@@@ */

    /* color: ${(props) => {
        switch (props.color) {
            case 'Primary':
                return '#ffffff';
            case 'Ghost':
                return '#6a27d8';
            default:
                return '#434343';
        }
    }};

    border: 1px solid
        ${(props) => {
        switch (props.color) {
            case 'Primary':
                return '#6a27d8';
            case 'Ghost':
                return '#6a27d8';
            default:
                return '#d9d9d9';
        }
    }};

    background-color: ${(props) => {
        switch (props.color) {
            case 'Primary':
                return '#6a27d8';
            case 'Ghost':
                return '#ffffff';
            default:
                return '#ffffff';
        }
    }};

    padding: ${(props) => {
        switch (props.size) {
            case 'large':
                return '16px 24px';
            case 'small':
                return '10px 16px';
            default:
                return '10px 24px';
        }
    }};

    font-size: ${(props) => {
        switch (props.size) {
            case 'large':
                return '18px';
            case 'small':
                return '14px';
            default:
                return '16px';
        }
    }};

    line-height: ${(props) => {
        switch (props.size) {
            case 'large':
                return '26px';
            case 'small':
                return '14px';
            default:
                return '20px';
        }
    }}; */
`;

export default Button1;
