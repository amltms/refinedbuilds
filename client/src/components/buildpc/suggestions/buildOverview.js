import { useState, useEffect } from "react";

export const BuildOverview = (props) => {
  const [components] = useState(props.location.state);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    components.map((c) => setTotal((prevTotal) => prevTotal + c.price));
  }, [components]);

  return (
    <div>
      <h1>Build Overview</h1>
      <h2>Overall Price: £{Math.round(total * 100) / 100}</h2>

      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Type</th>
          <th>Price</th>
        </tr>
        {components.length > 0 ? (
          components.map((c) => (
            <tr>
              <td>
                <img
                  src={`/images/components/${c.type}/${c.img}`}
                  alt="component"
                />
              </td>
              <td>{c.name}</td>
              <td>{c.type}</td>
              <td>£{c.price}</td>
            </tr>
          ))
        ) : (
          <h3>No Components Selected</h3>
        )}
      </table>
    </div>
  );
};
