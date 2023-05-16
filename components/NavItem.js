import React, { useState } from "react";
import {
  Flex,
  Icon,
  Link,
  Text,
  AccordionButton,
  Accordion,
  AccordionItem,
  AccordionIcon,
  Box,
  AccordionPanel,
} from "@chakra-ui/react";
import { FiHome, FiBarChart, FiSunrise, FiUsers, FiShoppingBag, FiFile, FiChevronDown } from 'react-icons/fi';
import NextLink from "next/link";

function NavItem() {
  
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [activeButtonIndexSubPart, setActiveButtonIndexSubPart] = useState(null);

  const LinkItems = [
    { name: "Dashboard", icon: FiHome, link: "/" },
    {
      name: "My Portfolio",
      icon: FiBarChart,
      accordionIcon: AccordionIcon,
      link: "#",
    },
    {
      name: "Insights",
      icon: FiSunrise,
      accordionIcon: AccordionIcon,
      link: "#",
    },
    {
      name: "Opportunities",
      icon: FiUsers,
      accordionIcon: AccordionIcon,
      link: "#",
      subPart: [
        {
          name: "Fill the form",
          link: "/Form"
        }
      ]
    },
    {
      name: "Marketplace",
      icon: FiShoppingBag,
      accordionIcon: AccordionIcon,
      link: "#",
      subPart: [
        {
          name:
        "All deals available",
      link: "/Marketplace"},
        {
          name: "My Listed deals",
          link: "#"
      },
        { name: "My watchlist",
        link: "#"
      },
        {
          name: "Your Activity",
          link: "#"},
      ],
    },
    { name: "My Documents", icon: FiFile, link: "Mydocuments" },
  ];

  const toggleButtonState = (index) => {
    setActiveButtonIndex(activeButtonIndex === index ? null : index);
    setActiveButtonIndexSubPart(activeButtonIndexSubPart === index ? null : index);
  };

  const toggleButtonStateSubPart = (index) => {
    setActiveButtonIndexSubPart(activeButtonIndexSubPart === index ? null : index);
  };

  return (
    <Accordion m={2} allowToggle>
      {LinkItems.map((link, id) => (
        <AccordionItem key={id} listStyleType="none" border="none">
          <AccordionButton p={0} _hover={{ bg: "#1c1c1c" }} bg={activeButtonIndex === id ? '#1c1c1c' : null} onClick={() =>  link.accordionIcon?  toggleButtonState(id) : null}>
            <Link as={NextLink} href={link.link}>
              <Text
                p="4"
                mx="4"
                role="group"
                cursor="pointer"
                justifyItems="flex-start"
                m="0"
                as="li"
               >
                {link.icon && (
                  <Icon
                    mr="4"
                    fontSize="16"
                    _groupHover={{ color: "white" }}
                    as={link.icon}
                  />
                )}
                {link.name}
              </Text>
            </Link>
            {link.accordionIcon && (
              <link.accordionIcon position="absolute" right="8" />
            )}
          </AccordionButton>
          <AccordionPanel p="0">
            {link.subPart &&
              link.subPart.map((item, id) => (
                <Link as={NextLink} href={item.link} key={id}>
                  <Text
                    as="li"
                    py={2}
                    pl={16}
                    fontSize="sm"
                    mt={2}
                    _hover={{ bg: "#1c1c1c", color: "white" }}
                    bg={activeButtonIndexSubPart === id ? '#1c1c1c' : null}
                    onClick={() => toggleButtonStateSubPart(id)}
                  >
                    {item.name}
                  </Text>
                </Link>))}
          </AccordionPanel>
        </AccordionItem>))}
    </Accordion>
  );
}

export default NavItem;
