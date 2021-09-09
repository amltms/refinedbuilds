export const SelectedSoftware = ({ software }) => {
  return (
    <div className="software-item">
      <img
        src={`/images/software/${software.useCase}/${software.img}`}
        alt="software"
      />
      <p>{software.title}</p>
    </div>
  );
};
