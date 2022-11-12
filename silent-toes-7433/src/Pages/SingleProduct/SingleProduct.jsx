import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {  Tabs, TabList, Tab, TabPanels, TabPanel, Input, Button} from '@chakra-ui/react';


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Navbar from '../../Components/Navbar/Navbar'
import {Box,Image, Text,Breadcrumb,BreadcrumbItem,BreadcrumbLink,
   Flex} from "@chakra-ui/react";
const SingleProduct = () => {
  return (
    <>
    <Box>
 <Navbar/>
    </Box>
   <br /> 
   <Box>
   <Breadcrumb>
        <BreadcrumbItem>
                <BreadcrumbLink fontSize={"13.125px"} color="#999999">Home</BreadcrumbLink>
            </BreadcrumbItem>
    
            <BreadcrumbItem>
                <BreadcrumbLink fontSize={"13.125px"} color="#999999">India</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink fontSize={"13.125px"} color="#999999">Goa</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink fontSize={"13.125px"} color="#999999" >Sinquerim</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink fontSize={"13.125px"} color="#000">Property #19728143</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
   </Box>
 
   <Box style={{ display:"flex",gap:"20px",paddingLeft:"15px",paddingRight:"15px"}}>
  
   <Box style={{display:"flex",width:"90%"}}>
     <hr />
     <br />
     
     <Box>
     <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Box>
          <Image
          height={"100%"} backgroundSize={"cover"}
           src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/19912292/1-casamelhor-apartment-in-candolim_mob_thumbnail.jpeg" />
        </Box>
        <Box>
          <Flex>
            <Image  height={"100%"} backgroundSize={"cover"}
            src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/19912292/2-casamelhor-apartment-living-area_mid_thumbnail.jpeg" />
            <Image   height={"100%"} backgroundSize={"cover"}
            src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/19912292/3-casamelhor-apartment-living-area_mid_thumbnail.jpeg" />
          </Flex>
        </Box>  
        </SwiperSlide>
        <SwiperSlide>
        <Box>
          <Image
          height={"100%"} backgroundSize={"cover"}
           src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/19912292/401-view-from-the-living-room-window_mob_thumbnail.jpeg" />
        </Box>
        <Box>
          <Flex>
            <Image  height={"100%"} backgroundSize={"cover"}
            src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/19912292/4casamelhor-apartment-bedroom_mid_thumbnail.jpeg" />
            <Image   height={"100%"} backgroundSize={"cover"}
            src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/19912292/5-casamelhor-apartment-bedroom_mid_thumbnail.jpeg" />
          </Flex>
        </Box> 
        </SwiperSlide>
        <SwiperSlide>
        <Box>
          <Image
          height={"100%"} backgroundSize={"cover"}
           src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/19912292/6casamelhor-apartment-kitchen_mob_thumbnail.jpeg" />
        </Box>
        <Box>
          <Flex>
            <Image  height={"100%"} backgroundSize={"cover"}
            src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/19912292/7casamelhor-apartment-kitchen_mid_thumbnail.jpeg" />
            <Image   height={"100%"} backgroundSize={"cover"}
            src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/19912292/8casamelhor-apartment-balcony-view_mid_thumbnail.jpeg" />
          </Flex>
        </Box> 
        </SwiperSlide>
        <SwiperSlide>
        <Box>
          <Image
          height={"100%"} backgroundSize={"cover"}
           src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/19912292/9-casamelhor-apartment-bathroom_mob_thumbnail.jpeg" />
        </Box>
        <Box>
          <Flex>
            <Image  height={"100%"} backgroundSize={"cover"}
            src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/19912292/10-casamelhor-apartment-overview_mid_thumbnail.jpeg" />
            <Image   height={"100%"} backgroundSize={"cover"}
            src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/19912292/10-casamelhor-apartment-overview_mid_thumbnail.jpeg" />
          </Flex>
        </Box>
        </SwiperSlide>
      </Swiper>
     </Box>
   </Box>
    <Box>
    <Box style={{fontSize:"25px"}}>
    Premium Three Bedroom Garden Villa
    </Box>
    <br/>
    <Box>
    <Flex>
      <svg width="20" h="20px" viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg" >
    <path fill="none" stroke="#000" strokeWidth={"1.01"}
    d="M10,0.5 C6.41,0.5 3.5,3.39
     3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83
     16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"></path>
      <circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"></circle>
      </svg>
      <Text pl="10px" fontSize={"13.125px"} color="#484848"
      fontFamily="ProximaNovaLight" >Varca, Goa, India | Club Mahindra Varca Beach Resort</Text>
</Flex>
    </Box>
   <br />
    <hr />

    <Box >
      <Flex mt="20px" ml="20px" justifyContent={"space-evenly"}>
        <Box w="100px" h="30px" pt="2px" color={"#1e87f0"} background="#ffffff" border={"1px solid #1e87f0"} 
        fontSize="13.125px">
        APARTMENT
        </Box>
        <Box color={"#1e87f0"}
        w="100px" h="30px" pt="2px" background="#ffffff" border={"1px solid #1e87f0"} 
        fontSize="13.125px">
          1 BEDROOMS
        </Box>
      </Flex>
      <Flex mt="20px" ml="20px" justifyContent={"space-evenly"}>
        <Box  color={"#1e87f0"} 
       w="110px" h="30px "  pt="2px" background="#ffffff" border={"1px solid #1e87f0"} 
        fontSize="13.125px">
       1 BATHROOMS
        </Box>
        <Box color={"#1e87f0"}
        w="120px" h="30px" pt="2px" background="#ffffff" border={"1px solid #1e87f0"} 
        fontSize="13.125px">
          4 MAX GUESTS
        </Box>
      </Flex>
      <Flex mt="20px" ml="20px" justifyContent={"space-evenly"}>
        <Box  color={"#1e87f0"}
        w="91px" h="30px" pt="2px"
         background="#ffffff" border={"1px solid #1e87f0"} 
        fontSize="13.125px">
        KITECHEN
        </Box>
        <Box color={"#1e87f0"}
        w="130px" h="30px" pt="2px"
         background="#ffffff" border={"1px solid #1e87f0"} 
        fontSize="13.125px">
          SWIMMING POOL
        </Box>
        <Box color={"#1e87f0"} 
        w="60px" h="30px" pt="2px"
        background="#ffffff" border={"1px solid #1e87f0"} 
        fontSize="13.125px">
        AC
        </Box>
      </Flex>
    </Box>
    <Box>
      <Box>
      <Flex mt="20px" ml="28px">
          <Text fontSize={"48.75px"} color="#000000" fontFamily={"ProximaNova"}>Rs.2950</Text>
          <Text fontSize={"19.5px"} color="#484848" fontFamily={"ProximaNova"} pl="20px" pt="28px"> per night</Text>
      </Flex>
      <Box background={"#edfbd6"} h="40px" pt="10px" color="#32d296" fontSize={"15px"} fontFamily="ProximaNova">
        Your dates are available to book
      </Box>
      <Box>
        <Flex mt="20px">
          <Input type="date" placeholder="check-in" />
          <Input type="date" placeholder="check-out" />
        </Flex>
      </Box>
      <Box><Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">Rateplan: No meals provided (European Plan)</Text></Box>
      <Box>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"15px"} fontFamily="ProximaNova" color="#666666">Total</Text>
          <Text fontSize={"15px"} fontFamily="ProximaNova" color="#666666">Rs.2950</Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"12px"} fontFamily="ProximaNova" color="#666666">Includes taxes & fees</Text>
          <Text fontSize={"12px"} fontFamily="ProximaNova" color="#1e89f0">View details</Text>
        </Flex>
      </Box>
      <Box>
      <Text _hover={{cursor:"pointer"}} mt="20px" h="55px" pt="16px" fontSize={"13.125px"} 
        fontFamily="ProximaNova"
        background={"#1e87f0"} color="#ffffff">
          REQUEST TO BOOK
        </Text>
      </Box>
       <Box mt="10px">
        <Text  fontSize={"12px"} fontFamily="ProximaNova" color="#1e87f0">Stringent Cancellation Policy</Text>
       </Box>
      </Box>
    </Box>
   </Box>
   </Box>


   <Box w="40%" h="auto" mt="2rem" ml="4rem" mb="4rem">
     <Tabs flexDirection={{base:'row',lg:'row'}}>
        <TabList flexDirection={{base:'row',lg:'row'}}>
          <Tab color='#999999' fontSize={"13px"} _hover={{color:"#212121"}} 
          _selected={{ borderColor: "#1e87f0" }} >
                  <svg width={"20px"} h="20px" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg" >
                  <path
                 d="M12.13,11.59 C11.97,12.84 10.35,
                 14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,
                 8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,
                 9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,
                 11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,
                 11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13
                 ,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,
                 6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"
                  ></path>
                  <circle fill="none"
                   stroke="#000" 
                   strokeWidth={"1.1"} cx="10" cy="10" r="9"></circle>
                 </svg>
                 <Text ml="5px">
                   OVERVIEW
                 </Text>
                
          </Tab>
          <Tab
            _selected={{ borderColor: "#1e87f0" }}
            color='#999999'
            fontSize="13px"
            _hover={{ color: "black" }}
          >
           <svg width={"20px"} h="20px" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg" >
                  <path fill="none" stroke="#000" strokeWidth={"1.1"}
                d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,
                8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,
                13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,
                2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,
                2.5 16.86,2.63 17.11,
                2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"
                  ></path>
                  <circle cx="14" cy="6" r="1"></circle>
                 </svg>
                 <Text ml="5px">
                   AMENITIES
                 </Text>
          </Tab>
          <Tab
            _selected={{ borderColor: "#1e87f0" }}
            color='#999999'
            fontSize="13px"
            _hover={{ color: "black" }}
          >
           <svg width={"20px"} h="20px" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg" >
                  <path fill="none" stroke="#000" strokeWidth={"1.1"}
                d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,
                19 10,19 C10,19 16.5,11.83 16.5,
                6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"
                  ></path>
                  <circle fill="none" stroke="#000"
                   cx="10" cy="6.8" r="2.3"></circle>
                 </svg>
                 <Text ml="5px">
                   MAP
                 </Text>
          </Tab>
          <Tab
            _selected={{ borderColor: "#1e87f0" }}
            color='#999999'
            fontSize="13px"
            _hover={{ color: "black" }}
          >
                    <svg width={"20px"} h="20px" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg" >
                  <rect x="6" y="4" width="12" height="1"></rect>
                  <rect x="6" y="9" width="12" height="1"></rect>
                  <rect x="6" y="14" width="12" height="1"></rect>
                  <rect x="2" y="4" width="2" height="1"></rect>
                  <rect x="2" y="9" width="2" height="1"></rect>
                  <rect x="2" y="14" width="2" height="1"></rect>
                 </svg>
                 <Text ml="5px">
                  POLICIES & FEES
                 </Text>
          </Tab>
        </TabList>
        <TabPanels>
            <TabPanel p="0px">
                <Box w="170%" mt="3.4rem">
                    <Flex direction={{base:"column",lg:"row"}}
                    justifyContent="space-between">
                    <Box>
                      <Box
                       color={"#333333"} fontSize="18px" boxShadow={"0 0 5px 0px"}
                       height="140px" paddingTop={"40px"}
                        boxSizing="border-box" fontFamily={"ProximaNova"} 
                        width={"300px"} maxW="100%">
                       Apartment <br/>
                       <Text color="#999999" fontSize={"13.125px"} fontFamily="ProximaNova">Type of Property</Text>
                      </Box>
                      <Box>
                        <Flex justifyContent={"space-evenly"} >
                          <Box mt="14px" fontFamily="ProximaNova" 
                           color={"#333333"} fontSize="18px"
                            boxShadow={"0 0 5px 0px"}
                       height="140px" paddingTop={"40px"}
                        boxSizing="border-box" 
                        width={"140px"} maxW="100%">1 <br /> <Text fontSize={"13.125px"} color="#999999" fontFamily={"ProximaNova"}>Bedrooms</Text></Box>
                          <Box mt="14px" 
                          color={"#333333"} fontSize="18px"  boxShadow={"0 0 5px 0px"}
                       height="140px" paddingTop={"40px"}
                        boxSizing="border-box" fontFamily={"ProximaNova"} 
                        width={"140px"} maxW="100%">1 <br /> <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999" >Bathrooms</Text></Box>
                        </Flex>
                      </Box>
                      <Box mt="14px" color={"#333333"}
                       fontSize="18px"
                        boxShadow={"0 0 5px 0px"}
                       height="140px" paddingTop={"40px"}
                        boxSizing="border-box" fontFamily={"ProximaNova"} 
                        width={"100%"} maxW="100%">4 <br /> <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">Max. Guests</Text></Box>
                    </Box>      
                       
                       <Box>
                        <Text ml="50px" flexDirection={{base:"column",lg:"row"}}>
                        This Apartment rests on the 4th Floor, This apartment can accommodate maximum 4 guests. It has One Air-Conditioned bedroom with a double bed. Extra mattresses are provided. It also has a lift facility and private parking in the complex and 24X7 security services.

