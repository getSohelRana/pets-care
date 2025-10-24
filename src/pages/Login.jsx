import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const {signIn} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location)
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

     // check empty
    if (!email || !password) {
      toast.error("Oops! Some fields are missing. Please fill them in.");
      return;
    }

    signIn(email, password)
    .then((res)=> {
      const user = res.user;
      console.log(user)
      navigate(`${location.state ? location.state : '/'}`)
    }).catch((error)=>{
      toast.error(error.message)
    })
    toast.success("Successfully login!");
    e.target.reset()
  };
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
      <Toaster
        position="left-bottom"
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          removeDelay: 100,
          style: {
            background: "#ff9e9e",
            color: "#000",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "#000",
            },
            style: {
              background: "#7cf2c3",
              color: "#000",
            },
          },
        }}
      />
    </div>
  );
};

export default Login;
