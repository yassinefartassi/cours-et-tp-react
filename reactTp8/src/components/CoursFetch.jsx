import React, { useEffect, useState } from "react";

const CoursFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3002/cours");
        if (!res.ok) {
          throw new Error("Erreur API");
        }
        const data = await res.json();
        setData(data);
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
      <h1>Cours fetch using (fetch)</h1>
      {data.map((d, index) => (
        <div key={index}>
          <p>Intitulé: {d.intitule}</p>
          <p>Note: {d.note}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursFetch;
