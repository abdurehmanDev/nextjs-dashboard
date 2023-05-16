import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Flex,
  Heading,
  Container,
  Text,
  Box,
  Icon,
  SimpleGrid,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Button,
  Img,
} from "@chakra-ui/react";
import { FiPlusCircle, FiFilter } from "react-icons/fi";

function AllDealsAvailable() {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const [data, setData] = useState([
    {
      id: 0,
      dealName: "Yeilding Investments",
      dealHeading: "Future Generali",
      dealContain:
        "This answer allows you to specify one single side. And would work in IE8+ - unlike using box-shadow. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "Test",
      dealExit: "2024",
    },
    {
      id: 1,
      dealName: "Real Estate Investments",
      dealHeading: "BMC Addon",
      dealContain: "This answer allows you to specify one single side.",
      dealReturn: "12.04% IRR",
      dealExit: "2022",
    },
    {
      id: 2,
      dealName: "Yeilding Investments",
      dealHeading: "Future Generali",
      dealContain:
        "This answer allows you to specify one single side. And would work in IE8+ - unlike using box-shadow. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "Test",
      dealExit: "2024",
    },
    {
      id: 3,
      dealName: "Equities",
      dealHeading: "Project Vertigo",
      dealContain:
        "This answer allows you to specify one single side. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "8.09% IRR",
      dealExit: "2026",
    },
    {
      id: 4,
      dealName: "Yeilding Investments",
      dealHeading: "Future Generali",
      dealContain:
        "This answer allows you to specify one single side. And would work in IE8+ - unlike using box-shadow. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "Test",
      dealExit: "2024",
    },
    {
      id: 5,
      dealName: "Real Estate Investments",
      dealHeading: "BMC Addon",
      dealContain:
        "This answer allows you to specify one single side. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "12.45% IRR",
      dealExit: "2028",
    },
    {
      id: 6,
      dealName: "Equities",
      dealHeading: "Project Vertigo",
      dealContain: "This answer allows you to specify one single side.",
      dealReturn: "11.4% IRR",
      dealExit: "2021",
    },
    {
      id: 7,
      dealName: "Private Equity Investments",
      dealHeading: "Upfield",
      dealContain:
        "This answer allows you to specify one single side. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "40.4% IRR",
      dealExit: "2026",
    },
    {
      id: 8,
      dealName: "Private Equity Investments",
      dealHeading: "Upfield",
      dealContain:
        "This answer allows you to specify one single side. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "21.20% IRR",
      dealExit: "2025",
    },
  ]);

  const [tempData, setTempData] = useState([
    {
      id: 0,
      dealName: "Yeilding Investments",
      dealHeading: "Future Generali",
      dealContain:
        "This answer allows you to specify one single side. And would work in IE8+ - unlike using box-shadow. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "Test",
      dealExit: "2024",
    },
    {
      id: 1,
      dealName: "Real Estate Investments",
      dealHeading: "BMC Addon",
      dealContain: "This answer allows you to specify one single side.",
      dealReturn: "12.04% IRR",
      dealExit: "2022",
    },
    {
      id: 2,
      dealName: "Yeilding Investments",
      dealHeading: "Future Generali",
      dealContain:
        "This answer allows you to specify one single side. And would work in IE8+ - unlike using box-shadow. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "Test",
      dealExit: "2024",
    },
    {
      id: 3,
      dealName: "Equities",
      dealHeading: "Project Vertigo",
      dealContain:
        "This answer allows you to specify one single side. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "8.09% IRR",
      dealExit: "2026",
    },
    {
      id: 4,
      dealName: "Yeilding Investments",
      dealHeading: "Future Generali",
      dealContain:
        "This answer allows you to specify one single side. And would work in IE8+ - unlike using box-shadow. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "Test",
      dealExit: "2024",
    },
    {
      id: 5,
      dealName: "Real Estate Investments",
      dealHeading: "BMC Addon",
      dealContain:
        "This answer allows you to specify one single side. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "12.45% IRR",
      dealExit: "2028",
    },
    {
      id: 6,
      dealName: "Equities",
      dealHeading: "Project Vertigo",
      dealContain: "This answer allows you to specify one single side.",
      dealReturn: "11.4% IRR",
      dealExit: "2021",
    },
    {
      id: 7,
      dealName: "Private Equity Investments",
      dealHeading: "Upfield",
      dealContain:
        "This answer allows you to specify one single side. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "40.4% IRR",
      dealExit: "2026",
    },
    {
      id: 8,
      dealName: "Private Equity Investments",
      dealHeading: "Upfield",
      dealContain:
        "This answer allows you to specify one single side. Of course change your pseudo elements properties as you need to single out a specific side.",
      dealReturn: "21.20% IRR",
      dealExit: "2025",
    },
  ]);

  const headingTitle = [
    "Deals from all classes",
    "Equities",
    "Real Estate Investments",
    "Private Equity Investments",
    "Yeilding Investments",
  ];

  const filterByName = (dealName, id) => {
    if (selectedButtonIndex !== id) {
      setSelectedButtonIndex(id);
    } else {
      setSelectedButtonIndex(id);
    }

    if (dealName === "Deals from all classes") {
      return setTempData(data);
    } else {
      const filterResult = data.filter((item) => item.dealName === dealName);
      return setTempData(filterResult);
    }
  };

  return (
    <>
      <Flex justifyContent="space-between">
        <Box>
          <Heading fontSize="xl" color="white" as="h1">
            Marketplace
          </Heading>
          <Text color="#c5c9ce">
            You can discover here all the deals available on marketplace.
          </Text>
        </Box>
        <Button bg="#d09830" _hover={{ bg: "#151615", color: "#d09830" }}>
          <Icon as={FiPlusCircle} />
          <Text pl={2}>Sell</Text>
        </Button>
      </Flex>
      <Flex flexWrap="wrap" justifyContent="space-between" paddingBlock={5}>
        <Flex flexWrap="wrap">
          {headingTitle.map((item, id) => (
            <Text
              fontSize="sm"
              border="1px solid white"
              m="1"
              p="1"
              borderRadius="full"
              color={selectedButtonIndex === id ? "black" : "white"}
              bg={selectedButtonIndex === id ? "white" : null}
              key={id}
              cursor="pointer"
              onClick={() => filterByName(item, id)}
              _hover={{ textDecoration: "underline" }}
            >
              {item}
            </Text>
          ))}
        </Flex>
        <Flex color="#d09830" alignItems="center" cursor="pointer">
          <Icon as={FiFilter} fill="#d09830" />
          <Text pl={5} _hover={{ textDecoration: "underline" }}>
            Sort & Filter
          </Text>
        </Flex>
      </Flex>

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        boxSizing="border-box"
      >
        {tempData.map((item) => (
          <Card bgImage="/bg-image.png" key={item.id}>
            <CardHeader>
  
                <Box w="max">
                  <Img
                    src="/Nike-Logo.png"
                    alt="logo"
                    w="10"
                    h="6"
                    border="1px solid"
                    borderRadius="full"
                    p="1"
                    background="#d4d4f6"
                  />
                  <Text
                    fontSize="sm"
                    border="1px solid #21cf21"
                    my={2}
                    p={1}
                    borderRadius="full"
                    color="white"
                  >
                    {item.dealName}
                  </Text>
                </Box>

            </CardHeader>
            <CardBody>
              <Heading as="h4" fontSize="3xl" fontWeight="500" color="white">
                {item.dealHeading}
              </Heading>
              <Text color="#c5c9ce">{item.dealContain}</Text>
            </CardBody>
            <Flex>
              <Box p="4" bg="#121111" border="1px solid #292828" w="full">
                <Text as="span" color="#c5c9ce">Expected Return</Text>
                <Text color="white"> {item.dealReturn}</Text>
              </Box>
              <Box p="4" bg="#121111" border="1px solid #292828" w="full">
                <Text as="span" color="#c5c9ce">Expected Exit</Text>
                <Text color="white"> {item.dealExit}</Text>
              </Box>
            </Flex>
            <CardFooter>
              <Button
                w="full"
                background="none"
                border="1px solid #d09830"
                color="#d09830"
                borderRadius={0}
                _hover={{
                  background: "#d0983036",
                }}
              >
                View details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

export default AllDealsAvailable;
