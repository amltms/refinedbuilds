import { ReactComponent as MainImg } from '../main.svg';
import { Link } from "react-router-dom";

export const Home = () =>{
    return(
        <div className="home">
            <div className="home-left">
                <MainImg className="homeImg"/>
            </div>
            <div className="home-right">
                <h1>Refined Builds</h1>
                <p>Building a PC and need ideas? Our recommendations cover a variety of use-cases and budgets.</p>
                <div className="btns">
                    <Link to="/buildpc" className="main-btn">
                        <div><i class="fi-rr-settings-sliders"></i>Build PC</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}