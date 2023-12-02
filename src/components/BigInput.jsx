import React from "react";

export default function BigInput({title, value, valueRef, setValue}) {
    const ChangeValue = () => {
        if (valueRef === undefined || valueRef === null) return;

        setValue(valueRef.current.value);
    }

    return (
        <div className='big-input'>
            <span className="input-title">{title}</span>
            <textarea type="text" value={value} ref={valueRef} cols={46} rows={20} onChange={ChangeValue}/>
        </div>
    )
}