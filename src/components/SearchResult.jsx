import ProfileCard from './ProfileCard';

export default function SearchResult({navigate, result, type}) {


    return (
        <div className="search-result">
            {
                type === 'writer' ?
                // 글쓴이 검색
                <div className="writer-result">
                    
                </div> :
                // 게시글 검색
                <div className="portfolio-result">
                    <div className="user-info">
                        <img src="" alt="" />
                        <div className="user-name"></div>
                    </div>
                </div>
            }
        </div>
    )
}