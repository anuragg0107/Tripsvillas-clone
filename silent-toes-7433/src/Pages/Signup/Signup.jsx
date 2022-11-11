import React, { useContext, useState } from 'react'
import {
    Text,Box,
    Button,
    Modal,
    ModalOverlay,Select,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex,
    Input
} from '@chakra-ui/react'
import { Link, Navigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'

const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
   const [email,setEmail]=useState("");
   const [firstName,setfirstname]=useState("")
   const [lastname,setlastname]=useState("")
   const [pass,setpass]=useState("")
   const {handleCreateAccount,  auth} = useContext(AppContext);
    
   if(auth){
    return 
   }

    return (
    <>
    <Button background={"white"}  onClick={onOpen}>Sign Up</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>
        <Box justifyContent={"space-between"}
        w="100%" >
           <Flex direction={"row"}>
             <Text as="h2" color="#000000" fontSize={"30px"}
             margin="0px 0px 20px ">Sign Up</Text>
             <Button background={"white"}
             _hover={{background:"white"}}
             fontSize={"13.125px"}
              color={"#1e87f0"}>Sign In Instead</Button>
           </Flex>
        </Box>
    </ModalHeader>
    <hr style={{overflow:"visible", textAlign:"inherit"
    ,margin:"0 0 20px 0",
     borderTop:"1px solid #e5e5e5"}} />
     <Box>
      <Flex direction={"row"}>
      {/* <FormControl>
  <FormLabel>Amount</FormLabel>
  <NumberInput max={50} min={10}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
</FormControl> */}
<Select  width={"25%"} ml="20px">
  <option value=' +1'>+1 </option>
  <option value='+7 '>+7 </option>
  <option value=' +20'> +20</option>
  <option value=' +27'>+27 </option>
  <option value='+30 '>+30 </option>
  <option value='+31 '>+31 </option>
  <option value=' +32'> +32</option>
  <option value=' +33'> +33</option>
  <option value='+34'> +34</option>
  <option value='+36'>+36 </option>
  <option value='+38'>+38 </option>
  <option value='+39'> +39</option>
  <option value='+40'> +40</option>
   <option value='+91' selected="selected"> +91</option>
   <option value='+92'>+92 </option>
   <option value='+93'>+93 </option>
   <option value='+94'> +94</option>
   <option value='+95'> +95</option> 
   <option value='+98'> +98</option>
   <option value='+212'>+212 </option>
   <option value='+213'> +213</option>
   <option value='+216'>+216 </option>
   <option value='+220'> +220</option>
   <option value='+222'> +222</option>
   <option value='+240'>+240 </option>
   <option value='+241'> +241</option>
   <option value='+242'> +242</option>
   <option value='+243'> +243</option>
   <option value='+244'> +244</option>
</Select>
     
<Box ml="10px" width={"80%"} boxSizing="border-box" maxW={"100%"} >
  <Flex direction={"column"}>
    <Input height={"40px"} verticalAlign="middle" display={"inline-block"} placeholder='Mobile Number'
     type="number" />
   <Text pt="5px" pl="5px" fontFamily={"ProximaNove"} fontSize="12px" color={"#888888"}>
   Only digit allowed.</Text>
  </Flex>
</Box>
      </Flex>
     </Box>
     <Box  padding="10px" display="block">
     <Input type="email" placeholder='Email Address' 
    value={email} onChange={(e)=>setEmail(e.target.value)}
     height={"40px"} verticalAlign="middle" background={"#fff"}
      display="inline-block" padding="1px 2px" />
     </Box>
     <Box padding="10px" display="block">
     <Input type="Password" placeholder='Password'
     value={pass} onChange={(e)=>setpass(e.target.value)}
      height={"40px"} verticalAlign="middle" background={"#fff"}
      display="inline-block" padding="1px 2px" />
     </Box>
    <Box padding={"10px"}  >
      <Flex direction={"row"}  flexDirection={{base:"column",lg:"row"}} >
        <Input 
        value={firstName} onChange={(e)=>setfirstname(e.target.value)}
        placeholder='First Name' marginBottom="10px" type="text" />
        <Input placeholder='Last Name' ml="10px" type="text" 
          value={lastname} onChange={(e)=>setlastname(e.target.value)}
        />
      </Flex>
    </Box>
     <hr  overflow="visible" textAlign="inherit" margin="0 0 20px 0"
     border="none" borderTop="1px solid #e5e5e5" />
    <ModalCloseButton />
    <ModalBody>
      <Text count={2} />
    </ModalBody>

    <ModalFooter>
      <Button fontSize={"13.125px"} fontFamily="ProximaNova" color="#333" border="1px solid #e5e5e5" variant='ghost'  mr={3} onClick={onClose}>
       Cancel
      </Button>
      <Button 
      onClick={()=>handleCreateAccount(email,pass,firstName,lastname)}
      colorScheme='blue'  color={"#fff"} border="1px solid transparent"
      fontSize={"13.125px"}  fontFamily="ProximaNova" >SIGN UP</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </>
  )
}

export default Signup