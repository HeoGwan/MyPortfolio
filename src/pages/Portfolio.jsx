import no_image from '../images/no_thumbnail.png';

import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

import Button from '../components/Button'

export default function Portfolio({navigate, user, deletePortfolio, setLookPortfolio}) {
    const {portfolioId} = useParams();
    const [portfolio, setPortfolio] = useState({});

    useEffect(() => {
        const portfolios = JSON.parse(localStorage.getItem('portfolios'));
        console.log(portfolios)
        console.log(portfolioId)
        console.log(portfolios[portfolioId]);
        setPortfolio(portfolios[portfolioId]);
        setLookPortfolio(portfolios[portfolioId]);
    }, [])

    const transform = (text) => {
        if (text === null || text === undefined) return text;
        return text.replace('\n', '<br/>');
    }

    return (
        <div className="content">
            <div className="portfolio-content">
                <h1 className="title">포트폴리오</h1>
                {/* thumbnail image */}
                <div className="thumbnail">
                    {
                        portfolio.portfolioImage === 'no_thumbnail.png' ?
                            <img src={no_image} alt="대표 이미지" className="thumbnail-image"/> :
                            <img src={portfolio.portfolioImage} alt="대표 이미지" className="thumbnail-image"/>
                    }
                </div>
                {
                    user && user.id === portfolio.userId &&
                    <div className="content-header">
                        <span>{portfolio.title}</span>
                        <Button
                            buttonName="수정"
                            style={{backgroundColor: "#6593EC", color: "white"}}
                            navigate={navigate}
                            path='portfolio-edit'
                        />
                        <Button
                            buttonName="삭제"
                            style={{backgroundColor: "#EE4646", color: "white"}}
                            action={() => deletePortfolio(portfolioId)}
                        />
                    </div>
                }

                <div className="article" dangerouslySetInnerHTML={{__html: transform(portfolio.content)}}>
                </div>
            </div>
        </div>
    )
}