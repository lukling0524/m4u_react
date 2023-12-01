import React from 'react';

function TextInput(props) {
    return (
        <div className="textfield">
            <label className={'label ' + props.required}>{props.label}</label>
            <input type={props.type} className={props.name} placeholder={props.placeholder} value={props.value} disabled={props.disabled} readOnly={props.readonly} />
            <span className="help-text">{props.text}</span>
        </div>
    );
}
export default TextInput;
