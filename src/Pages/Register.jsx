import React from 'react';
import { Link } from 'react-router';

const Register = () => {

    const handleRegisterButton = e => {
        e.preventDefault();
        console.log('user want to register')
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegisterButton} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div>
                                    <span>Already have an account ? Please </span>
                                    <Link to={'/login'} className="link link-hover text-blue-400">Login</Link>
                                </div>
                                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;