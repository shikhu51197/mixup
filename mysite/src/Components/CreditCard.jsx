import React from "react";
import "./styles.css";

const CreditCard = ({ formData }) => {
  let { name, number, cardMonth, cardYear, cvv } = formData;
  return (
    <div>
      <div className="card">
        <div className="card__front card__part">
          <img
            className="card__front-square card__square"
            src="https://cdn-icons-png.flaticon.com/512/6404/6404100.png"
            alt="card"
          />
          <img
            className="card__front-logo card__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
            alt="card"
          />
          <p className="card_numer">{number}</p>

          <div className="nec">
            <div className="card__space-75">
              <span className="card__label">Card holder</span>
              <p className="card__info">{name}</p>
            </div>
            <div className="card__space-25">
              <span className="card__label">Expires</span>
              <p className="card__info">
                {cardMonth}/{cardYear}
              </p>
            </div>
            <div className="cvv">
              <span className="card__label"> CVV</span>
              <p className="card__info"> {cvv}</p>
            </div>
          </div>
        </div>

        <div className="back"></div>
      </div>
    </div>
  );
};

export default CreditCard;