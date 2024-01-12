import React from 'react';
import styled from 'styled-components';
import Datepickerrrrrr from './DateTest';

function Popup() {
    const dateWrap = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    return (
        <PopupWrap>
            <Layer>
                <div style={dateWrap}>
                    <Datepickerrrrrr></Datepickerrrrrr>
                </div>
            </Layer>
        </PopupWrap>
    );
}

const PopupWrap = styled.div`
    width: 100%;
    height: 100vh;
`;

const Layer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
`;

export default Popup;
