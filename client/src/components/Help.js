import React, { useState, useEffect } from "react";
import axios from "axios";

export const Help = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const getComponents = async () => {
      try {
        const res = await axios.get(`/components/`);
        setComponents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getComponents();
  }, []);

  return (
    <div>
      <h1>{components}</h1>
    </div>
  );
};
