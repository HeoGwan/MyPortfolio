import React, {useEffect} from "react";
import PortfolioCard from './PortfolioCard'

export default function PortfolioList({navigate, user, portfolios}) {
    useEffect(() => {
        console.log(user);
        console.log(portfolios);
    }, []);
    return (
        <div className="portfolio-list">
            {
                portfolios.map((portfolio) => {
                    if (portfolio.userId === user.id) {
                        return <PortfolioCard key={portfolio.id} navigate={navigate} portfolio={portfolio}></PortfolioCard>
                    }
                })
            }
            {/* <PortfolioCard navigate={navigate}></PortfolioCard> */}
            {/*<PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard>
            <PortfolioCard navigate={navigate}></PortfolioCard> */}
        </div>
    )
}