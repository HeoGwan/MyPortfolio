import React, {useState, useRef} from 'react';

import Input from '../components/Input'
import Button from '../components/Button'

export default function Login({navigate, userData, setUser}) {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const idRef = useRef();
    const passwordRef = useRef();

    const login = () => {
        // 입력한 아이디를 찾은 뒤 비밀번호가 일치한지 판단 후
        // 일치하면 로그인 진행, 아니면 메시지 출력
        const data = userData[id];
        console.log(userData)
        console.log(data);
        // 로그인 실패
        if (data === null || data === undefined) {
            alert(`아이디가 올바르지 않습니다.\n올바른 아이디를 입력해주세요.`);
            idRef.current.focus();
            return;
        }
        
        if (data.password !== password) {
            alert(`비밀번호가 올바르지 않습니다.\n올바른 비밀번호를 입력해주세요.`);
            passwordRef.current.focus();
            return;
        }

        // 로그인 성공
        data.id = id;
        alert(`${data.name}님 환영합니다.`);
        setUser(data);
        console.log(data);
        navigate('/');
    }

    const onEnterLogin = (e) => {
        login();
    }

    return (
        <div className="content">
            <div>
                <h1 className="title">로그인</h1>
                <Input title='아이디' value={id} valueRef={idRef} setValue={setId} keyDownAction={onEnterLogin}/>
                <Input title='비밀번호' type='password' value={password} valueRef={passwordRef} setValue={setPassword} keyDownAction={onEnterLogin}/>
                <div className="buttons">
                    <Button buttonName='회원가입' navigate={navigate} path='register'/>
                    <Button buttonName='로그인' style={{backgroundColor: '#4985DF', color: 'white'}} action={login}/>
                </div>
            </div>
        </div>
    )
}