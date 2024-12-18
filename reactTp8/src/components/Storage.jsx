import React from "react";

const Storage = () => {
  localStorage.setItem("local", "My local");
  const localName = localStorage.getItem("local");

  sessionStorage.setItem("session", "My session");
  const sessionName = sessionStorage.getItem("session");
  return (
    <div>
      <p>Local storage : {localName}</p>
      <p>Session storage : {sessionName}</p>
    </div>
  );
};

export default Storage;
