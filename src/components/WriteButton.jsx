import React from "react";

export default function WriteButton({navigate}) {
    return (
        <div className="write-button-container" onClick={() => navigate('write')}>
            <button className="write-button">
                <svg width="41" height="41" viewBox="0 0 34 34" fill="none">
                    <path d="M0 17.6667H34M16.6792 0V34" stroke="black" stroke-width="8"/>
                </svg>
            </button>
        </div>
    )
}