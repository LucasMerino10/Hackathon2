import Prize from "../../assets/bronze.jpg";
import PrizeDescription from "../../assets/larnaque.png";
import "./popUp.scss";

function PopUp() {
  return (
    <>
      <article className="messagePopUp">Vous avez gagné ce produit !</article>
      <img src={Prize} className="elseve" alt="elseve cheveux dégeu" />
      <img
        src={PrizeDescription}
        className="larnaque"
        alt="encore un screenshot"
      />
      <div className="canvas">
        <div className="flower" id="flower1">
          <div className="petal petal1 f1p" />
          <div className="petal petal2 f1p" />
          <div className="petal petal3 f1p" />
          <div className="petal petal4 f1p" />
          <div className="petal petal5 f1p" />
        </div>
        <div className="flower" id="flower2">
          <div className="petal petal1 f2p" />
          <div className="petal petal2 f2p" />
          <div className="petal petal3 f2p" />
          <div className="petal petal4 f2p" />
          <div className="petal petal5 f2p" />
        </div>
        <div className="flower" id="flower3">
          <div className="petal petal1 f3p" />
          <div className="petal petal2 f3p" />
          <div className="petal petal3 f3p" />
          <div className="petal petal4 f3p" />
          <div className="petal petal5 f3p" />
        </div>
        <div className="flower" id="flower4">
          <div className="petal petal1 f4p" />
          <div className="petal petal2 f4p" />
          <div className="petal petal3 f4p" />
          <div className="petal petal4 f4p" />
          <div className="petal petal5 f4p" />
        </div>
        <div className="flower" id="flower5">
          <div className="petal petal1 f5p" />
          <div className="petal petal2 f5p" />
          <div className="petal petal3 f5p" />
          <div className="petal petal4 f5p" />
          <div className="petal petal5 f5p" />
        </div>
        <div className="flower" id="flower6">
          <div className="petal petal1 f6p" />
          <div className="petal petal2 f6p" />
          <div className="petal petal3 f6p" />
          <div className="petal petal4 f6p" />
          <div className="petal petal5 f6p" />
        </div>
      </div>
    </>
  );
}
export default PopUp;
