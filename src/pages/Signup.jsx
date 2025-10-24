import { use, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Signup = () => {
  const { createUser, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const handleSignup = (e) => {
    e.preventDefault();

    {
      /* Name data validation */
    }
    const name = e.target.name.value.trim();
    if (name.length < 5) {
      setNameError("Name must be more than 5 characters");
      return;
    } else {
      setNameError("");
    }
    const photo = e.target.photo.value.trim();
    const email = e.target.email.value.trim();
    {
      /*check photo and email empty */
    }
    if (!photo || !email) {
      toast.error("🤦‍♂️ Oops! Some fields are missing. Please fill them in.");
      return;
    }

    {
      /* pasword data validation */
    }
    const password = e.target.password.value.trim();
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    } else {
      setPasswordError("");
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    } else {
      setPasswordError("");
    }

    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    } else {
      setPasswordError("");
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError("Password must contain at least one special character.");
      return;
    } else {
      setPasswordError("");
    }

    console.log(name, photo, email, password);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast.success("Account created successfully!");

        // redireact to home page after sign up
        navigate(location.state || "/");
      })
      .catch((error) => {
        // Firebase error code
        const errorCode = error.code;

        //Custom error message replace custom message
        const errorMessages = {
          "auth/email-already-in-use":
            "This email is already registered. Please log in instead.",
          "auth/invalid-email":
            "Invalid email address. Please enter a valid one.",
        };

        // Show custom error message
        const customMessage =
          errorMessages[errorCode] ||
          "Something went wrong. Please try again later.";
        toast.error(customMessage);
      });

    e.target.reset();
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-xl">
        <h1 className="text-center py-4 text-2xl border-b-2 border-base-200 font-semibold">
          SignUp your account
        </h1>
        <div className="card-body bg-white">
          <form onSubmit={handleSignup}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <small className="text-error">{nameError}</small>
              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="url"
                name="photo"
                className="input"
                placeholder="Photo URL"
              />

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
              <div className="relative">
                <input
                  type= {togglePassword ? 'text' : 'password'}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button onClick={()=> setTogglePassword(!togglePassword)} type="button" className="btn absolute top-0 right-4 z-1">
                  {togglePassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                </button>
              </div>
              <small className="text-error">{passwordError}</small>

              <button
                className="btn btn-neutral mt-4 bg-primary text-white text-xl"
                type="submit"
              >
                Sign Up
              </button>

              <p className="text-center font-semibold mt-2">
                Already have an account?{" "}
                <span className="text-primary link-hover">
                  <Link to="/auth/login">Login</Link>
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
              secondary: "white",
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

export default Signup;
