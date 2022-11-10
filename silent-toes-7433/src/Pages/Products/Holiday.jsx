import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { Component, useContext, useEffect, useState } from "react";
import Slider from "react-slick";

import {Stack, 
   Badge,  Box, Button, Center, Flex,
    Image, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

// import slides from "../LandingPage/NA_Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";
import { AppContext } from '../../Context/AppContext';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    >
      <ChevronRightIcon w={"40px"} h={"40px"} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    >
      <ChevronLeftIcon
       w={"40px"} h={"40px"} />
    </div>
  );
}



export default class Holiday extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      className: "slides.slides",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };



    return (
      <div style={{ margin: "auto", justifyContent: "center",
       width: "80%" }}>
        <Slider
          style={{ paddingLeft: "20px" }}
          ref={(slider) => (this.slider = slider)}
          {...settings}
        >
              
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                boxSize="250px"
                backgroundPosition={"center"}
                objectFit="cover"
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/42631100/739f304d491511e8bf470a8e1b1ce4da_mob_thumbnail.jpg"
                alt="villa"
              />
              <br />
              <Text fontSize="15px"
               color={"#484848"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               arpora,goa,India
              </Text>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#1e87f0" fontSize={"12px"} fontFamily="ProximaNova"> Homestay | 1 BR | 2 Bath | Wifi | TV</Text>
                </Badge>
              </Box>

              <Flex direction="row" mt="10px">
                <Text color={"#1e87f0"} pl="19px"
                fontSize="15px" fontFamily={"ProximaNova"} fontWeight="bolder"
                >  ₹ 3552  </Text><Text pl="5px" color={"#999999"} fontSize="13.125px" fontFamily={"ProximaNova"}> per night</Text>
              </Flex>
            </Box>

            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                boxSize="250px"
                backgroundPosition={"center"}
                objectFit="cover"
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/21737603/house1-big_new_mob_thumbnail.jpeg"
                alt="villa"
              />
              <br />
              <Text fontSize="15px"
               color={"#484848"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
              Candollm, goa, India
              </Text>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#1e87f0" fontSize={"12px"}
                  fontFamily="ProximaNova"> Room | Swimming Pool | AC | TV</Text>
                </Badge>
              </Box>

              <Flex direction="row" mt="10px">
                <Text color={"#1e87f0"} pl="19px"
                fontSize="15px" fontFamily={"ProximaNova"} fontWeight="bolder"
                >  ₹ 4204  </Text><Text pl="5px" color={"#999999"} fontSize="13.125px" fontFamily={"ProximaNova"}> per night</Text>
              </Flex>
            </Box>
          
            
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                boxSize="250px"
                backgroundPosition={"center"}
                objectFit="cover"
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/86678729/10356162_643636019076128_4481652960902955516_n_mob_thumbnail.jpeg"
                alt="villa"
              />
              <br />
              <Text fontSize="15px"
               color={"#484848"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               Denaulim, goa, India
              </Text>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#1e87f0"
                  fontSize={"12px"} fontFamily="ProximaNova">
                  Room | Swimming Pool | AC | TV</Text>
                </Badge>
              </Box>

              <Flex direction="row" mt="10px">
                <Text color={"#1e87f0"} pl="19px"
                fontSize="15px" fontFamily={"ProximaNova"} fontWeight="bolder"
                >  ₹ 5636  </Text><Text pl="5px" color={"#999999"} fontSize="13.125px" fontFamily={"ProximaNova"}> per night</Text>
              </Flex>
            </Box>
          

            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                boxSize="250px"
                backgroundPosition={"center"}
                objectFit="cover"
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/33859485/large%206_mob_thumbnail.jpeg"
                alt="villa"
              />
              <br />
              <Text fontSize="15px"
               color={"#484848"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
              Panaji,goa,India
              </Text>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#1e87f0" fontSize={"12px"} fontFamily="ProximaNova"> Homestay | 1 BR | 2 Bath | Wifi | TV</Text>
                </Badge>
              </Box>

              <Flex direction="row" mt="10px">
                <Text color={"#1e87f0"} pl="19px"
                fontSize="15px" fontFamily={"ProximaNova"} fontWeight="bolder"
                >  ₹ 4349  </Text><Text pl="5px" color={"#999999"} fontSize="13.125px" fontFamily={"ProximaNova"}> per night</Text>
              </Flex>
            </Box>
      

          
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                boxSize="250px"
                backgroundPosition={"center"}
                objectFit="cover"
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/21176215/xm7zhhhtddf_5624aa93f957687ab97a5a5b83c9025e_mob_thumbnail.jpeg"
                alt="villa"
              />
              <br />
              <Text fontSize="15px"
               color={"#484848"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               Candolim, goa, India
              </Text>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#1e87f0" fontSize={"12px"}
                  fontFamily="ProximaNova">Resort | 2 BR | Swimming Pool  | 2 Bath | Wifi | TV</Text>
                </Badge>
              </Box>

              <Flex direction="row" mt="10px">
                <Text color={"#1e87f0"} pl="19px"
                fontSize="15px" fontFamily={"ProximaNova"} fontWeight="bolder"
                >  ₹ 7972  </Text><Text pl="5px" color={"#999999"} fontSize="13.125px" fontFamily={"ProximaNova"}> per night</Text>
              </Flex>
            </Box>
        

          
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                boxSize="250px"
                backgroundPosition={"center"}
                objectFit="cover"
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/24101244/img_0382_mob_thumbnail.jpeg"
                alt="villa"
              />
              <br />
              <Text fontSize="15px"
               color={"#484848"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
              Sinquerim, goa, India
              </Text>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#1e87f0" fontSize={"12px"}
                  fontFamily="ProximaNova"> Villa | 3 BR | 4 Bath | Swimming Pool | Wifi | TV</Text>
                </Badge>
              </Box>

              <Flex direction="row" mt="10px">
                <Text color={"#1e87f0"} pl="19px"
                fontSize="15px" fontFamily={"ProximaNova"} fontWeight="bolder"
                >  ₹ 11596  </Text><Text pl="5px" color={"#999999"} fontSize="13.125px" fontFamily={"ProximaNova"}> per night</Text>
              </Flex>
            </Box>
          
          <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                boxSize="250px"
                backgroundPosition={"center"}
                objectFit="cover"
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/61430860/village-side_mob_thumbnail.jpeg"
                alt="villa"
              />
              <br />
              <Text fontSize="15px"
               color={"#484848"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               Calangute, goa, India
              </Text>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#1e87f0" fontSize={"12px"}
                  fontFamily="ProximaNova"> Apartment | 1 BR | 2 Bath | Wifi | Swimming pool</Text>
                </Badge>
              </Box>

              <Flex direction="row" mt="10px">
                <Text color={"#1e87f0"} pl="19px"
                fontSize="15px" fontFamily={"ProximaNova"} fontWeight="bolder"
                >  ₹ 4784  </Text><Text pl="5px" color={"#999999"} fontSize="13.125px" fontFamily={"ProximaNova"}> per night</Text>
              </Flex>
            </Box>
          
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                boxSize="250px"
                backgroundPosition={"center"}
                objectFit="cover"
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/16050796/d1_2_mob_thumbnail.jpeg"
                alt="villa"
              />
              <br />
              <Text fontSize="15px"
               color={"#484848"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               Morjim, goa, India
              </Text>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#1e87f0" fontSize={"12px"} fontFamily="ProximaNova"
                 > Room  | AC | Wifi | TV</Text>
                </Badge>
              </Box>

              <Flex direction="row" mt="10px">
                <Text color={"#1e87f0"} pl="19px"
                fontSize="15px" fontFamily={"ProximaNova"} fontWeight="bolder"
                >  ₹ 1812  </Text><Text pl="5px" color={"#999999"} fontSize="13.125px" fontFamily={"ProximaNova"}> per night</Text>
              </Flex>
            </Box>
          
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                boxSize="250px"
                backgroundPosition={"center"}
                objectFit="cover"
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/17531158/v4_mob_thumbnail.jpeg"
                alt="villa"
              />
              <br />
              <Text fontSize="15px"
               color={"#484848"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               Candolim, goa, India
              </Text>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#1e87f0" fontSize={"12px"} 
                 fontFamily="ProximaNova"> Villa | Swimming Pool | 5 BR | 5 Bath </Text>
                </Badge>
              </Box>

              <Flex direction="row" mt="10px">
                <Text color={"#1e87f0"} pl="19px"
                fontSize="15px" fontFamily={"ProximaNova"} fontWeight="bolder"
                >  ₹ 96965  </Text><Text pl="5px" color={"#999999"} fontSize="13.125px" fontFamily={"ProximaNova"}> per night</Text>
              </Flex>
            </Box>
        </Slider>

      </div>
    );
  }
}
