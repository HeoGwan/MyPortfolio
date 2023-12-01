import React, {useState, useRef} from 'react'

import ImageInput from '../components/ImageInput'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Register({navigate, SaveUser}) {
    const [selectImage, setSelectImage] = useState(null);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [introduce, setIntroduce] = useState('');

    const nameRef = useRef();
    const idRef = useRef();
    const pwRef = useRef();
    const introduceRef = useRef();

    // 가입하기 클릭 시
    const RegisterUser = () => {
        const userData = {
            profileImage: selectImage,
            name, 
            password,
            introduce,
        }
        if (SaveUser(id, userData)) {
            setSelectImage(null);
            setName('');
            setId('');
            setPassword('');
            setIntroduce('');

            alert('가입되셨습니다!');
            navigate('login');
        } else {
            alert(`해당 아이디가 이미 존재합니다.\n다른 아이디를 입력하세요`);
            idRef.current.focus();
        }
    }

    return (
        <div className="content">
            <div>
                <h1 className="title">회원가입</h1>
                <ImageInput title='프로필 사진' setSelectImage={setSelectImage} image={selectImage}/>
                <Input title='이름' valueRef={nameRef} value={name} setValue={setName}/>
                <Input title='아이디' valueRef={idRef} value={id} setValue={setId}/>
                <Input title='비밀번호' type='password' value={password} valueRef={pwRef} setValue={setPassword}/>
                <Input title='간단 소개' value={introduce} valueRef={introduceRef} setValue={setIntroduce}/>
                <Button
                    buttonName='가입하기'
                    style={{backgroundColor: '#4985DF', color:'white'}}
                    action={RegisterUser}
                />
            </div>
        </div>
    )
}