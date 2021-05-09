export const SoftwareItem = ({selected, software, onClick}) => {
    function classActve(software) {
        if (selected.includes(software)){
            return 'software-item selected'
        }else{
            return 'software-item'
        }
    }
    return (
        <div className={classActve(software)} onClick={() => onClick(software)}>
            {software.title}
        </div>
    )
}
