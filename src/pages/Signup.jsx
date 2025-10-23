import React from "react";
import { Link } from "react-router";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const checked = e.target.elements.terms.checked;
    console.log(name, photo, email, password, checked);
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
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />

              {/* Terms */}
              <label className="label">
                <input
                  name="terms"
                  type="checkbox"
                  className="checkbox checked:text-primary checked:border-primary"
                />
                Accept Terms & Conditions
              </label>

              <button className="btn btn-neutral mt-4">Sign Up</button>

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
    </div>
  );
};

export default Signup;
