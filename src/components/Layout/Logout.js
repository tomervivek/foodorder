import React from "react";
import { useHistory } from "react-router";
import "./Logout.css";

export default function Logout() {
  const history = useHistory();

  function handleLogout() {
    history.push("/userProfile");
  }
  return (
    <button className="button" variant="link" onClick={handleLogout}>
      Log Out
    </button>
  );
}
