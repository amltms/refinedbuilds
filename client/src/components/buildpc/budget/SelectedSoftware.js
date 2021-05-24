export const SelectedSoftware = ({software}) => {

    return (
        <div className='selected-software' >
            <img height="80" width="80" src={`/images/software/${software.useCase}/${software.img}`} />
        </div>
    )
}

