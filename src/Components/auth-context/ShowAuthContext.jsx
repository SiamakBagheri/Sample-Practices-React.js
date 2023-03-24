import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const ShowAuthContext = () => {
  // روش اول برای دریافت اطلاعات
  const user = useContext(AuthContext);
  return <div>Your ID {user.id}</div>;

  //   return (
  //     <AuthContext.Provider>
  //       {(user) => {
  //         return <div>Your ID {user.id}</div>;
  //       }}
  //     </AuthContext.Provider>
  //   );
};

export default ShowAuthContext;
