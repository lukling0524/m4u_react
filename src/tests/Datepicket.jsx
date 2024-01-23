import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import '../css/reactCustom.css';

const DatepickerTest = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div style={{ paddingBottom: '340px', position: 'absolute', top: '120%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} minDate={startDate} popperPlacement="right-end" />
                <div style={{ paddingTop: '100px' }}>
                    <DatePicker selected={new Date()} onChange={(date) => setStartDate(date)} minDate={startDate} />
                </div>
            </div>
        </>
    );
};

export default DatepickerTest;
