import React, { useContext, useState } from 'react'
import {
    Text,Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex,
    Input,
} from '@chakra-ui/react';
import { AppContext } from '../../Context/AppContext';
 import { Navigate } from 'react-router-dom';

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState('');
  const context = useContext(AppContext);
  const {handleLogin, auth, cookies} = context;
   
  // if(auth){
  //   return <Navigate to="/" />
  // }

    return (
    <>
    <Button background={"white"}  onClick={onOpen}>Sign In</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>
        <Box justifyContent={"space-between"}
          width="100%" >
           <Flex direction={"row"}>
             <Text as="h2" color="#000000" fontSize={"30px"}
             margin="0px 0px 20px ">Sign In</Text>
             <Button background={"white"}
             _hover={{background:"white"}}
             fontSize={"13.125px"} pl="119px" pt="10px"
              color={"#1e87f0"} >Sign Up Instead</Button>
           </Flex>
        </Box>
    </ModalHeader>
    <hr style={{overflow:"visible", textAlign:"inherit"
    ,margin:"0 0 20px 0",
     borderTop:"1px solid #e5e5e5"}} />
     <Box  padding="10px" display="block">
     <Input type="email" placeholder='Email Address'
     height={"40px"} verticalAlign="middle" background={"#fff"}
      display="inline-block" padding="1px 2px" 
        value={email} onChange={(e)=>setEmail(e.target.value)}
      />
     </Box>
     <Box padding="10px" display="block">
     <Input type="Password" placeholder='Password'
      height={"40px"} verticalAlign="middle" background={"#fff"}
      display="inline-block" padding="1px 2px"
      value={pass} onChange={(e)=>setPass(e.target.value)} />
     </Box>

     <Box display={"flex"}>
      <Text cursor={"pointer"} ml="28px" mt="20px" mb="40px"
      fontSize="15px" fontFamily={"ProxmiaNova"} color="#1e87f0" textDecoration="none" >
        Sign In With Mobile & One Time Password?
      </Text>
     </Box>
     <hr  overflow="visible" textAlign="inherit" margin="0 0 20px 0"
     border="none" borderTop="1px solid #e5e5e5" />
    <ModalCloseButton />
    <ModalBody>
      <Text count={2} />
    </ModalBody>

    <ModalFooter>
      <Button fontSize={"13.125px"} 
      fontFamily="ProximaNova" 
      color="#333" border="1px solid #e5e5e5" variant='ghost'  mr={3} onClick={onClose}>
       CANCEL
      </Button>
      <Button colorScheme='blue'
         onClick={()=>handleLogin(email,pass)}
        color={"#fff"} border="1px solid transparent"
      fontSize={"13.125px"}  fontFamily="ProximaNova" >SIGN IN</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </>
  )
}

export default Login