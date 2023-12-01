import {useState, useEffect} from 'react';

export default function Search({searchWord, searchType, userData}) {
    const [result, setResult] = useState([]);

    useEffect(() => {
        switch (searchType) {
            case 'writer':
                // 글쓴이 찾기
                const writers = Object.keys(userData).filter((data) => data.includes(searchWord))
                setResult(writers);
                console.log('writers: ', result);
            break;
        }
    }, []);

    return (
        <div>
            검색어: {searchWord} <br />
            검색 종류: {searchType}
        </div>
    )
}
