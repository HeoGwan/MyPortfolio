import React from "react"

export default function SearchResult({navigate, userImage, userNickname, portfolio}) {
    return (
        <div className="search-result" onClick={() => navigate(`portfolio/${portfolio.id}`)}>
            <div className="user-info">
                <img src={userImage} alt="프로필 사진" />
                <div className="user-name">{userNickname}</div>
            </div>
            <div className="portfolio-info">
                <img src={portfolio.portfolioImage} alt="포트폴리오 이미지" />
                <div>
                    <div className="result-title">{portfolio.title}</div>
                    <div className="result-content">{
                        portfolio.content.length > 60 ?
                        portfolio.content.substring(0, 60) + '...' :
                        portfolio.content
                    }</div>
                </div>
            </div>
        </div>
    )
}