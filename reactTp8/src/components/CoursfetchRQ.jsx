import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchCourses = async () => {
  const response = await axios.get("http://localhost:3002/cours");
  return response.data;
};

const CoursfetchRQ = () => {
  const { data, isLoading, error } = useQuery("courses", fetchCourses);

  if (isLoading) {
    return <p>Chargement des données...</p>;
  }

  if (error) {
    return <p>Erreur lors du chargement des données.</p>;
  }

  return (
    <div>
      <h1>Cours fetch using (react-query)</h1>
      {data.map((d, index) => (
        <div key={index}>
          <p>Intitulé: {d.intitule}</p>
          <p>Note: {d.note}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursfetchRQ;
