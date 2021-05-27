export const SelectedSoftware = ({software}) => {

    return (
        <div className='software-item' >
            <img height="100" width="100" src={`/images/software/${software.useCase}/${software.img}`} />
            <p>{software.title}</p>
        </div>
    )
}

