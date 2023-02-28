import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
     <VStack background="white" rounded="10px" spacing={1}>
              
      <Image src={imageSrc} objectFit="cover" rounded="10px" />
      <Box>
        <Heading fontSize="xl" color="black" paddingLeft="4" marginTop="2">
          {title}
        </Heading>
        <Text marginTop="1" color="gray.500" padding="4">
          {description}
        </Text>
        <Text
          fontWeight="semibold"
          color="black"
          padding="4px"
          marginBottom="1"
          paddingLeft="4"
        >
          See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </Box>
    </VStack>
  );
};

export default Card;
