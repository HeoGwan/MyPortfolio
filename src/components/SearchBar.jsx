import {useState, useRef} from 'react';
import {FaSearch} from 'react-icons/fa';

export default function SearchBar({navigate, setSearchWord, setSearchType}) {
    const [word, setWord] = useState('');
    const inputRef = useRef();
    const menuRef = useRef();

    const typingSearchWord = () => {
        setWord(inputRef.current.value);
    }
    const onSearch = () => {
        setSearchWord(word);
        setWord('');
        navigate('search');
        setSearchType(menuRef.current.value);
    }
    const onEnterSearch = (e) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    }

    return (
        <div className="search-bar">
            <select className="search-option" ref={menuRef}>
                <option value="title">제목</option>
                <option value="content">내용</option>
                <option value="writer">글쓴이</option>
                <option value="title_content">제목+내용</option>
            </select>
            <div className="input-bar">
                <input onChange={typingSearchWord} value={word} type="text" placeholder='검색어를 입력하세요' onKeyDown={onEnterSearch} ref={inputRef}/>
                <FaSearch className='search-icon' onClick={onSearch}/>
            </div>
        </div>
    )
}