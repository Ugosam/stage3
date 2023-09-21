import React, { useState } from 'react'
import { FiEyeOff, FiEye } from "react-icons/fi";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}
const Login = ({ setIsAuthenticated }: LoginProps) => {
    setIsAuthenticated(false)
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const signIn = async (e:any) => {
        e.preventDefault()
        try {
            const response = await auth.signInWithEmailAndPassword(
                username,
                password
            );
            console.log("res", response)
            setIsAuthenticated(true)
            navigate('/gallery');

        } catch (error: any) {
            console.log("eqwaefsdbghjgfdvsc", error)
            setError(error.message);
        }
    };



    return (
        <>
            <div
                className="w-full min-h-screen bg-cover bg-center flex justify-center items-center"
                style={{
                    backgroundImage: 'url(/image/Spider.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                {/* Form section */}
                <div className="md:flex justify-between sm:mt-12 2xl:mt-[5rem] md:px-4 px-1 sm:px-0">
                    <h1 className="text-white md:mt-[13.5rem] pt-10 sm:ml-10 2xl:ml-[26rem] md:float-left tracking-widest font-bold text-3xl font-serif">
                        WELCOME
                    </h1>
                    <div className="bg-white shadow-md border border-gray-100 md:w-[35%] sm:w-[80%] p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 mt-4 mr-3 m-auto rounded">
                        <form className="" action="#" onSubmit={signIn}>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Login</h3>
                                <p className="text-xl text-gray-900 dark:text-white">Welcome back! Please enter your details.</p>
                                <hr className="mt-2 border-b-0 border-blueGray-300" />
                            </div>

                            {/* Email input */}
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="username"
                                    data-testid="username"
                                    placeholder="ugochi.amajoh@gmail.com"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                />
                            </div>

                            {/* Password input */}
                            <div>
                                <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                                    Password
                                </label>
                                <div className="flex relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        data-testid="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    />
                                    <span className="absolute m-2 pt-2 right-0 text-gray-300 hover:text-blue-300"
                                        onClick={togglePasswordVisibility}>{showPassword ? <FiEyeOff style={{ color: 'gray' }} /> : <FiEye style={{ color: 'gray' }} />}
                                    </span>
                                </div>
                            </div>

                            {error && (
                                <div className="text-red-500 text-center mt-2">
                                    {error}
                                </div>
                            )}

                            {/* Button */}

                            <button
                                type="submit"
                                className={`w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ${!username || !password ? 'bg-gray-700 cursor-not-allowed' : ''}`}
                                disabled={!username || !password}
                                // onClick={signIn}
                                >
                                Login
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login