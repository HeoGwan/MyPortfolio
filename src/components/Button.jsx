import React from "react";

export default function Button({buttonName='내용을 입력하세요', style, navigate=null, path=null, action=null, keyDownAction=null}) {
    return (
        <button 
            className="button"
            style={style}
            onClick={() => {
                if (action !== null) { action(); return; }
                else if (path === null && navigate === null) return;

                navigate(path);
            }}
            onKeyDown={() => {
                if (keyDownAction === null) return;
                keyDownAction();
            }}
        >
            {buttonName}
        </button>
    )
}