import React, { useState, useContext } from "react";
import { Cartcontext } from "../../CartContext/CartContext";

const ShippingMethod = () => {

    const {setIsChecked} = useContext(Cartcontext)
    const [courierShippingIsChecked, setCourierShippingIsChecked] = useState(false)
    const [pickUpShippingIsChecked, setPickUpShippingIsChecked] = useState(false)


    const handleCheckBox = (event) =>{
        if(event.target.value === 'pickupcheckbox'){
            if(event.target.checked === false){
                setCourierShippingIsChecked(false)
                setPickUpShippingIsChecked(false)
                setIsChecked(false)
                return
            }
            if(event.target.checked === true){
                setCourierShippingIsChecked(false)
                setPickUpShippingIsChecked(true)
                setIsChecked(true)
                return
            }
        }
        if(event.target.value === 'couriercheckbox'){
            if(event.target.checked === false){
                setCourierShippingIsChecked(false)
                setPickUpShippingIsChecked(false)
                setIsChecked(false)
                return
            }
            if(event.target.checked === true){
                setCourierShippingIsChecked(true)
                setPickUpShippingIsChecked(false)
                setIsChecked(true)
                return
            }
        }
    }





  return (
    <div>
      <div>
        <h1 style={{ marginBottom: "20px" }}>Metodo de envio</h1>
        <input
          type="checkbox"
          value='pickupcheckbox'
          style={{ marginBottom: "10px", marginRight: "15px" }}
          onChange={handleCheckBox}
          disabled={courierShippingIsChecked ? true : false} 
        />
        <label>Retiro por local</label>
      </div>
      <div>
        <input
          type="checkbox"
          value='couriercheckbox'
          style={{ marginBottom: "20px", marginRight: "15px" }}
          onChange={handleCheckBox}
          disabled={pickUpShippingIsChecked ? true : false}
        />
        <label>Correo!</label>
      </div>
    </div>
  );
};

export default ShippingMethod;
