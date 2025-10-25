import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/user.png";
import { PiUserCircleGearBold } from "react-icons/pi";
import { RiMailSendLine } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const { user, setUser, updateUserProfile } = use(AuthContext);

  if (!user) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const photo = e.target.photo.value.trim();

    // check empty submit
    if (!name || !email | !photo) {
      toast.error("🤦‍♂️ Oops! Some fields are missing. Please fill them in.");
      return;
    }

    // update profile data
    updateUserProfile({
      displayName: name,
      photoURL: photo,
      email: email,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo, email: email });
        toast.success("Profile updated successfully done!✔");
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
      });
    // reset form value
    e.target.reset();
  };
  return (
    <div className=" card flex flex-col md:flex-row items-center justify-center gap-10 mt-10 px-2">
      <title>Pets care | Profile</title>
      {/* Left Section - Profile Image */}
      <div className=" flex flex-col items-center flex-1">
        <img
          src={` ${user ? user.photoURL : userIcon}`}
          alt="Profile"
          className="w-50 h-50 rounded-full object-cover border-4 border-primary shadow animate__slideInDown"
        />
      </div>

      {/* Right Section - Info */}
      <div className="space-y-5 text-gray-700 flex-1">
        <div className="flex items-center gap-3">
          <PiUserCircleGearBold size={31} className="text-primary" />
          <p>
            <span className="font-semibold">Full Name :</span>{" "}
            {user.displayName}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <RiMailSendLine size={30} className="text-primary" />
          <p>
            <span className="font-semibold">Email :</span> {user.email}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <form onSubmit={handleUpdateProfile} className="w-full">
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
              <button
                className="btn mt-5 px-6 py-2 bg-primary hover:bg-secondary  font-semibold rounded-full transition w-[320px] text-[18px]"
                type="submit"
              >
                Edit Profile
              </button>
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

export default Profile;
