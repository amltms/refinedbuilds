export const Component = ({ component, attributes }) => {
  return (
    <tr>
      <td>
        <img
          width="100"
          src={`/images/components/${component.type}/${component.img}`}
          alt="component"
        />
      </td>
      <td>{component.name}</td>
      {attributes.map((attribute) => (
        <td>
          {String(component[attribute.id])} {attribute.unit}
        </td>
      ))}
      <td>£{component.price}</td>
    </tr>
  );
};
