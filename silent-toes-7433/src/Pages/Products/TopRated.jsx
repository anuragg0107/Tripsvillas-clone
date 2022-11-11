import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { Component, useContext, useEffect, useState } from "react";
import Slider from "react-slick";

import {  Badge,  Box,   Image,  Text,  } from "@chakra-ui/react";
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



export default class TopRated extends Component {
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
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/21459385/zebra-room-6_mid_thumbnail.jpe"
                alt="villa"
              />
              <br />
              <Box opacity={"0.7"} mt="-74px" height={"65px"} 
              padding="10px 15px" backgroundColor={"#222222"}>
             <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" 
               fontFamily={"ProximaNova"}>
               Amazingly Spacious Guest House</Text>
              <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               arpora,goa,India
              </Text>
              </Box>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#484848" 
                  fontSize={"15px"} 
                  fontFamily="ProximaNova"
                  > Excellent Stay</Text>
                  <Text fontSize={"12px"} 
                  color="#484848">The house and rooms are very....</Text>
                </Badge>
              </Box>
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
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/97107652/24ca17f3004411e988750a8e1b1ce4da_mid_thumbnail.jpeg"
                alt="villa"
              />
              <br />
              <Box opacity={"0.7"} mt="-80px" height={"65px"} 
              padding="10px 15px" backgroundColor={"#222222"}>
             <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" 
               fontFamily={"ProximaNova"}>
              Beach Stay At Arambol</Text>
              <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               Arambol,Goa, India
              </Text>
              </Box>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#484848" 
                  fontSize={"15px"} 
                  fontFamily="ProximaNova"
                  > Pleasant Stay Stay</Text>
                  <Text fontSize={"12px"} 
                  color="#484848">The stay was good....</Text>
                </Badge>
              </Box>
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
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/67538484/image_28_mid_thumbnail.jpeg"
                alt="villa"
              />
              <br />
              <Box opacity={"0.7"} mt="-80px" height={"65px"} 
              padding="10px 15px" backgroundColor={"#222222"}>
             <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" 
               fontFamily={"ProximaNova"}>
              Cozy 3 Bhk Vila </Text>
              <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               Gulrlm, goa, India
              </Text>
              </Box>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#484848" 
                  fontSize={"15px"} 
                  fontFamily="ProximaNova"
                  > The Stay Was Pleasant</Text>
                  <Text fontSize={"12px"} 
                  color="#484848">It was great, liked the place ....</Text>
                </Badge>
              </Box>
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
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/48556786/img-20120114-00193_mid_thumbnail.jpg"
                alt="villa"
              />
              <br />
              <Box opacity={"0.7"} mt="-80px" height={"65px"} 
              padding="10px 15px" backgroundColor={"#222222"}>
             <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" 
               fontFamily={"ProximaNova"}>
              3 Bhk Bungalow </Text>
              <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               Mapusa, goa, India
              </Text>
              </Box>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#484848" 
                  fontSize={"15px"} 
                  fontFamily="ProximaNova"
                  > A Pleasant Stay</Text>
                  <Text fontSize={"12px"} 
                  color="#484848">We were of 6 adults stayed for 5...</Text>
                </Badge>
              </Box>
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
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/92969019/9918fa87f24a11e888730a8e1b1ce4da_mid_thumbnail.jpg"
                alt="villa"
              />
              <br />
              <Box opacity={"0.7"} mt="-80px" height={"65px"} 
              padding="10px 15px" backgroundColor={"#222222"}>
             <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" 
               fontFamily={"ProximaNova"}>
              Standard Non Ac Stay</Text>
              <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               Calangute,goa,India
              </Text>
              </Box>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#484848" 
                  fontSize={"15px"} 
                  fontFamily="ProximaNova"
                  > Had A Pleasant Stay</Text>
                  <Text fontSize={"12px"} 
                  color="#484848">A property was good....</Text>
                </Badge>
              </Box>
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
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/64219945/bd665473dc2f11e985440a8e1b1ce4da_mid_thumbnail.jpg"
                alt="villa"
              />
              <br />
              <Box opacity={"0.7"} mt="-80px" height={"65px"} 
              padding="10px 15px" backgroundColor={"#222222"}>
             <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" 
               fontFamily={"ProximaNova"}>
              HomeStay Accommodation </Text>
              <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               Majorda,goa,India
              </Text>
              </Box>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#484848" 
                  fontSize={"15px"} 
                  fontFamily="ProximaNova"
                  > Excellent Stay</Text>
                  <Text fontSize={"12px"} 
                  color="#484848">The stay at the property was good....</Text>
                </Badge>
              </Box>
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
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/28348744/romaldoguesthouse2_mid_thumbnail.jpg"
                alt="villa"
              />
              <br />
              <Box opacity={"0.7"} mt="-80px" height={"65px"} 
              padding="10px 15px" backgroundColor={"#222222"}>
             <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" 
               fontFamily={"ProximaNova"}>
               Guesthouse Accommodation</Text>
              <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               Bardez,goa,India
              </Text>
              </Box>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#484848" 
                  fontSize={"15px"} 
                  fontFamily="ProximaNova"
                  > Nice And Helpful Owners</Text>
                  <Text fontSize={"12px"} 
                  color="#484848">The stay was good....</Text>
                </Badge>
              </Box>
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
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/29784314/inside-6-1600x1200_mid_thumbnail.JPG"
                alt="villa"
              />
              <br />
              <Box opacity={"0.7"} mt="-80px" height={"65px"} 
              padding="10px 15px" backgroundColor={"#222222"}>
             <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" 
               fontFamily={"ProximaNova"}>
              Holiday Home</Text>
              <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               Saligao, goa, India
              </Text>
              </Box>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#484848" 
                  fontSize={"15px"} 
                  fontFamily="ProximaNova"
                  > At Home Feel :-)</Text>
                  <Text fontSize={"12px"} 
                  color="#484848">At home feel....</Text>
                </Badge>
              </Box>
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
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/15048096/candolim-029_mid_thumbnail.jpg"
                alt="villa"
              />
              <br />
              <Box opacity={"0.7"} mt="-80px" height={"65px"} 
              padding="10px 15px" backgroundColor={"#222222"}>
             <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" 
               fontFamily={"ProximaNova"}>
               4 Bedroom Bungalow</Text>
              <Text fontSize="15px"
               color={"#ffffffb3"} maxw="100%" overflow={"hidden"}
              textOverflow="ellipsis" whiteSpace={"nowrap"}
               fontFamily={"ProximaNova"}>
               Candollm, goa, India
              </Text>
              </Box>
              <br/>
              <Box p={2}>
                <Badge colorScheme="white"  fontWeight="light">
                 <Text color="#484848" 
                  fontSize={"15px"} 
                  fontFamily="ProximaNova"
                  > Excellent Stay</Text>
                  <Text fontSize={"12px"} 
                  color="#484848">Excellent villa, well maintained....</Text>
                </Badge>
              </Box>
            </Box>
        </Slider>

      </div>
    );
  }
}
