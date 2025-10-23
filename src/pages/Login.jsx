import React from "react";
import { Link } from "react-router";

const Login = () => {
    const handleLogin= (e) => {
        e.preventDefault()
    }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-xl">
        <h1 className="text-center py-4 text-2xl border-b-2 border-base-200 font-semibold">
          LogIn your account
        </h1>
        <div className="card-body bg-white">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />

              {/* Reset password*/}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button className="btn btn-neutral mt-4">Log In</button>

              <p className="text-center font-semibold mt-2">
                Already have an account?{" "}
                <span className="text-primary link-hover">
                  <Link to="/auth/signup">Sign Up</Link>
                </span>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
