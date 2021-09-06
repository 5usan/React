import React from "react";

function Logout() {
  localStorage.removeItem("token");
  return <></>;
}

export default Logout;
