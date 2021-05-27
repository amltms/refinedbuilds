export const BudgetSelector = ({defaultVal, onChange}) => {

    return (
        <>
        <select defaultValue={defaultVal} onChange={onChange}>
            <option value={400}>£400</option>
            <option value={500}>£500</option>
            <option value={600}>£600</option>
            <option value={700}>£700</option>
            <option value={800}>£800</option>
            <option value={900}>£900</option>
            <option value={1000}>£1000</option>
            <option value={1100}>£1100</option>
        </select>
        </>
    )
}
