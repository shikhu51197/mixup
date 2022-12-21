import React, { useRef, useState } from "react";
import CreditCard from "./CreditCard";
import "./styles.css";
import swal from 'sweetalert';

const Form1 = () => {
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({});
  const [amount , setAmount] = useState([]);
 
  const form = useRef();

  const handleChange = (e) => {
    const inpName = e.target.name;
    setData({ ...data, [inpName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.current.reset();
    console.log(data);
    //handleChange();
    setFormData(data);

    swal({
        title: "Congratulations",
        text: "Your Card is Ready & Payment done!",
        icon: "success",
        button: "Ok",
      });
  };



const handleamount =(e)=> {

   
    setAmount(e.target.value)


}


  return (
    <div className="container">
        
        {/* <img className="image" src="https://media.istockphoto.com/photos/close-up-male-hand-and-levitating-template-mockup-bank-credit-card-picture-id1300003353?b=1&k=20&m=1300003353&s=170667a&w=0&h=dKUo9fstps4EqU1Nc32Dv4qGbTOwHK5ZJwEZ5sd8ZFc=" alt="" /> */}
            





      <div className="credit">
        <CreditCard formData={formData} />
      </div>

      <form className="form" onSubmit={handleSubmit} ref={form}>
        <h1>Payment details</h1>
        <div className="block-div">
          <label>CARDHOLDER NAME</label>
          <div className="child">
            <img
              className="user"
              src="https://cdn-icons-png.flaticon.com/512/875/875610.png"
              alt="user"
            />
            <input
              type="text"
              placeholder="cardholder name"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="block-div">
          <label>CARD NUMBER</label>
          <div className="child">
            <img
              className="user"
              src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
              alt="user"
            />
            <input
              type="number"
              placeholder="card number"
              name="number"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex-div">
          <div className="block-div mm">
            <label>EXPIRY MONTH</label>
            <input
              type="text"
              placeholder="XX"
              name="cardMonth"
              onChange={handleChange}
              maxLength="2"
              className="x"
            />
          </div>

          <div className="block-div mm">
            <label>EXPIRY YEAR</label>
            <input
              type="text"
              placeholder="XXXX"
              name="cardYear"
              onChange={handleChange}
              maxLength="4"
              className="x"
            />
          </div>
          <div className="block-div mm">
            <label>CVV</label>
            <input
              type="password"
              placeholder="CVV"
              name="cvv"
              onChange={handleChange}
              maxLength="3"
              className="x"
            />
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="submit-div">
       <div><input className="inputamount" type="number" value = {amount} placeholder="Enter Withdrawal amount" onChange={handleamount}/>
        
        </div>   
        <h2>
            Payment amount: <span>{amount}</span>
          </h2>
          <button className="submit-btn" >PAY</button>
        </div>
      </form>
    </div>
  );
};

export default Form1;