import {Text, Box, Flex, Image, Button, Menu, IconButton,Divider, useDisclosure} from '@chakra-ui/react'
import React, { useState } from 'react';
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import styled from './Navbar.modules.css';
import {Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverBody,PopoverFooter,PopoverArrow, PopoverCloseButton,PopoverAnchor, } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react"
import Login from '../../Pages/Signup/Login';
import Signup from '../../Pages/Signup/Signup';
const Navbar = () => {
    const [currency,setCurrency]=useState("INR")
    const [isActive, setIsActive] = useState(true);
  const [isActiveBtn, setIsActiveBtn] = useState(true);
    const [placement,setPlacement]=useState("right")
    const navigate=useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleCurrency = (e) => {
         console.log(e.target.innerText)
        setCurrency(e.target.innerText);
        setIsActive(false);
      };
    const handleActiveBtn=()=>{
        setIsActive(true);
    }
    const handleSignup=()=>{

    }

    const handleLogout=()=>{

    }
    const hover={
        textDecoration:"underline",
        cursor:"pointer"
    }
  return (
    <>
    <Box  w="100%"
      h="60px"
      border="1px solid black"
      backgroundColor="black"
      margin="auto" >
    <Flex justifyContent={"space-between"}>
      <Box h={"60px"} ml={"1rem"}>
      <Link to="/">
       <Image
      src='https://d2v8elt324ukrb.cloudfront.net/static/riotuikit/images/logo.c72056a22f91.png'
      alt='logo'
      width={"100%"} h='26px' display={"block"} margin="auto" mt={"1rem"} /> 
      </Link>
      
      </Box>
      <Box height={"60px"} mr="1rem">
       <Flex justifyContent={"center"} alignItems="center" height={"60px"}>
       <Text color={"white"} >
          {/* {firstName ? firstName : ""} */}
       </Text>
       <Popover placement='bottom'>
         <PopoverTrigger>
            <Button _hover={{background:"none"}} bg="none" p={"4px"}>
                <Box onClick={handleSignup} _hover={{cursor:"pointer"}}>
                <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-svg="user"
              >
              <circle fill='none'
              stroke='#fff'
              strokeWidth={"1.1"}
              cx="9.9" cy="6.4" r="4.4"></circle>
              <path fill='none' stroke='#fff'
              strokeWidth={"1.1"} 
              d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"></path>
              </svg>
                </Box>
            </Button>
         </PopoverTrigger>
         <PopoverContent borderRadius="none" 
         width={"200px"} mr="8rem" p="1rem" pl="1rem">
         
         {/* <PopoverBody width="100px">
            <Text
            fontSize={"14px"}
             color="gray.400" _hover={{color:"black",cursor:"pointer"}}
             onClick={handleLogout}>
               <Link to="/">LogOut</Link>
            </Text>
         </PopoverBody>  */}
         <PopoverBody w='100px'>
                  <Button mb="0.25rem" background={"white"} > 
                  <Text fontSize='13px' fontFamily={"ProximaNova"}
                  color='#999999' _hover={{cursor: 'pointer'
                  ,color: 'black'}}>
                  <Link to="/"> <Login/> </Link></Text></Button>
               <Button background={"white"}>   <Text fontSize='13px'
               fontFamily={"ProximaNova"} 
                  color='#999999' _hover={{cursor: 'pointer'
                  ,color: 'black'}} >
                  <Link to="/"><Signup/></Link></Text></Button>
                </PopoverBody>
         </PopoverContent>
       </Popover>

       <Menu>
        <Popover placement='botton'>
            <PopoverTrigger>
                <Button onClick={()=>handleActiveBtn()}
                    color="white" ml="0.8rem" variant={"link"}
                    rightIcon={<ChevronDownIcon />}
                >{currency}</Button>
            </PopoverTrigger>
            {isActive ? (
                <PopoverContent width="240px" mr="4rem" 
                borderRadius="none">
                <PopoverBody>
                      <Box
                        w="200px"
                        h="auto"
                        color="#1e87f0"
                      >
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            AED
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            AUD
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            BRL
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            CAD
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            CHF
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            CZK
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            DKK
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            EUR
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            GBP
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            HKD
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            HUF
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            ILS
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            INR
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            JPY
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            MXN
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            NOK
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            NZD
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            PHP
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            PLN
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            SEK
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            SGD
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            THB
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            TRY
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            TWD
                          </Text>
                        </Flex>
                        <Flex justifyContent="center">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            USD
                          </Text>
                        </Flex>
                      </Box>
                    </PopoverBody>
                </PopoverContent>
            ) : (
                ""
            )}
        </Popover>
       </Menu>
       <Button as={IconButton}
       icon={<HamburgerIcon color="white" h="6" w="6" />}
             backgroundColor="black"
              color="white"
              colorScheme="white"
              _hover={{bg:"none",color:"none"}}
              onClick={onOpen}></Button>
         <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
         <DrawerOverlay />
              <DrawerContent backgroundColor="black">
                <DrawerCloseButton color="white" />
                {/* <DrawerHeader borderBottomWidth="1px">
                </DrawerHeader> */}
                <DrawerBody color="white" fontSize="14px" textAlign="center">
                  <Box mt="2rem">
                    <Text _hover={{cursor:"pointer"}}>ARE YOU A PROPERTY OWNER/MANAGER?</Text>
                    <Link
                      to="/"
                      color="whiteAlpha.700"
                      mt="0.6rem"
                      mb="0.6rem" _hover={{cursor:"pointer"}}
                    >
                      List New Property
                    </Link>
                    <Link to="/login">
                    <Text color="whiteAlpha.700" _hover={{cursor:"pointer"}}>
                      Sign in to your Dashboard
                    </Text>
                    </Link>
                  </Box>
                  <Divider color="whiteAlpha.800" h="6" mb="4rem" />
                  <Box>
                    <Text _hover={{cursor:"pointer"}}>HOLIDAY HOMES FOR SALE</Text>
                    <Text color="whiteAlpha.700" _hover={{cursor:"pointer"}} mt="0.6rem" mb="0.6rem">
                      Tripvillas Managed
                      <Text fontSize="13px" _hover={{cursor:"pointer"}}>
                        Homes from A grade developers. Rentals guaranteed
                      </Text>
                    </Text>
                    <Text color="whiteAlpha.700" _hover={{cursor:"pointer"}}>
                      Marketplace
                      <Text fontSize="13px" _hover={{cursor:"pointer"}}>
                        See what homes are up for sale from different property
                        owners.
                      </Text>
                    </Text>
                  </Box>
                  <Divider color="whiteAlpha.800" h="6" mb="1rem" />
                  <Box>
                    <Text _hover={{cursor:"pointer"}} mb="0.4rem" color="whiteAlpha.700">
                      About Us
                    </Text>
                    <Text mb="0.4rem" _hover={{cursor:"pointer"}} color="whiteAlpha.700">
                      Privacy Policy
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700" _hover={{cursor:"pointer"}}>
                      Terms of Use
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700" _hover={{cursor:"pointer"}}>
                      FAQs
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700" _hover={{cursor:"pointer"}}>
                      Contact Us
                    </Text>
                  </Box>
                  <Divider color="whiteAlpha.800" h="6" mb="1rem" />
                  <Text color="whiteAlpha.800" _hover={{cursor:"pointer"}}>© Tripvillas Pte Ltd</Text>
                </DrawerBody>
              </DrawerContent>
         </Drawer>     
       </Flex>
      </Box>
    </Flex>
    </Box>
    </>
  )
}

export default Navbar