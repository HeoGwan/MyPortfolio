import React, {useState, useRef, useEffect} from "react";

import ImageInput from '../components/ImageInput'
import Input from '../components/Input'
import BigInput from '../components/BigInput'
import Button from '../components/Button'

export default function PortfolioEdit({navigate, portfolio, updatePortfolio}) {
    const [selectImage, setSelectImage] = useState(portfolio.portfolioImage);
    const [title, setTitle] = useState(portfolio.title);
    const [content, setContent] = useState(portfolio.content);

    const titleRef = useRef();
    const contentRef = useRef();

    return (
        <div className="content">
            <div className="write-content">
                <h1 className="title">포트폴리오 수정</h1>
                <ImageInput title='대표 이미지' image={selectImage} setSelectImage={setSelectImage}/>
                <Input title='제목' value={title} valueRef={titleRef} setValue={setTitle}/>
                <BigInput title='내용' value={content} valueRef={contentRef} setValue={setContent}/>
                <div className="buttons">
                    <Button buttonName="취소"
                        style={{backgroundColor: "#F1F1F1", color: "black"}}
                        action={() => navigate(-1)}
                    />
                    <Button
                        buttonName="수정"
                        style={{backgroundColor: "#6593EC", color: "white"}}
                        action={() => updatePortfolio({portfolioImage: selectImage, id: portfolio.id, title, content})}
                    />
                </div>
            </div>
        </div>
    )
}