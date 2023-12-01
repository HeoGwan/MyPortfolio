import React from "react";

export default function BigInput({title, value}) {
    return (
        <div className='big-input'>
            <span className="input-title">{title}</span>
            <textarea type="text" value={value} cols={46} rows={20}/>
        </div>
    )
}