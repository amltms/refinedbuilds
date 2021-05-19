export const Footer = ({next, prev}) => {
    return (
        <footer>
            <div onClick={next} className="main-btn">Next</div>
            <div onClick={prev} className="main-btn">Back</div>
        </footer>
    )
}
