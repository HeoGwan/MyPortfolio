import {useState, useEffect, useRef} from 'react';
import {Routes, Route, useNavigate, redirect, useLocation} from 'react-router-dom'
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

// Complete
// 포트폴리오 검색
// 문제점: search 페이지에서 다시 검색 시 검색 결과가 안뜸

// Todo
// 포트폴리오 수정 및 삭제
// 프로필 간단 소개 파싱

const toJsonData = (data) => {
	if (data === null || data === undefined) return null;

	return JSON.stringify(data);
}
const toObjectData = (data) => {
	if (data === null || data === undefined) return null;

	return JSON.parse(data);
}

function App() {
	const location = useLocation();
	const navigate = useNavigate();
	const portfolioId = useRef(0);
	
	// 회원 정보 관리
	const [userData, setUserData] = useState({});
	const [user, setUser] = useState(null);
	// const [user, setUser] = useState(1); // test code
	
	// 검색정보
	// 검색어 정보
	const [searchWord, setSearchWord] = useState('');
	// 검색 종류 정보
	const [searchType, setSearchType] = useState('');
	// 검색 결과 정보
	const [results, setResults] = useState([]);

	// 포트폴리오 정보
	const [portfolios, setPortfolios] = useState([]);

	useEffect(() => {
		// 회원 정보 가져오기		
		const data = toObjectData(localStorage.getItem('userData'));
		if (data === null || data == undefined) return;
		else{
			setUserData(data);
			// console.log('data: ', data);
		}

		// 포트폴리오 정보 가져오기
		const portfolioData = toObjectData(localStorage.getItem('portfolios'));
		if (portfolioData === null || portfolioData === undefined) return;
		else {
			portfolioId.current = portfolioData.length;
			setPortfolios(portfolioData);
			console.log(portfolios)
		}
	}, []);

	// 함수
	const saveUserData = () => {
		localStorage.setItem('userData', toJsonData(userData));
	}

	// 회원
	// 회원 저장
	const saveUser = (id, saveData) => {
		const data = userData;
		console.log(data, id, data[id])
		if (data[id] !== null && data[id] !== undefined) {
			// 이미 존재하는 회원
			return false;
		}

		data[id] = saveData;
		setUserData(data);
		saveUserData();
		return true;
	}

	// 프로필 수정
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
		data[id].nickname = updateData.nickname;
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

	// 회원 탈퇴
	const deleteUser = () => {
		const data = userData;
		if (data[user.id] === null && data[user.id] === undefined) {
			// 없는 유저는 삭제 불가능
			alert(`존재하지 않는 아이디입니다.`);
			return;
		}

		const isDelete = window.confirm(`정말 탈퇴하시겠습니까?`);

		if (isDelete) {
			// 스토리지에 있는 데이터 삭제
			// delete data[user.id];
			// setUserData(data);
			// saveUserData();
			localStorage.removeItem(user.id);
			alert(`탈퇴하였습니다.`);
			setUser(null);
			navigate('/');
		}
	}

	// 로그아웃 함수
	const logout = () => {
		setUser(null);
	}


	// 포트폴리오
	const savePortfolioData = () => {
		localStorage.setItem('portfolios', toJsonData(portfolios));
	}

	const savePortfolio = (saveData) => {
		const data = portfolios;
		if (data[savePortfolio.id] !== null && data[savePortfolio.id] !== undefined) {
			// 이미 존재하는 아이디
			return false;
		}

		data[portfolioId.current] = saveData;
		setPortfolios(data);
		savePortfolioData();
		portfolioId.current += 1;
		return true;
	}


	return (
		<div className='app'>
			<Header navigate={navigate} user={user} logout={logout}/>
			<SearchBar navigate={navigate} setSearchType={setSearchType} setResults={setResults} userData={userData} portfolios={portfolios}/>
			<Routes>
				{/* user 정보가 있을 경우(로그인 한 경우) 프로필과 포트폴리오를 보여준다. */}
				{ user ? 
					<Route path='/' element={<Main navigate={navigate} user={user} portfolios={portfolios}/>}/> :
					<Route path='/' element={<NonUserMain navigate={navigate}/>}/>
				}
				<Route path='profile' element={<Profile navigate={navigate} user={user} updateUser={updateUser} deleteUser={deleteUser}/>}/>
				<Route path='write' element={<Write navigate={navigate} user={user} savePortfolio={savePortfolio} portfolioId={portfolioId}/>}/>
				<Route path='portfolio/:portfolioId' element={<Portfolio navigate={navigate} portfolios={portfolios}/>}/>
				<Route path='portfolio-edit' element={<PortfolioEdit navigate={navigate}/>}/>
				<Route path='register' element={<Register navigate={navigate} saveUser={saveUser}/>}/>
				<Route path='login' element={<Login navigate={navigate} userData={userData} setUser={setUser}/>}/>
				<Route path='search' element={<Search navigate={navigate} searchType={searchType} userData={userData} portfolios={portfolios} results={results}/>}/>
			</Routes>
			{ user && <WriteButton navigate={navigate} /> }
			<Footer />
		</div>
	);
}

export default App;
