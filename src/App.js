import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './style.css'

// Default Components
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WriteButton from './components/WriteButton'
import Footer from './components/Footer'

// pages
import NonUserMain from './pages/NonUserMain'
import Main from './pages/Main'
import Profile from './pages/Profile'
import Write from './pages/Write'
import Portfolio from './pages/Portfolio'
import PortfolioEdit from './pages/PortfolioEdit'
import Register from './pages/Register'
import Login from './pages/Login'
import Search from './pages/Search'

const toJsonData = (data) => {
	return JSON.stringify(data);
}
const toObjectData = (data) => {
	return JSON.parse(data);
}

function App() {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({});

	// 회원 정보 관리
	const [user, setUser] = useState(null);
	// const [user, setUser] = useState(1); // test code
	// 검색어 정보
	const [searchWord, setSearchWord] = useState('');
	// 검색 종류 정보
	const [searchType, setSearchType] = useState('');


	// 회원 정보 가져오기
	useEffect(() => {
		const data = toObjectData(localStorage.getItem('userData'));
		if (data === null || data == undefined) return;
		else{
			setUserData(data);
			// console.log('data: ', data);
		}
	}, []);

	// 함수
	const SaveUser = (id, saveData) => {
		const data = userData;
		console.log(data, id, data[id])
		if (data[id] !== null && data[id] !== undefined) {
			// 이미 존재하는 회원
			return false;
		}

		data[id] = saveData;
		setUserData(data);
		localStorage.setItem('userData', toJsonData(data));
		return true;
	}

	const updateUser = (updateData) => {
		console.log(updateData)
		const data = userData;
		// 현재 data에 동일한 아이디가 있으면 변경 불가능
		if (data[updateData.id] !== null && data[updateData.id] !== undefined && (updateData.id !== updateData.prevId)) {
			return false;
		}

		const id = updateData.prevId;
		console.log(userData);
		console.log(data);
		console.log(data[id]);
		console.log('id', id);
		// console.log(`data: ${data[id].profileImage}, update: ${updateData.profileImage}`);
		data[id].profileImage = updateData.profileImage;
		data[id].name = updateData.name;
		data[id].id = updateData.id;
		data[id].password = updateData.password;
		data[id].introduce = updateData.introduce;
		
		if (id !== updateData.id) {
			// 아이디가 변경 됨
			console.log('변경 전', data);
			data[updateData.id] = data[id];
			delete data[id];
			console.log('변경 후', data);			
		}
		
		setUserData(data);
		setUser(data[updateData.id]);
		localStorage.setItem('userData', toJsonData(data));
		return true;
	}

	const logout = () => {
		setUser(null);
	}

	return (
		<div className='app'>
			<Header navigate={navigate} user={user} logout={logout}/>
			<SearchBar navigate={navigate} setSearchWord={setSearchWord} setSearchType={setSearchType}/>
			<Routes>
				{/* user 정보가 있을 경우(로그인 한 경우) 프로필과 포트폴리오를 보여준다. */}
				{ user ? 
					<Route path='/' element={<Main navigate={navigate} user={user}/>}/> :
					<Route path='/' element={<NonUserMain navigate={navigate}/>}/>
				}
				<Route path='profile' element={<Profile navigate={navigate} user={user} updateUser={updateUser}/>}/>
				<Route path='write' element={<Write navigate={navigate}/>}/>
				<Route path='portfolio' element={<Portfolio navigate={navigate}/>}/>
				<Route path='portfolio-edit' element={<PortfolioEdit navigate={navigate}/>}/>
				<Route path='register' element={<Register navigate={navigate} SaveUser={SaveUser}/>}/>
				<Route path='login' element={<Login navigate={navigate} userData={userData} setUser={setUser}/>}/>
				<Route path='search' element={<Search navigate={navigate} searchWord={searchWord} searchType={searchType} userData={userData}/>}/>
			</Routes>
			{ user && <WriteButton navigate={navigate} /> }
			<Footer />
		</div>
	);
}

export default App;
