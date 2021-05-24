export const SoftwareItem = ({selected, software, onClick}) => {
    function classActve(software) {
        if (selected && selected.includes(software)){
            return 'software-item selected'
        }else{
            return 'software-item'
        }
    }
    return (
        <div className={classActve(software)} onClick={() => onClick(software)}>

            <img height="100" width="100" src={`/images/software/${software.useCase}/${software.img}`} />
            <p>{software.title}</p>
        </div>
    )
}
