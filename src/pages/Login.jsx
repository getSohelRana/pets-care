import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const { signIn, logInWithGoogle, resetPassword } = use(AuthContext);
  const [togglePassword, setTogglePassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  // console.log(location)
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    // check empty
    if (!email || !password) {
      toast.error("Oops! Some fields are missing. Please fill in both fields.");
      return;
    }
    // user sign in
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        //show success messeage
        toast.success(`Welcome back, ${user.displayName || "user"}!`);
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
  // handle password reset
  const handlePasswordReset = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value.trim();
    //check empty email fields
    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }
    // console.log(email);
    //user reset password firebase
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Please check your inbox.");
        setTimeout(() => {
          window.location.href = "https://mail.google.com/";
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
        // const errorMessages = error.message;
        // console.log(errorMessages);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 px-3">
      <div className="card bg-base-200 w-full max-w-sm shadow-xl">
        <h1 className="text-center py-4 text-2xl font-semibold border-b border-base-300">
          Log in to your account
        </h1>

        <div className="card-body bg-white">
          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email"
              />

              {/* Password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={togglePassword ? "text" : "password"}
                  name="password"
                  className="input w-full pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setTogglePassword(!togglePassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {togglePassword ? (
                    <IoEyeOutline size={20} />
                  ) : (
                    <IoEyeOffOutline size={20} />
                  )}
                </button>
              </div>

              {/* Forgot password */}
              <div className="mt-2">
                <a
                  onClick={() =>
                    document.getElementById("password_reseter").showModal()
                  }
                  className="link link-hover text-sm text-primary"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button className="btn btn-neutral mt-4 bg-secondary text-xl text-gray-700 w-full">
                Log In
              </button>

              {/* Signup Redirect */}
              <p className="text-center mt-3 text-sm">
                Don’t have an account?{" "}
                <Link to="/auth/signup" className="text-primary link-hover">
                  Sign Up
                </Link>
              </p>
            </fieldset>
          </form>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="btn bg-base-100 border border-gray-300 text-black mt-5 w-full"
          >
            <svg
              aria-label="Google logo"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="M0 0h512v512H0z" fill="#fff" />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="M90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>

      {/* Reset Password Modal */}
      <dialog
        id="password_reseter"
        className="modal modal-bottom sm:modal-middle px-2"
      >
        <div className="modal-box mx-auto">
          <h3 className="font-semibold text-lg mb-3">Reset Your Password</h3>
          <form
            onSubmit={handlePasswordReset}
            className="flex flex-col gap-4 justify-center items-center"
          >
            <fieldset className="fieldset w-full max-w-sm">
              <label className="label">Typer your registered email</label>
              <input
                ref={emailRef}
                type="email"
                className="input w-full text-[17px] focus:outline-primary focus:border-0"
                placeholder="Enter your email"
              />
            </fieldset>

            <button
              type="submit"
              className="btn btn-primary max-w-sm text-gray-700"
            >
              Send Reset Email
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Toaster */}
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#ff9e9e",
            color: "#000",
          },
          success: {
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
