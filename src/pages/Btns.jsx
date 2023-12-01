import Button from '../components/Buttons';

const BtnWrap = () => {
    const style = {
        // display: 'flex',
        // flexWrap: 'wrap',
        // gap: '20px',
        padding: '40px',
    };

    return (
        <div style={style}>
            <Button btnText="Button"></Button>
            <Button primary btnText="Button"></Button>

            {/* 
            <Button color="Danger" btnText="기본버튼"></Button>
            <Button test btnstyle="Primary" color="Primary" btnText="Primary large" size="large"></Button>
            <Button btnstyle="Primary" color="Primary" btnText="Primary medium"></Button>
            <Button btnstyle="Primary" color="Primary" btnText="Primary small" size="small"></Button>
            <Button btnstyle="Ghost" color="Ghost" btnText="Secondary"></Button> */}
        </div>
    );
};

export default BtnWrap;
