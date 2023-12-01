import React from "react";

import ImageInput from '../components/ImageInput'
import Input from '../components/Input'
import BigInput from '../components/BigInput'
import Button from '../components/Button'

export default function PortfolioEdit({navigate}) {
    return (
        <div className="content">
            <div className="write-content">
                <h1 className="title">포트폴리오 수정</h1>
                <ImageInput title='대표 이미지'/>
                <Input title='제목'/>
                <BigInput title='내용'/>
                <div className="buttons">
                    <Button buttonName="취소" style={{backgroundColor: "#F1F1F1", color: "black"}}/>
                    <Button buttonName="수정" style={{backgroundColor: "#6593EC", color: "white"}}/>
                </div>
            </div>
        </div>
    )
}