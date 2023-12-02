import React, {useState, useRef} from "react";

import ImageInput from '../components/ImageInput'
import Input from '../components/Input'
import BigInput from '../components/BigInput'
import Button from '../components/Button'

export default function Write({navigate, user, savePortfolio, portfolioId}) {
    const [selectImage, setSelectImage] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const titleRef = useRef();
    const contentRef = useRef();

    const portfolioSubmit = () => {
        // 제목이나 내용이 없을 경우 메시지 출력
        if (title === '') {
            alert(`제목을 입력해주세요`);
            titleRef.current.focus();
            return;
        }

        if (content === '') {
            alert(`내용을 입력해주세요`);
            contentRef.current.focus();
            return;
        }


        // 포트폴리오 저장
        const portfolioData = {
            userId: user.id,
            id: portfolioId.current,
            portfolioImage: selectImage,
            title,
            content,
        }

        if (savePortfolio(portfolioData)) {
            setSelectImage(null);
            setTitle('');
            setContent('');
            alert(`포트폴리오가 저장되었습니다!`);
            navigate('/');
        } else {
            alert(`포트폴리오가 저장되지 않았습니다..`);
        }
    }

    return (
        <div className="content">
            <div className="write-content">
                <h1 className="title">포트폴리오 작성</h1>
                <ImageInput title='대표 이미지' imageKey={'thumbnail'} setSelectImage={setSelectImage} image={selectImage}/>
                <Input title='제목' value={title} setValue={setTitle} valueRef={titleRef}/>
                <BigInput title='내용' value={content} setValue={setContent} valueRef={contentRef}/>
                <div className="buttons">
                    <Button buttonName="취소" style={{backgroundColor: "#F1F1F1", color: "black"}} action={() => navigate(-1)}/>
                    <Button buttonName="작성" style={{backgroundColor: "#6593EC", color: "white"}} action={portfolioSubmit}/>
                </div>
            </div>
        </div>
    )
}