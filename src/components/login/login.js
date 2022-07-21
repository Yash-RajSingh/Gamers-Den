import { LoginBody, LoginTitle, LoginDisplay,DisplayImage, Container, LoginForm, LoginHeader, Label, InputFields, LoginButton } from './loginElements'
import DP from '../../assets/sheSoldier.png'
import { useState } from 'react';
import FB from '../../firebase';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const Login = () => {
    const [email,setEmail] = useState()
    const [pass,setPass] = useState()
    const FireAuth = getAuth(FB)
    function loginUser() {
        createUserWithEmailAndPassword(FireAuth, email, pass)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{console.log(err)})
    }
    return (<>
        <LoginTitle>Join the faternity of gamers today!</LoginTitle>
        <LoginBody>
            <Container style={{display:"flex", justifyContent:"center"}}>
                <DisplayImage src={DP}/>
            </Container>
            <Container>
                <LoginForm>
                <LoginHeader>Login</LoginHeader>
                        <div>
                            <Label>Email</Label>
                            <InputFields type='email' placeholder='Enter Your E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
                            <Label>Password</Label>
                            <InputFields type='password' placeholder='Enter Your Password' value={pass} onChange={(e)=>setPass(e.target.value)} />
                        </div>
                        <LoginButton type='button' onClick={loginUser}>Login</LoginButton>
                </LoginForm>
            </Container>
        </LoginBody>

    </>);
}

export default Login; 


{/* <LoginBody>
    <LoginDisplay>
        <Container>
            <LoginForm>
                <LoginHeader>Login</LoginHeader>
                <div>
                    <Label>Email</Label>
                    <InputFields type='email' placeholder='Enter Your E-mail' />
                    <Label>Password</Label>
                    <InputFields type='password' placeholder='Enter Your Password' />
                </div>
                <LoginButton type='submit'>Login</LoginButton>
            </LoginForm>
        </Container>
        <Container>
            <LoginForm>
                <LoginHeader>Signup</LoginHeader>
                <Label>Email</Label>
                <InputFields type='email' placeholder='Enter Your E-mail' />
                <Label>Password</Label>
                <InputFields type='password' placeholder='Enter Your Password' />
                <LoginButton type='submit'>Signup</LoginButton>
            </LoginForm>
        </Container>
    </LoginDisplay>
</LoginBody> */}