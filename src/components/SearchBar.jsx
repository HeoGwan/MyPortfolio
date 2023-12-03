import {useState, useRef} from 'react';
import {FaSearch} from 'react-icons/fa';

export default function SearchBar({navigate, setSearchType, setResults, userData, portfolios}) {
    const [word, setWord] = useState('');
    const [type, setType] = useState('title');
    const inputRef = useRef();
    const typeRef = useRef();

    const ChangeType = () => {
        setType(typeRef.current.value);
    }
    const typingSearchWord = () => {
        setWord(inputRef.current.value);
    }
    const onSearch = () => {
        // search(word, typeRef.current.value);
        switch (type) {
            case 'writer':
                // 글쓴이 찾기
                const writers = Object.keys(userData).filter((id) => userData[id].nickname.includes(word))
                setResults(writers);
            break;
            case 'title':
                const titles = portfolios.filter((portfolio) => portfolio != null && portfolio.title.includes(word));
                setResults(titles);
                break;
            case 'content':
                const contents = portfolios.filter((portfolio) => portfolio != null && portfolio.content.includes(word));
                setResults(contents);
                break;
        }
        setSearchType(type);
        navigate('search');
        setWord('');
    }
    const onEnterSearch = (e) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    }

    return (
        <div className="search-bar">
            <select className="search-option" ref={typeRef} onChange={ChangeType}>
                <option value="title">제목</option>
                <option value="content">내용</option>
                <option value="writer">글쓴이</option>
            </select>
            <div className="input-bar">
                <input onChange={typingSearchWord} value={word} type="text" placeholder='검색어를 입력하세요' onKeyDown={onEnterSearch} ref={inputRef}/>
                <FaSearch className='search-icon' onClick={onSearch}/>
            </div>
        </div>
    )
}