export const SelectedSoftware = ({software}) => {

    return (
        <div className='software-item' >
            <img src={`/images/software/${software.useCase}/${software.img}`} />
            <p>{software.title}</p>
        </div>
    )
}

