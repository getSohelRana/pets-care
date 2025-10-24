import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const { signIn, logInWithGoogle } = use(AuthContext);
  const [togglePassword, setTogglePassword] = useState(false);
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
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
    toast.success("Successfully login!");
    e.target.reset();
  };

  // handle sign with goole
  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then((res) => {
        const user = res.user;
        toast.success(`Welcome back, ${user.displayName || "User"}!`);
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
              <div className="relative">
                <input
                  type={togglePassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button
                  onClick={() => setTogglePassword(!togglePassword)}
                  type="button"
                  className="btn absolute top-0 right-4 z-1"
                >
                  {togglePassword ? (
                    <IoEyeOutline size={20} />
                  ) : (
                    <IoEyeOffOutline size={20} />
                  )}
                </button>
              </div>

              {/* Reset password*/}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button className="btn btn-neutral mt-4 bg-secondary text-white text-xl ">
                Log In
              </button>

              <p className="text-center font-semibold mt-2">
                Don’t have an account?{" "}
                <span className="text-primary link-hover">
                  <Link to="/auth/signup">Sign Up</Link>
                </span>
              </p>
            </fieldset>
          </form>
          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="btn bg-base-100 text-black border-[#e5e5e5] mt-5"
          >
            <svg
              aria-label="Google logo"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
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
