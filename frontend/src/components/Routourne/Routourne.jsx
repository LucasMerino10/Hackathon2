import { Wheel } from "react-custom-roulette";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Routourne.scss";

function Routourne({ setPopupEnabled }) {
  const data = [
    {
      option: "0",
      image: {
        uri: "./src/assets/petal0.svg",
        landscape: false,
        sizeMultiplier: 2.1,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal1.svg",
        landscape: false,
        sizeMultiplier: 2.1,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal2.svg",
        landscape: false,
        sizeMultiplier: 2.1,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal3.svg",
        landscape: false,
        sizeMultiplier: 2.1,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal4.svg",
        landscape: false,
        sizeMultiplier: 2.1,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal5.svg",
        landscape: false,
        sizeMultiplier: 2.1,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal6.svg",
        landscape: false,
        sizeMultiplier: 2.1,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal7.svg",
        landscape: false,
        sizeMultiplier: 2.1,
        offsetX: 20,
      },
    },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      setPrizeNumber(7);
      setMustSpin(true);
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setInterval(() => {
      setPopupEnabled(true);
    }, 1000);
    clearInterval();
  };

  return (
    <>
      <h1>Tournez la roue pour découvrir votre produit offert !</h1>
      <div className="wheel_spin">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={handleStopSpinning}
          backgroundColors={["#e0313100", "#e0313100"]}
          textColors={["#ffffff"]}
          outerBorderWidth={0}
          innerBorderWidth={0}
          radiusLineWidth={0}
          radiusLineColor={["#ffd43b"]}
          innerRadius={1}
          pointerProps={{
            src: "./src/assets/marker.svg",
          }}
        />
        <img
          className="flower_center"
          src="./src/assets/flower_center.svg"
          alt=""
        />
      </div>
      <button className="buttonWheel" onClick={handleSpinClick} type="button">
        C'est parti !
      </button>
    </>
  );
}

Routourne.propTypes = {
  setPopupEnabled: PropTypes.func.isRequired,
};

export default Routourne;
