import React,{useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput';
const Login = () => {

  const {email, setEmail} = useState('')
  const {password, setPassword} = useState('')
  const {error, setError} = useState(null)
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-28">
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={() => { }}>
            <h4 className="text-2xl font-semibold text-center">Login</h4>
            <input type="text" placeholder='Email' className="input-box" />

            <PasswordInput/>

            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Don't have an account? {"  "}
              <Link to="/signup" className="font-medium text-primary underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};


export default Login