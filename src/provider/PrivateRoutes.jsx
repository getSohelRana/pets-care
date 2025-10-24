import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoutes = ({ children }) => {
  const { user , loading} = use(AuthContext);

	const location = useLocation();
	console.log(location)

  console.log(user);

	if(loading){
		return <Loading></Loading>
	}
	// isUser logged go to private page
  if (user && user?.email) {
    return children;
  }
	// other wise go to login page
	return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoutes;
