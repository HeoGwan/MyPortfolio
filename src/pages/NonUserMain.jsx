import Button from '../components/Button';

export default function NonUserMain({navigate}) {
    return (
        <div className="content">
            <span className='register-part'>
                <h2>
                    지금 바로 가입하여 <br />
                    나만의 포트폴리오를 소개 해주세요!
                </h2>
                <Button
                    buttonName='가입 하러가기'
                    style={{
                        color: 'white',
                        backgroundColor: '#4985DF',
                        border: 'none',
                        padding: '10px 30px',
                        borderRadius: '15px',
                        fontWeight: 'bold',
                    }}
                    path='register'
                    navigate={navigate}
                />
            </span>
            <span className='login-part'>
                <h3>
                    이미 계정이 있으신가요?
                </h3>
                <Button
                    buttonName='로그인'
                    style={{
                        color: 'white',
                        backgroundColor: '#4985DF',
                        border: 'none',
                        padding: '10px 30px',
                        borderRadius: '15px',
                        fontWeight: 'bold',
                    }}
                    path='login'
                    navigate={navigate}
                />
            </span>
        </div>
    )
}