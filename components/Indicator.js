import React from "react";
import { Text, Center, Stack } from "@chakra-ui/react";

function Indicator(props) {

  return (
    <>
      <Text color="#c0bebe" py="4">
        {props.currentSlide+1} of{" "}
        {props.indicate[props.indicate.length - 1].number}
      </Text>
      <Stack direction="row" w="full">
        {props.indicate.map((item, i) => (
          <Center
            border={item.active ? "2px solid #efebeb" : "2px solid #858282"}
            w="full"
            borderRadius="full"
            key={i}
          ></Center>
        ))}
      </Stack>
    </>
  );
}

export default Indicator;
