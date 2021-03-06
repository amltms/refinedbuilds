import { ReactComponent as MainImg } from "../main.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <MainImg className="homeImg" />
      <div className="home-right">
        <h1>Refined Builds</h1>
        <p>
          Building a PC and need ideas? Our recommendations cover a variety of
          use-cases and budgets.
        </p>
        <div className="btns">
          <Link to="/buildpc" className="main-btn">
            Build PC
          </Link>
        </div>
      </div>
    </div>
  );
};
