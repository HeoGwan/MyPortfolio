import React from "react";

export default function Input({title, value, type='text', valueRef, setValue}) {
    const ChangeValue = () => {
        if (valueRef === undefined) return;

        setValue(valueRef.current.value);
    }

    return (
        <div className="input">
            <span className="input-title">{title}</span>
            <input type={type} value={value} ref={valueRef} onChange={ChangeValue}/>
        </div>
    )
}