import React from 'react'
import "./signUp.css"
import { Link } from 'react-router-dom'

const signUp = () => {
  return (
    <section className='signup'>

      <div className='signup-img'>
        <img src="" alt="" />
      </div>

      <div className='signup-form'>
          <form>
            <h1>Create an accaunt</h1>
            <p>Enter your details below</p>

            <div form-group>
              <input type="text" placeholder='Name' />
            </div>

            <div form-group>
              <input type="text" placeholder='Eamil or Phone  Number' />
            </div>

            <div form-group>
              <input type="password" placeholder='Password' />
            </div>

            <button>Create Acaunt</button>
            <Link to="ww.google.ocm">Sing up with Google</Link>
            <p>Already have accaunt <Link to="/login"> Log In</Link></p>
          </form>
      </div>
      
    </section>
  )
}

export default signUp
