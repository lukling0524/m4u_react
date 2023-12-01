import React from 'react';
import TextInput from '../components/inputs/TextInput';
import StyledInput from '../components/inputs/StyledInput';
import InputWrap from '../components/inputs/StyledInput_sample';

// function SignUp() {
//     return <TextInput></TextInput>;
// }

const SignUp = () => {
    const style = {
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '40px',
    };

    return (
        // <div className="user signup signup_00">
        //     <div className="section">
        //         <div className="box-layout"></div>
        //     </div>
        // </div>

        <div className="wrap" style={style}>
            {/* <TextInput type="number" label="default" required="required" placeholder="type=number"></TextInput>
            <TextInput type="text" label="readonly (class)" name="disedit" placeholder="readonly class"></TextInput>
            <TextInput type="text" label="readonly (property)" value="readonly proporty" readonly="readOnly"></TextInput>
            <TextInput type="text" label="error" required="required" name="error" placeholder="error" text="에러 컴포넌트"></TextInput>
            <TextInput type="text" label="icon" name="success-icon" placeholder="icon" text="체크 아이콘"></TextInput>
            <TextInput type="text" label="disabled (class)" name="disabled" placeholder="disable class"></TextInput>
            <TextInput type="text" label="disabled (property)" value="disable" disabled="disabled"></TextInput> */}

            {/* <StyledInput state type="text" label="error design" borderColor="#f90000" text="텍스트 텍스트" helpText="에러 컴포넌트"></StyledInput>
            <StyledInput type="text" label="readonly design" bgColor="#f5f5f5" text="텍스트 텍스트" helpText="readonly 컴포넌트"></StyledInput> */}

            <InputWrap label="default" text="텍스트" helpText="도움말"></InputWrap>
            <InputWrap level="disabled" label="disabled" text="텍스트" helpText="도움말"></InputWrap>
            <InputWrap level="error" label="error" text="텍스트" helpText="도움말"></InputWrap>
            <InputWrap level="readonly" label="readonly" text="텍스트" helpText="도움말"></InputWrap>
            <InputWrap level="success" label="success" text="텍스트" helpText="도움말"></InputWrap>
        </div>
    );
};

export default SignUp;
