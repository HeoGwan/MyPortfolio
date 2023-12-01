import React from "react";
import PortfolioCard from './PortfolioCard'

export default function PortfolioList({navigate}) {
    return (
        <div className="portfolio-list">
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
        </div>
    )
}