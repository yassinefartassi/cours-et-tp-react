import React, { useEffect, useState } from "react";
import axios from "axios";

const CoursFetchAxios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3002/cours");
        setData(res.data);
      } catch (error) {
        setError("Erreur lors du chargement des données.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Cours fetch using (axios)</h1>
      {data.map((d, index) => (
        <div key={index}>
          <p>Intitulé: {d.intitule}</p>
          <p>Note: {d.note}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursFetchAxios;
