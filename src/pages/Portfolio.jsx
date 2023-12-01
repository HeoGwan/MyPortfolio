import React from "react";

import ImageInput from '../components/ImageInput'
import Input from '../components/Input'
import BigInput from '../components/BigInput'
import Button from '../components/Button'

export default function Portfolio({navigate}) {
    const deletePortfolio = () => {
        const isDeletePortfolio = window.confirm('포트폴리오를 삭제하시겠습니까?')

        if (isDeletePortfolio) {
            window.alert('포트폴리오를 삭제했습니다.');
            navigate('/');
        }
    }

    return (
        <div className="content">
            <div className="portfolio-content">
                <h1 className="title">내 포트폴리오</h1>
                {/* thumbnail image */}
                <div className="thumbnail">
                    <img src="game_image2.png" alt="대표 이미지" className="thumbnail-image"/>
                </div>
                <div className="content-header">
                    <span>제목</span>
                    <Button
                        buttonName="수정"
                        style={{backgroundColor: "#6593EC", color: "white"}}
                        navigate={navigate}
                        path='portfolio-edit'
                    />
                    <Button
                        buttonName="삭제"
                        style={{backgroundColor: "#EE4646", color: "white"}}
                        action={deletePortfolio}
                    />
                </div>

                <div className="article">
                내용내용내용내용내용내용내용내용내용내용내용내내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내내용내용내용내용내
                </div>
            </div>
        </div>
    )
}