import React from "react";
import { Navigate, useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  if (id == 10) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      {"Page du Profile : "} {id}
    </div>
  );
};

export default Profile;
