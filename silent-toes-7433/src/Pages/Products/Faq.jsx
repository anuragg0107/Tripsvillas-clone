import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Faq = () => {
  return (
    <>
    <Box  margin={"40px 0px 20px"}>
        <Heading color="#333333" fontSize={"22.5px"} fontFamily="ProximaNova"  m="1rem auto">FAQs</Heading>
         <Box color="#666666">
            <Text margin="20px 0px">
                <b color='#666666' fontFamily="ProximaNova" fontSize="15px" >Can I get a holiday home with swimming pool in Goa?</b>
            </Text>
            <Text fontFamily="ProximaNova" fontSize={"15px"} color="#666666">
            Yes. We have close to 197 holiday homes with 
            swimming pool in Goa. You can also choose a villa
             or bungalow with a swimming pool. Each vacation rental
              will have its own swimming pool policies & timings
               though. Make sure you talk to the property 
            manager or the owner when you make a reservation.
            </Text>
         </Box>
         <Box color="#666666">
            <Text margin="20px 0px">
                <b color='#666666' 
                fontFamily="ProximaNova" 
                fontSize="15px"
                 >What are the most popular destinations in Goa?</b>
            </Text>
            <Text fontFamily="ProximaNova" fontSize={"15px"} color="#666666">
            Tripvillas has around 300 of 
            vacation rentals in Goa. Some of the most popular 
            destinations are Candolim (62 vacation rentals), 
            Calangute (35 vacation rentals), Arpora 
            (32 vacation rentals), Baga (13 vacation rentals), 
            Benaulim (12 vacation rentals), Varca (11 vacation rentals)
            , Morjim (10 vacation rentals), Anjuna (9 vacation rentals),
             Colva (9 vacation rentals), Sinquerim (9 vacation rentals).
            </Text>
         </Box>
         <Box color="#666666">
            <Text margin="20px 0px">
                <b color='#666666' 
                fontFamily="ProximaNova" 
                fontSize="15px"
                 >Can I get any accommodation in Goa if I am travelling with my family or a group of friends?</b>
            </Text>
            <Text fontFamily="ProximaNova" fontSize={"15px"} color="#666666">
            You will have to choose number of bedrooms depending
             on the group size. You can go for any of the 91 Apartments,
              83 Villas. You can go for 46 1BHK,
             56 2BHKS, 46 3BHKS, 24 4BHKS, 9 5BHKS holiday homes
            </Text>
         </Box>
         <Box color="#666666">
            <Text margin="20px 0px">
                <b color='#666666' 
                fontFamily="ProximaNova" 
                fontSize="15px"
                 >What are the different types of holiday homes I can get in Goa?</b>
            </Text>
            <Text fontFamily="ProximaNova" fontSize={"15px"} color="#666666">
            Tripvillas has different types of holiday homes you can
             choose from in Goa. We have 91 Apartments,
             5 Cottages, 10 Homestays, 28 Resorts, 74 Rooms, 83 Villas
            </Text>
         </Box>
    </Box>

    </>
  )
}

export default Faq