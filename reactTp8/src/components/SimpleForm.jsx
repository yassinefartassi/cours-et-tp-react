import React, { useEffect, useState } from "react";

const SimpleForm = () => {
  // Initialize state with data from localStorage
  const [data, setData] = useState(() => {
    return localStorage.getItem("formData") || ""; // Fallback to an empty string
  });

  // Save to localStorage whenever `data` changes
  useEffect(() => {
    localStorage.setItem("formData", data);
  }, [data]);

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter data..."
      />
    </div>
  );
};

export default SimpleForm;
