import './Login.css';

const Login = () => {
    return(
        <div className='main-container'>
            <form className='login-container'>
                <h1>Login</h1>
                <div className="inputs">
                    <label htmlFor="username">Username</label>
                    <input type='text' placeholder='username' id='username'/>
                </div>
                <div className="inputs">
                    <label htmlFor="password">Password</label>
                    <input type='password' placeholder='password' id='password'/>
                </div>
                <button type="submit" className='add-button'>Login</button>
            </form>
        </div>
    )
}

export default Login