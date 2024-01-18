import "./BoxPage.scss";
import { Link } from "react-router-dom";
import box from "../../assets/Box.png";
import FavoriteItems from "../../components/FavoriteItems/FavoriteItems";

function MyAccount() {
  return (
    <section className="myAccount">
      <header className="myAccount__header">
        <img
          className="myAccount__header__img"
          src="src/assets/images/banner.png"
          alt="our navbar"
        />
      </header>
      <div className="myAccount__mainContainer">
        <aside className="myAccount__sideBar">
          <ul className="myAccount__sideBar__list">
            <li className="myAccount__sideBar__list__element">Mon compte</li>
            <li className="myAccount__sideBar__list__element">
              Historique de commande
            </li>
            <li className="myAccount__sideBar__list__element">
              Carnet d'adresses
            </li>
            <li className="myAccount__sideBar__list__element">
              Liste de favoris
            </li>
            <Link to="/wheel" className="myAccount__sideBar__list__element">
              Ma box
            </Link>
            <li className="myAccount__sideBar__list__element disconnect">
              Déconnection
            </li>
          </ul>
        </aside>
        <img src={box} alt="FIGMA SCREEN MAGGLE" className="figmaPower" />
      </div>
      <div className="ohlepied">
        <Link to="/wheel" className="buttonWheel">
          Je tourne la roue
        </Link>
      </div>
      <FavoriteItems />
    </section>
  );
}

export default MyAccount;
