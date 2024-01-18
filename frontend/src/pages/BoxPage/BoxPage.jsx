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
            <h1> Bonjour John Couscous </h1>
            <h2> DETAILS DU COMPTE CLIENT </h2>
            <Link to="/account" className="myAccount__sideBar__list__element">
              Mon compte
            </Link>
            <li className="myAccount__sideBar__list__element">
              Historique de commande
            </li>
            <li className="myAccount__sideBar__list__element">
              Carnet d'adresses
            </li>
            <li className="myAccount__sideBar__list__element">
              Liste de favoris
            </li>
            <li className="myAccount__sideBar__list__element">Ma box</li>
            <Link
              to="/"
              className="myAccount__sideBar__list__element disconnect"
            >
              Déconnection
            </Link>
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
