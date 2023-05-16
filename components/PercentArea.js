import React from "react";
import { Text, Box, GridItem } from "@chakra-ui/react";
function PercentArea(props) {
  return (
    <GridItem rowSpan={3} colSpan={4}>
      <Box bg="#242323" w="full" p={4} color="white" textAlign="center">
        <Text as="span" fontSize="5xl" fontWeight={{ base: 600, md: 500 }}>
          {props.perVal}
        </Text>
        <Text fontWeight="700">1000 shares for this listing</Text>
      </Box>
    </GridItem>
  );
}

export default PercentArea;
