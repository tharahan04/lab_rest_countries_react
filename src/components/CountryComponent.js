import React, { useEffect, useState } from "react";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);

  const handleVisit = () => {
    setVisited(!visited);
  };

  return (
    <li>
      {country.name.common} {country.flag}{" "}
      <input type="checkbox" checked={visited} onChange={handleVisit} />
    </li>
  );
};

export default Country;
