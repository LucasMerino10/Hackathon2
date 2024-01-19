import { useState } from "react";
import Routourne from "../../components/Routourne/Routourne";
import PopUp from "../../components/popUp/popUp";
import "./WheelOfbeauty.scss";

function WheelOfbeauty() {
  const [popupEnabled, setPopupEnabled] = useState(false);

  return (
    <>
      <div className="wheel_container">
        <Routourne setPopupEnabled={setPopupEnabled} />
      </div>
      <div className="popup_container">{popupEnabled && <PopUp />}</div>
    </>
  );
}

export default WheelOfbeauty;
