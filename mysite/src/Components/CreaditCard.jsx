import React from 'react'
import {Box} from '@chakra-ui/react'
const CreaditCard = ({formData}) => {
  const {name , number  ,typecard , cardmonth , cardyear , cvv , amount} = formData
  return (
  
    <Box className='displaydata' bg="cyan.100" border="2px solid black" w="40%" h="200px" margin="auto">
     
<h3 align="left" text-align="center">
     <span>Name :-{name}</span>
     <br></br>
     <span>Number:-{number}</span>
     <br></br>
     <span>Cardtype:-{typecard}</span>
     <br></br>
     <span>ExpiryMonth:-{cardmonth}</span>
     <br></br>
     <span>ExpiryYear:-{cardyear}</span>
     <br></br>
     <span>CVV:-{cvv}</span>
     <br></br>
     <span>Amount:-{amount}</span></h3>
      
    </Box>
  )
}

export default CreaditCard
