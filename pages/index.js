import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Indicator from "../components/Indicator";
import CompoPercent1 from "@/components/CompoPercent1";
import { Inter } from "next/font/google";
import {
  Flex,
  Heading,
  Container,
  Text,
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import Footer from "@/components/Footer";
import CompoPercent2 from "@/components/CompoPercent2";
import CompoPercent3 from "@/components/CompoPercent3";
import MobileNav from "@/components/MobileNav";
import SidebarContent from "@/components/SidebarContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [indicateNum, setIndicateNum] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perVal, setPerVal] = useState("50%");
  const [enableNext, setEnableNext] = useState(true);
  const [indicate, setIndicate] = useState([
    {
      id: 0,
      number: 1,
      active: true,
    },
    {
      id: 1,
      number: 2,
      active: false,
    },
    {
      id: 2,
      number: 3,
      active: false,
    },
  ]);

  const [percentArr, setPercentArr] = useState([
    { id: 1, val: "25%", active: false },
    { id: 2, val: "50%", active: false },
    { id: 3, val: "75%", active: false },
    { id: 4, val: "100%", active: false },
  ]);

  const [percentArr2, setPercentArr2] = useState([
    { id: 1, val: "20%", active: false },
    { id: 2, val: "40%", active: false },
    { id: 3, val: "80%", active: false },
    { id: 4, val: "100%", active: false },
  ]);

  const [percentArr3, setPercentArr3] = useState([
    { id: 1, val: "30%", active: false },
    { id: 2, val: "60%", active: false },
    { id: 3, val: "90%", active: false },
    { id: 4, val: "100%", active: false },
  ]);

  const slideComponent = [
    {
      id: 1,
      component: (
        <CompoPercent1
          perVal={perVal}
          percentArr={percentArr}
          setPerVal={setPerVal}
          setPercentArr={setPercentArr}
          setEnableNext={setEnableNext}
        />
      ),
      contain: "You have 2000 shares available to sell for this deal 1.",
    },
    {
      id: 2,
      component: (
        <CompoPercent2
          percentArr2={percentArr2}
          setPercentArr2={setPercentArr2}
          setEnableNext={setEnableNext}
        />
      ),
      contain: "We have 40000 shares available to sell for this deal 2.",
    },
    {
      id: 3,
      component: (
        <CompoPercent3
          percentArr3={percentArr3}
          setPercentArr3={setPercentArr3}
          setEnableNext={setEnableNext}
        />
      ),
      contain: "I have 3000 shares available to sell for this deal 3.",
    },
  ];

  const handleIndicateClick = (index) => {
    const updatedArr = indicate.map((item) => {
      if (item.id <= currentSlide + 1 && currentSlide !== indicate.length - 1) {
        {
          return { ...item, active: true };
        }
      } else if (currentSlide === indicate.length - 1 && item.id === 0) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setIndicate(updatedArr);
  };

  const handlePrev = () => {
    setCurrentSlide(
      currentSlide === 0 ? slideComponent.length - 1 : currentSlide - 1
    );
  };

  const handleNext = (index) => {
    setCurrentSlide(
      currentSlide === slideComponent.length - 1 ? 0 : currentSlide + 1
    );
    handleIndicateClick(index);
  };

  return (
    <>
      <Box minH="100vh" bg={useColorModeValue("#080808c2", "gray.900")}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }}>
          <Flex
            color="white"
            bg="#111211"
            h="80vh"
            flexDirection={{ base: "column", md: "row" }}
             px={{base: 4, sm: 8, md: 32}}
             py={{ base: 16, md: 32}}
          >
            <Box
              flex="1"
              pr={{base: 0,sm: 16 , md: 24}}
              pb= {{base: 6, md:0}}
            >
              <Box>
                <Heading
                  as="h1"
                  size="lg"
                  fontWeight="500"
                  color="#efebeb"
                >
                  Sell shares
                </Heading>
                <Text color="#c0bebe" pt={2}>
                  Please select the percentage at which you would like to sell
                  the shares.
                </Text>
                <Indicator
                  indicate={indicate}
                  indicateNum={indicateNum}
                  currentSlide={currentSlide}
                />
              </Box>
            </Box>
            <Box
              flex="1"
              borderLeft={{ base: "none", sm: "none", md: "2px solid #5c5a5a" }}
              borderTop={{
                base: "2px solid #5c5a5a",
                sm: "2px solid #5c5a5a",
                md: "none",
              }}
            >
              <Container
                pl={{base: 0, sm: 16, md: 24}}
                pt={{ base: 4, md: 0 }}
                m={0}
              >
                <Heading
                  as="h6"
                  fontSize="lg"
                  fontWeight="500"
                  color="#c0bebe"
                  pb={6}
                >
                  Select percentage
                </Heading>
                <Grid
                  templateRows="repeat(2, 1fr)"
                  templateColumns="repeat(4, 1fr)"
                  gap={4}
                >
                  {slideComponent[currentSlide].component}
                  <GridItem rowSpan={4} colSpan={4}>
                    <Text fontWeight={["600", "600", "600", "700"]}>
                      {slideComponent[currentSlide].contain}
                    </Text>
                  </GridItem>
                </Grid>
              </Container>
            </Box>
          </Flex>
          <Footer
            handlePrev={handlePrev}
            handleNext={handleNext}
            enableNext={enableNext}
          />
        </Box>
      </Box>
     
    </>
  );
}
