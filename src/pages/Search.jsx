import {useState, useEffect} from 'react';

import SearchResult from '../components/SearchResult';

export default function Search({navigate, searchType, userData, portfolios, results}) {
    useEffect(() => {
        console.log(results);
    }, []);

    return (
        <div className='content'>
            <pre></pre>
            {
                searchType === 'writer' ?
                // 글쓴이 검색 시
                results.map((result) => (
                    portfolios.map((portfolio) => (
                        result === portfolio.userId && <SearchResult navigate={navigate} userImage={userData[result].profileImage} userNickname={userData[result].nickname} portfolio={portfolio}/>
                    ))
                )) :
                // 이외 검색 시
                results.map((result) => (
                    <SearchResult navigate={navigate} userImage={userData[result.userId].profileImage} userNickname={userData[result.userId].nickname} portfolio={result}/>
                )) 
            }
        </div>
    )
}
