import React from "react";

export default function Input({title, value, type='text', valueRef, setValue, keyDownAction=null, keyDown='Enter'}) {
    const ChangeValue = () => {
        if (valueRef === undefined || valueRef === null) return;

        setValue(valueRef.current.value);
    }

    const onKeyDown = (e) => {
        if (keyDownAction === null) return;

        if (e.key === keyDown) {
            keyDownAction();
        }
    }

    return (
        <div className="input">
            <span className="input-title">{title}</span>
            <input type={type} value={value} ref={valueRef} onChange={ChangeValue} onKeyDown={onKeyDown}/>
        </div>
    )
}