import { useHistory } from "react-router-dom";
export const Component = ({component, attributes}) => {
    const history = useHistory();
    function handleClick(id){
        history.push(`/components/${component.Type}/${id}`, {params:component, attributes:attributes});
    }
    return (
        <tr >
            <td><img width="100" src={`/images/components/${component.type}/${component.img}`} /></td>
            <td>{component.name}</td>
            {attributes.map(attribute => (<td>{String(component[attribute.id])} {attribute.unit}</td>))}
            <td>£{component.price}</td>
        </tr>
    )
}
