import React, { useState } from 'react'
import {Box,Button,Flex,Image,Input,InputGroup,InputLeftElement,Select,Text} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
const SearchData = () => {
    const [search,setSearch]=useState("")
    const [place,setPlace]=useState([])

  return (
    <>
     <Box>
     
     <Flex justifyContent={"center"}
      alignItems="center" brightness={"100%"}>
      <Box minW={{base:"90%",lg:"884px"}} w="80%"
      mt="20px" background={"#fff"} color="#666"
       boxShadow={"0 5px 15px rgb(0 0 0 / 8%)"} 
      fontFamily={"ProximaNovaLight","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial,sans-serif"}
      maxW={{base:"90%"}}  style={{height:"auto"}}>
        <Text fontSize={"20px"} fontFamily="ProximaNova"
         color="#000000" margin={"0px 0px 20px"} as="h1"  >
        Goa Holiday Homes
        </Text>
        <Text as="h2" fontSize={"18px"} margin={"20px 0px"} color="#333333">We have 103 Vacation Rentals - search <br /> by dates for availability</Text>
      <Box style={{maxWidth:"100%", display:"flex",margin:"auto",height:"auto",background:"#fff",justifyContent:"center",alignItems:"center"}} pb={{base:"0rem", lg:"1rem"}}>
      <Flex style={{justifyContent:"center",alignItems:"center",
      alignContent:"center",paddingTop:"0.6rem",
      paddingLeft:"0.6rem",paddingRight:"0.6rem",color:"#000"}} 
      direction={{base:"column",xl:"row"}}>
       <InputGroup>
        <InputLeftElement pointerEvents={"none"} children={
            <svg width={"20px"} height="20" viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg' data-svg="sign-in" >
        
            <polygon  
            fill="grey"
            points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3">
            </polygon>
            <polygon
            fill="grey"
             points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"
             ></polygon>
        </svg> }/>
        <Input 
            borderRadius={"none"} width="100%" type={"date"} placeholder="Check In"/>
       </InputGroup>
       <InputGroup>
        <InputLeftElement pointerEvents={"none"} children={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="sign-out"
                      >
                        <polygon
                          fill="grey"
                          points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"
                        ></polygon>
                        <polygon
                          fill="grey"
                          points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"
                        ></polygon>
                      </svg>
        }
        />
         <Input
         borderRadius="none"
          w="100%"
          type="date"
           placeholder="Check Out"
           onfocus="(this.type='date')"
         ></Input>
       </InputGroup>
       <Select placeholder='Select Guests' borderRadius={"none"} width="100%" color={"gray.400"} p="0">
       <option value="option1">1 guest</option>
                  <option value="option2">2 guests</option>
                  <option value="option3">3 guests</option>
                  <option value="option4">4 guests</option>
                  <option value="option5">5 guests</option>
                  <option value="option6">6 guests</option>
                  <option value="option7">7 guests</option>
                  <option value="option8">8 guests</option>
                  <option value="option9">9 guests</option>
                  <option value="option10">10 guests</option>
                  <option value="option11">11 guests</option>
                  <option value="option12">12 guests</option>
                  <option value="option13">13 guests</option>
                  <option value="option14">14 guests</option>
                  <option value="option15">15 guests</option>
                  <option value="option16">16 guests</option>
                  <option value="option17">17 guests</option>
                  <option value="option18">18 guests</option>
                  <option value="option19">19 guests</option>
                  <option value="option20">20 guests</option>
                  <option value="option21">21 guests</option>
                  <option value="option22">22 guests</option>
                  <option value="option23">23 guests</option>
                  <option value="option24">24 guests</option>
                  <option value="option25">25 guests</option>
                  <option value="option26">26 guests</option>
                  <option value="option27">27 guests</option>
                  <option value="option28">28 guests</option>
                  <option value="option28">28 guests</option>
                  <option value="option29">29 guests</option>
                  <option value="option30">30 guests</option>
                  <option value="option31">31 guests</option>
                  <option value="option32">32 guests</option>
                  <option value="option33">33 guests</option>
                  <option value="option34">34 guests</option>
                  <option value="option35">35 guests</option>
                  <option value="option36">36 guests</option>
                  <option value="option37">37 guests</option>
                  <option value="option38">38 guests</option>
                  <option value="option39">39 guests</option>
                  <option value="option40">40 guests</option>
                  <option value="option41">41 guests</option>
                  <option value="option42">42 guests</option>
                  <option value="option43">43 guests</option>
                  <option value="option44">44 guests</option>
                  <option value="option45">45 guests</option>
                  <option value="option46">46 guests</option>
                  <option value="option47">47 guests</option>
                  <option value="option48">48 guests</option>
                  <option value="option49">49 guests</option>
                  <option value="option50">50 guests</option>
       </Select>
       <Button ml={"8px"} colorScheme={"blue"} borderRadius="none" width={"60%"} mb="5px" mt="5px"
       >Search</Button>
      </Flex>
      </Box>
      </Box>
     </Flex>
     </Box>
    </>
  )
}

export default SearchData