import React from "react";

import Button from './Button';

export default function Header({navigate, user, logout}) {    
    return (
        <div className="header" onClick={() => navigate('/')}>
            <h1>My Portfolio</h1>
            { user && 
                <Button
                    buttonName="로그아웃"
                    style={{
                        backgroundColor: '#4985DF',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '15px',
                    }}
                    action={logout}
                />
            }
        </div>
    )
}