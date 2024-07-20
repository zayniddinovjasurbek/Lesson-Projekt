import './Login.css'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <section className='login'>

        <div className='login-img'>
            <img src="" alt="" />
        </div>

        <div className='login-form'>
            <form>
                <h1>Log in to Exclusive</h1>
                <p>Enter your details below</p>

                <div className='from-group'>
                    <input type="text" placeholder='Email or Phone Number' />
                </div>

                <div  className='from-group'>
                    <input type="password" placeholder='Password' />
                </div>

                <div className='form-btns'></div>
                <button>Login</button>
                <Link to="/forget"> Forget pasward</Link>
            </form>
        </div>              

    </section>
  )
}

export default Login
