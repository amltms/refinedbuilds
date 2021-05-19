import { useHistory } from "react-router-dom";
export const Component = ({component, attributes}) => {
    const history = useHistory();
    function handleClick(id){
        history.push(`/components/${component.Type}/${id}`, {params:component, attributes:attributes});
    }
    return (
        <tr onClick={() => handleClick(component._id)}>
            <td><img width="100" src={`/images/${component.type}/${component.img}`} /></td>
            <td>{component.name}</td>
            
            {attributes.map(attribute => (<td>{String(component[attribute.id])} {attribute.unit}</td>))}
            <td>£{component.price}</td>
        </tr>
    )
}
