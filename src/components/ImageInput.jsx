import React, {useState} from "react";

export default function ImageInput({title, image, setSelectImage}) {
    const changeImage = (e) => {
        const img = e.target.files[0];
        // const formData = new FormData();
        // formData.append('img', img);
        // console.log(formData)
        const reader = new FileReader();
        reader.readAsDataURL(img);
        
        reader.onload = () => {
            setSelectImage(reader.result);
            // localStorage.setItem(imageKey, reader.result);
        }
    }

    return (
        <div className="profile-info">
            <span className="profile-info-title">{title}</span>
            <div className="image-upload">
                <form method="post" encType="multipart/form-data">
                    <input type="file" accept="image/*" onChange={changeImage}/>
                </form>
            </div>
            <img src={image} alt="프로필 사진" />
        </div>
    )
}