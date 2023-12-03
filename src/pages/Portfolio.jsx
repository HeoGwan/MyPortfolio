import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

import Button from '../components/Button'

export default function Portfolio({navigate, user, portfolios, deletePortfolio, setLookPortfolio}) {
    const {portfolioId} = useParams();
    const [portfolio, setPortfolio] = useState({});

    useEffect(() => {
        console.log(portfolios)
        console.log(portfolioId)
        console.log(portfolios[portfolioId]);
        setPortfolio(portfolios[portfolioId]);
        setLookPortfolio(portfolios[portfolioId]);
    }, [])

    return (
        <div className="content">
            <div className="portfolio-content">
                <h1 className="title">포트폴리오</h1>
                {/* thumbnail image */}
                <div className="thumbnail">
                    <img src={portfolio.portfolioImage} alt="대표 이미지" className="thumbnail-image"/>
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

                <div className="article">
                {/* 내용내용내용내용내용내용내용내용내용내용내용내내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내내용내용내용내용내 */}
                {portfolio.content}
                </div>
            </div>
        </div>
    )
}