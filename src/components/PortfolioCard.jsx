import React from "react";

export default function PortfolioCard({navigate}) {
    return (
        <button className="portfolio" onClick={() => navigate('portfolio')}>
            <img src="game_image.png" alt="포트폴리오 대표이미지" />
            <div className="title">제목</div>
            <div className="portfolio-content">내용</div>
        </button>
    )
}