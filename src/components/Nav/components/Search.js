import React from "react";

export const Search = ({ valorDoFiltro, setFiltro }) => {

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFiltro(e.target.value)}
        value={valorDoFiltro}
      />
      <button>🔎</button>
    <div/>
  );
};
