import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import {Box, Flex, SimpleGrid, Text, Tab, TabList, TabPanel, TabPanels, Tabs, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from '@chakra-ui/react';
import SearchData from './SearchData';
import Holiday from './Holiday';

const Product = () => {
    const hover={
        textDecoration:"underline",
        cursor:"pointer"
    };

  return (
    <>
    <Box>
    <Box>
         <Navbar />
    </Box>
    <Box>
        <SearchData/>
    </Box>
    <Box margin="3rem" p="1rem" boxShadow="md">
      <Box>
        <Tabs flexDirection={{base:'column',lg:'row'}}>
            <TabList flexDirection={{base:'column',lg:'row'}}>
                <Tab color='#999999' fontSize={"13px"} _hover={{color:"#212121"}} 
          _selected={{ borderColor: "#1e87f0" }}>TYPES</Tab>
            </TabList>
            <TabPanels>
                <TabPanel p="0px">
                    <Box w="80%" mt="2rem">
                       <Flex direction={{base:"column",lg:"row"}}
                    justifyContent="space-between">
                           <Box>
                            <Flex direction={"column"}>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Room</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">69 vacation rentals</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Spa</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">12 vacation rentals</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Resort</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">6 vacation rentals</Text>
                                </Box>
                            </Flex>
                        </Box>

                        <Box>
                            <Flex direction={"column"}>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Wifi/Internet</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">41 vacation rentals</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Villa</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">12 vacation rentals</Text>
                                </Box>
                            </Flex>
                        </Box>

                        <Box>
                            <Flex direction={"column"}>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>AC</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">20 vacation rentals</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>HomeStay</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">5 vacation rentals</Text>
                                </Box>
                            </Flex>
                        </Box>

                        <Box>
                            <Flex direction={"column"}>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Swimming pool</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">17 vacation rentals</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Hotel</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">5 vacation rentals</Text>
                                </Box>
                            </Flex>
                        </Box>

                       </Flex>
                    </Box>
                </TabPanel>
            </TabPanels>
        </Tabs>
      </Box>
    </Box>

      <Box ml="32px">
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
        </Breadcrumb>
      </Box>
      
    
    <Box>
    <Heading as="h3" pb="20px" pt="20px" fontSize={"18px"} color="#333333" >Goa Holiday Homes</Heading> 
    <Holiday />
    </Box>
    </Box>
    </>
  )
}

export default Product