Living Area:
Living room area is spacious inclusive of a modern sofa with coffee table and TV with Tata Sky connection to relax and enjoy some entertainment.

Dining Area:
The dining area is attached to the living area. It has a dining table that can seat four.

Kitchen:
The kitchen is separate and is fully equipped with a Double door fridge, Induction plate, frying pan, kadai, chopping board, hot water kettle
                        </Text>
                        <Text as="b">Best For</Text>
                        <Text fontFamily={"ProximaNova"} 
                         color="#1e78f0">What can you do in & around Candolim</Text>
                       </Box>
                    </Flex>
                </Box>
            </TabPanel>
            <TabPanel p="0px">
                <Box w='100%' mt='3.4rem'>
                    <Flex flexDirection={{base:"column",lg:"row"}} justifyContent="space-between">
                    <Box width={"400px"}>
                      <Text color="#666666" fontFamily={"ProximaNOva"} fontSize="15px">
                      Default Cancellation Policy 
                      </Text>
                      <Text pt="10px" fontSize={"15px"} fontFamily="ProximaNova" color="#666666">
                        <Text as="strong">Stringent:</Text>
                        No charges will be levied if booking 
                        is canceled 61 days prior to check-in. If 
                        cancellation is done between 30 to 60 days prior 
              to check-in, 50% of the total booking amount will be charged.
                         Post that, there will be no refund.
                      </Text>
                    </Box>
                    <Box ml="10px">
                      <Text fontFamily="ProximaNova" fontSize="15px" color="#666666">
                        Security Deposit
                      </Text>
                      <Text pt="10px" fontFamily={"ProximaNova"} fontSize="15px" color={"#666666"}>
                        Security Deposit INR 2000.00 Fixed Amount Per Stay
                      </Text>
                    </Box>
                    </Flex>
                </Box>
            </TabPanel>
        </TabPanels>
     </Tabs>
    
    </Box>
    
    </>
  )
}

export default SingleProduct