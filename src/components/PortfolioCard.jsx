import React from "react";

export default function PortfolioCard({navigate, portfolio}) {
    const transform = (text) => {
        console.log(text)
        return text.replace('\n', '<br/>');
    }

    return (
        <button className="portfolio" onClick={() => navigate(`portfolio/${portfolio.id}`)}>
            <img src={portfolio.portfolioImage} alt="포트폴리오 대표이미지" />
            <div className="title">{portfolio.title}</div>
            {/* <div className="portfolio-content" dangerouslySetInnerHTML={
                {__html: 
                    portfolio.content.length > 100 ?
                    transform(portfolio.content.substring(0, 100) + '...') :
                    transform(portfolio.content)
                }
            }></div> */}
            <div className="portfolio-content">
                {
                    portfolio.content.length > 40 ?
                    portfolio.content.substring(0, 40) + '...' :
                    portfolio.content
                }
            </div>
        </button>
    )
}