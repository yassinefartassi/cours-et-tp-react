import axios from "axios";
import React, { useState } from "react";

const PostCours = () => {
  const [intitule, setIntitule] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (note <= 0 || note === "") {
      setError("La note doit être supérieure à 0");
      return;
    }

    if (intitule === "") {
      setError("L'intitulé doit être rempli");
      return;
    }

    // Prepare the data for the API request
    const data = { note: parseFloat(note), intitule };

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3002/cours", data);
      console.log(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Une erreur s'est produite lors de l'envoi des données.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Post Cours</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Intitulé"
            value={intitule}
            onChange={(e) => setIntitule(e.target.value)}
          />
          <input
            type="number"
            placeholder="Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            min={0}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Envoi en cours..." : "Soumettre"}
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default PostCours;
