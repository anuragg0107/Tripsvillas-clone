import { Text,Box, Tabs, TabList, Tab, TabPanels, TabPanel, Flex } from '@chakra-ui/react';
import React from 'react'



const Footer = () => {
    const hover={
        textDecoration:"underline",
        cursor:"pointer"
    };

    return (
    <>
    <Text  fontSize="24px"
        color="black"
        fontWeight="200"
        mt="1rem"
        mb="2rem"
        ml={{ base: "0rem", lg: "4.8rem" }}
        textAlign={{ base: "center", lg: "" }}>
               Holiday Homes Across The Globe
        </Text>
    <Box w="90%" h="auto" m="auto" mb="4rem">
     <Tabs flexDirection={{base:'column',lg:'row'}}>
        <TabList flexDirection={{base:'column',lg:'row'}}>
          <Tab color='#999999' fontSize={"13px"} _hover={{color:"#212121"}} 
          _selected={{ borderColor: "#1e87f0" }}>
                  ASIA
          </Tab>
          <Tab
            _selected={{ borderColor: "#1e87f0" }}
            color='#999999'
            fontSize="13px"
            _hover={{ color: "black" }}
          >
            EUROPE
          </Tab>
          <Tab
            _selected={{ borderColor: "#1e87f0" }}
            color='#999999'
            fontSize="13px"
            _hover={{ color: "black" }}
          >
            NORTH AMERICA
          </Tab>
          <Tab
            _selected={{ borderColor: "#1e87f0" }}
            color='#999999'
            fontSize="13px"
            _hover={{ color: "black" }}
          >
            SOUTH AMERICA
          </Tab>
          <Tab
            _selected={{ borderColor: "#1e87f0" }}
            color='#999999'
            fontSize="13px"
            _hover={{ color: "black" }}
          >
            AFRICA
          </Tab>
          <Tab
            _selected={{ borderColor: "#1e87f0" }}
            color='#999999'
            fontSize="13px"
            _hover={{ color: "black" }}
          >
            OCEANIA
          </Tab>
        </TabList>
        <TabPanels>
            <TabPanel p="0px">
                <Box w="100%" mt="3.4rem">
                    <Flex direction={{base:"column",lg:"row"}}
                    justifyContent="space-between">
                        <Box>
                            <Flex direction={"column"}>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>India</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">3262 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Georgia</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">102 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Cambodia</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">26 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Oman</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">7 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>

                        <Box>
                            <Flex direction={"column"}>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Thailand</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">1284 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Turkey</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">70 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Nepal</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">22 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Bangladesh</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">5 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Sri Lanka</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">646 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Israel</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">53 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Maldives</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">19 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Indonesia</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">622 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Malaysia</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">49 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Taiwan, Province of China</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">17 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Phillipines</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">378 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Japan</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">46 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Hong Kong Special <br /> Administrative Region of <br/> China</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">16 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>United Arab Emirates</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">146 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>VietNam</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">37 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Republic of korea</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">12 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </TabPanel>
            <TabPanel p="0px">
                <Box w='100%' mt='3.4rem'>
                    <Flex direction={{base:"column",lg:'row'}}
                    justifyContent="space-between">
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Croatia</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">15994 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Finland</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">2086 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Sweden</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">677 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Poland</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">308 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Bulgaria</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">63 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Luxembourg</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">12 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Denmark</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">14385 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Germany</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">1910 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Cyprus</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">593 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Belgium</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">270 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Ukraine</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">47 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Serbia</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">7 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Itly</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">9236 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Hungary</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">1260 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Czech Republic</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">585 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Slovakia</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">141 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Montenegro </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">39 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Iceland</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">6 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Spain </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">4737 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Austria </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">1193 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Portugal </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">556 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Albania </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999"> 34Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Solvenia</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">119 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Lithuania </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">6 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>France </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">3791 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Greece</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">941 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Norway</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">531 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Ireland</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">68 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Bosnia And Herzegovina </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">25 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> The Former Yugoslav <br /> Republic of Macedonia</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">6 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Switzerland </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">2770 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> United Kingdom of Great <br /> Britain And Northern Ireland</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">899 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Netherland </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">491 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Malta</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">64 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Romania</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">17 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Andorra</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">5 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </TabPanel>
            <TabPanel p="0px">
                <Box w="100%" mt="3.4rem">
                    <Flex direction={{base:"column",lg:"row"}} 
                    justifyContent="space-between">
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>United State Of America </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">3017 Holiday Homes</Text>
                                </Box>   
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Jamaica </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">115 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Panama</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">9 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Mexico </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">596 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Aruba</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">37 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Curacao</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">6 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Dominican Republic </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">365 Holiday Homes</Text>
                                </Box> 
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Puerto Rico </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">37 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Cuba </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">257 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Saint Martin </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">34 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Canada </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">164 Holiday Homes</Text>
                                </Box>  
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Sint Marten</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">10 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Costa Rica </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">147 Holiday Homes</Text>
                                </Box>  <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Belize </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">9 Holiday Homes</Text>
                                </Box>   
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </TabPanel>
            <TabPanel p="0px">
                <Box w="100%" mt="3.4rem">
                    <Flex direction={{base:"column",lg:"row"}}
                    justifyContent="space-between">
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Colambia </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">198 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Chile </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">44 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Brazil</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">39 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Argentina</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">28 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Peru </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">15 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                       <Box>
                        <Flex direction={"column"}>
                        <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Ecuador </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">7 Holiday Homes</Text>
                                </Box>
                        </Flex>
                       </Box>
                    </Flex>
                </Box>
            </TabPanel>
            <TabPanel p="0px">
                <Box width="100%" mt="3.4rem">
                    <Flex direction={{base:"column",lg:"row"}}
                    justifyContent="space-between">
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Kenya</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">613 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Rwanda</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">21 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>South Africa </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">277 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Burundi</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">19 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Morocco </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">197 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Madagascar</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">14 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Uganda</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">194 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Egypt</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">12 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Mauritius</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">71 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}>Tunisia </Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">7 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"}>
                            <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Tanzania</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">70 Holiday Homes</Text>
                                </Box>
                                <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Seychelles</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">5 Holiday Homes</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </TabPanel>
            <TabPanel p="0px">
            <Box width="100%" mt="3.4rem"> 
            <Box>
                <Flex direction={{base:"column",lg:"row"}}
                justifyContent="space-between" width={"40%"}>
              
                  <Box>
                    <Flex direction={"column"}>
                    <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> Australia</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">397 Holiday Homes</Text>
                                </Box>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex direction={"column"}>
                    <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> New Zealand</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">48 Holiday Homes</Text>
                                </Box>
                    </Flex>
                  </Box>  
                  <Box>
                    <Flex direction={"column"}>
                    <Box mb="1rem" _hover={hover}>
                                    <Text color={"#484848"} fontFamily="ProximaNova" fontSize={"15px"}> French Polynesia</Text>
                                    <Text fontSize={"13.125px"} fontFamily="ProximaNova" color="#999999">18 Holiday Homes</Text>
                                </Box>
                    </Flex>
                  </Box>
                 
                </Flex>
                </Box>
            </Box>
            </TabPanel>
        </TabPanels>
     </Tabs>
    </Box>
      
    </>
  )
}

export default Footer