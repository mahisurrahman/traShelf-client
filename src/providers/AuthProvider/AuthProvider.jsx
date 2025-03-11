import React, { createContext, useState } from "react";
import Swal from "sweetalert2";
import useRequest from "../../APIServices/useRequest";

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [postRequest, getRequest] = useRequest();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLoginData = async (userCreds) => {
    try {
      setLoading(true);
      let loginUserInfo = await postRequest("/auth/login", userCreds);
      const setUserToLocal = localStorage.setItem("userCreds", JSON.stringify(loginUserInfo?.data?.data?.modifiedUser));

      setUser(setUserToLocal);
      setLoading(false);
    } catch (error) {
      Swal.fire("Failed to Login");
      setLoading(false);
    }
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    handleLoginData,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
