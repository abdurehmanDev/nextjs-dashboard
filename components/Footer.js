import React from 'react'
import {
  Flex,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";

function Footer(props) {
  return (
    <Flex
    justifyContent="flex-end"
    alignItems="center"
    background="#4a4747"
    h="14vh"
    flexDirection={{ base: "column", sm: "column", md: "row" }}
  >
    <Flex>
      <Text color="#c0bebe">Estimated total sale:</Text>
      <Text color="white" fontWeight="600">
        &nbsp;$10,000.00
      </Text>
    </Flex>
    <Box>
      <Button
        _hover={{
          color: "white",
          backgroundColor: "#d09830",
        }}
        variant="outline"
        color="#d09830"
        border="2px solid #d09830"
        py={4}
        px={{base: 16, md: 8}}
        borderRadius={0}
        m={2}
        onClick={props.handlePrev}
      >
        Back
      </Button>
      <Button
        _hover={{
          color: "white",
        }}
        variant="solid"
        color="black"
        bg="#d09830"
        py={4}
        px={{base: 16, md: 8}}
        borderRadius={0}
        mr={{base: 0, sm: 8, md: 20}}
         isDisabled={props.enableNext}
        onClick={props.handleNext}
      >
        Next
      </Button>
    </Box>
  </Flex>
  )
}

export default Footer