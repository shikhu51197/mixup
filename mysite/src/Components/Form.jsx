import React, { useRef, useState } from "react";
import {
  Box,
  FormControl,
  // FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Heading,
  Button,
  Image,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import CreaditCard from "./CreaditCard";
import swal from "sweetalert"

const Form = () => {
  const [input, setInput] = useState("");
  const [Amount, setAmount] = useState(0);
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({});
  const form = useRef();

  // const handleInputChange = (e) => {
    // e.preventDefault();
    // setInput(e.target.value);
  // };

  const isError = input === "";

  const handleadd = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  const handleChange = (e) => {
    const inputVal = e.target.value;
    setData({ ...data ,[inputVal]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    form.current.reset()
    console.log(data)
    setFormData(data)
 

 swal({
  title:"Congratulations",
  text:"Payment Done",
  icon:"success",
  button:"ok",
 })

 }


  return (
    <Box bg="#E5E4E2" mb={500} h="200%" w="auto">
      {/* <Image src="https://media.istockphoto.com/photos/close-up-male-hand-and-levitating-template-mockup-bank-credit-card-picture-id1300003353?b=1&k=20&m=1300003353&s=170667a&w=0&h=dKUo9fstps4EqU1Nc32Dv4qGbTOwHK5ZJwEZ5sd8ZFc="/>  */}
      
      <Box w="60%" align="center" margin="auto">
        <Image
          mt={50}
          p={10}
          borderRadius={60}
          src="https://images.unsplash.com/photo-1585915473635-d4e5c564eec3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        />
      </Box>
      <Box ><CreaditCard formData={formData}/></Box>
 
      <Box
        className="credit"
        size="xs"
        bg="#151B54"
        color="#00FFFF"
        w="80%"
        h="700px"
        borderRadius={40}
        p={6}
        margin="auto"
        align="center"
        fontSize="2xl"
        mt={20}
      >
     
        <Heading>Payment Details</Heading>

        <FormControl mt={10} className="form" onSubmit={handleSubmit} ref={form}>
          <FormLabel>CARDHOLDER NAME (Optional)</FormLabel>
          <Input type="text" name= 'name' placeholder="Enter cardholder name"  onChange={handleChange}/>
          <FormHelperText>Thanks for Enter cardholder name.</FormHelperText>
        </FormControl>

        <FormControl isRequired isInvalid={isError} className="form" onSubmit={handleSubmit} ref={form}>
          <FormLabel>CARD NUMBER</FormLabel>
          <Input
            type="number"
            name="number"
            placeholder="XXXX XXXX XXXX"
            // value={input}
            // onChange={handleInputChange}
            onChange={handleChange}
          />
          {/* {!isError ? (
            <FormHelperText>Thanks for Enter card number.</FormHelperText>
          ) : (
            <FormErrorMessage>Card Number is required.</FormErrorMessage>
          )} */}
        </FormControl>

        <FormControl isRequired mt={4} className="form" onSubmit={handleSubmit} ref={form}>
          <FormLabel>Card Type</FormLabel>
          <Select name='typecard' placeholder="Select Cart type  for payment ">
            <option>Credit Card</option>
            <option>Debit Card</option>
          </Select>
        </FormControl>

        <FormControl isRequired display="flex" gap="2rem" mt={10} className="form" onSubmit={handleSubmit} ref={form}>
          <FormLabel>EXPIRY MONTH</FormLabel>
          <Input type="number" name = 'cardmonth'
          placeholder="XX" onChange={handleChange} maxLength='2' />

          <FormLabel>EXPIRY YEAR</FormLabel>
          <Input type="number" placeholder="XXXX" name = 'cardyear' onChange={handleChange} maxLength='4'/>

          <FormLabel>CVV</FormLabel>
          <Input type="password" placeholder="CVV" name = 'cvv' onChange={handleChange} maxLength='3'/>
        </FormControl>

        <FormControl isRequired className="form" onSubmit={handleSubmit} ref={form}>
          <FormLabel>Amount</FormLabel>
          <NumberInput max={50} min={10}>
            <NumberInputField
            name = 'amount'
              value={Amount}
              placeholder="Enter Amount value here"
              onClick={handleadd}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <h2>Payment amount :- {Amount}</h2>
        <Button>PAY</Button>
      </Box>
    </Box>
  );
};

export default Form;
