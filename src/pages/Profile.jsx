import React, {useState, useRef} from 'react'

import ImageInput from '../components/ImageInput'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Profile({navigate, user, updateUser, deleteUser}) {
    const [selectImage, setSelectImage] = useState(user.profileImage);
    const [nickname, setNickname] = useState(user.nickname);
    const [id, setId] = useState(user.id);
    const [password, setPassword] = useState(user.password);
    const [introduce, setIntroduce] = useState(user.introduce);
    const prevId = user.id;

    const nicknameRef = useRef();
    const idRef = useRef();
    const passwordRef = useRef();
    const introduceRef = useRef();

    const updateProfile = () => {
        if(!updateUser({profileImage: selectImage, prevId, nickname, id, password, introduce})) {
            // 변경 실패
            alert(`동일한 아이디가 존재합니다\n다른 아이디로 변경해주세요`);
            idRef.current.focus();
            return;
        }
    }

    return (
        <div className='content'>
            <div className="profile-content">
                <h1 className="title">나의 프로필</h1>
                <ImageInput title='프로필 사진' setSelectImage={setSelectImage} image={selectImage}/>
                <Input title='닉네임' value={nickname} valueRef={nicknameRef} setValue={setNickname}/>
                <Input title='아이디' value={id} valueRef={idRef} setValue={setId}/>
                <Input title='비밀번호' value={password} valueRef={passwordRef} setValue={setPassword}/>
                <Input title='간단 소개' value={introduce} valueRef={introduceRef} setValue={setIntroduce}/>
                {/* <button className="profile-update-button">수정</button> */}
                <div className="buttons">
                    <Button
                        buttonName="취소"
                        style={{backgroundColor: "#F1F1F1", color: "black"}}
                        action={() => navigate(-1)}
                    />
                    <Button
                        buttonName='수정'
                        style={{backgroundColor: '#6593EC', color:'white'}}
                        action={updateProfile}
                    />
                </div>
                <Button
                    buttonName='회원 탈퇴'
                    style={{backgroundColor: '#EE4646', color:'white'}}
                    action={deleteUser}
                />
            </div>
        </div>
    )
}