export const SuggestionItem = ({attributes, component, onClick, selected, index}) => {
    function classActve(component) {
        if (selected.includes(component)){
            return 'suggestion active'
        }else{
            return 'suggestion'
        }
    }
    
    return (
        <div  className={classActve(component)+(index === 0 ? ' recommendation':'')} onClick={() =>onClick(component)}>
            {index === 0 && (<p className='recommendation-text'>Recommended</p>)}
            <img width="200" className='suggestion-img' src={`/images/components/${component.type}/${component.img}`} />
            <h2>{component.name}</h2>
            <hr className='grey'/>

            <div className='points'>
                <h3>Benefits</h3>
                {component.benefits && component.benefits.map(b => (<li>{b}</li>))}
                <hr className='grey'/>
                <h3>Drawbacks</h3>
                {component.drawbacks && component.drawbacks.map(d => (<li>{d}</li>))}
                <hr className='grey'/>
            </div>
            
            <div className='overlay'>
                {attributes.map(a => (
                    <div className='row'>
                        <h3>{a.title}</h3>
                        <p>{String(component[a.id])} {a.unit}</p>
                        <hr className='grey'/>
                    </div>
                ))}
            </div>

            <p className='price'>£{component.price}</p>
        </div>
    )
}
