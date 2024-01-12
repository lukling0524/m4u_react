import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

// function SignUp() {
//     return <TextInput></TextInput>;
// }

const Datepickerrrrrr = () => {
    const style = {
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '40px',
    };

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="wrap" style={style}>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

            {/* 
            <InputWrap label="default" text="텍스트" helpText="도움말"></InputWrap>
            <InputWrap level="disabled" label="disabled" text="텍스트" helpText="도움말"></InputWrap>
            <InputWrap level="error" label="error" text="텍스트" helpText="도움말"></InputWrap>
            <InputWrap level="readonly" label="readonly" text="텍스트" helpText="도움말"></InputWrap>
            <InputWrap level="success" label="success" text="텍스트" helpText="도움말"></InputWrap> */}
        </div>
    );
};

export default Datepickerrrrrr;
