import React, {useEffect, useState} from "react";

import Button from '../components/Button';

export default function ProfileCard({navigate, user}) {
    const [profileImage, setProfileImage] = useState(null)
    useEffect(() => {
        const image = localStorage.getItem('profile');
        setProfileImage(image);
    }, []);

    return (
        <div className="profile" onClick={() => navigate('profile')}>
            <img src={user.profileImage} alt="프로필 사진" />
            <div className="name">{user.name}</div>
            <div className="info">{user.introduce}</div>
        </div>
    )
}