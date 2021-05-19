export const SuggestionItem = ({attributes, component, onClick}) => {
    return (
        <div className='suggestion' onClick={() =>onClick(component)}>
            <img height="200" src={`/images/${component.type}/${component.img}`} />
            <h2>{component.name}</h2>
            <hr className='grey'/>
            {attributes.map(a => (
                <>
                    <h3>{a.title}</h3>
                    <p>{String(component[a.id])} {a.unit}</p>
                    <hr className='grey'/>
                </>
            ))}
            <p className='price'>£{component.price}</p>
        </div>
    )
}
