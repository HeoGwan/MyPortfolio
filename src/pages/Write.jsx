import React from "react";

import ImageInput from '../components/ImageInput'
import Input from '../components/Input'
import BigInput from '../components/BigInput'
import Button from '../components/Button'

export default function Write({navigate}) {
    return (
        <div className="content">
            <div className="write-content">
                <h1 className="title">포트폴리오 작성</h1>
                <ImageInput title='대표 이미지' imageKey={'thumbnail'}/>
                <Input title='제목'/>
                <BigInput title='내용' class-name='content-part'/>
                <div className="buttons">
                    <Button buttonName="취소" style={{backgroundColor: "#F1F1F1", color: "black"}} action={() => navigate(-1)}/>
                    <Button buttonName="작성" style={{backgroundColor: "#6593EC", color: "white"}}/>
                </div>
            </div>
        </div>
    )
}