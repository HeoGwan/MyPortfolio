import React from 'react'

import ProfileCard from '../components/ProfileCard'
import PortfolioList from '../components/PortfolioList'

export default function Main({navigate, user, portfolios}) {

    return (
        <div className='content'>
            <span>
                <ProfileCard navigate={navigate} user={user}/>
                <PortfolioList navigate={navigate} user={user} portfolios={portfolios}/>
            </span>
        </div>
    )
}