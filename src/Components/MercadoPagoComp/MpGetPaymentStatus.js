import React from 'react'
import Button from 'react-bootstrap/esm/Button'

const MpGetPaymentStatus = () => {


    const handleClick = async() => {

      // const payment_id = 1310318560

      //   const response = await fetch(`https://api.mercadopago.com/v1/payments/${payment_id}`, {
      //     headers: {
      //       Authorization: "Bearer TEST-8125028252532334-111311-2cedcea370aeadf162b1b5f60914673f-1238153828"
      //     }
      //   })
    
      //   const data = await response.json()
      //   console.log(data);
    
      //   console.log(`La orden xxxxxxxxx con payment_id: ${payment_id}, tiene estado:${data.status}`);
    
      const response = await fetch('https://rust-ruby-hellebore.glitch.me/api')
      const data = await response.json()
      console.log(data);

    
      }



  return (
    <Button onClick={handleClick}>Ver estado de pago...</Button>
  )
}

export default MpGetPaymentStatus