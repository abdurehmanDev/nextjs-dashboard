import React from "react";
import { useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { BsTranslate } from "react-icons/bs";

function MobileNav(props) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      alignItems="center"
      bg={useColorModeValue("#151615", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("#3a3b3a", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      color="#c1a260"
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={props.onOpen}
        background="black"
        borderColor="gray"
        variant="outline"
        aria-label="open menu"
        _active={{ background:"black" }}
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: "0", md: "6" }}>
        <Text _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          عربي
        </Text>
        <IconButton
          size="lg"
          background="#151615"
          _hover={{ background: "#262626" }}
          icon={<BsTranslate />}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          _hover={{ background: "#262626" }}
          icon={<FiBell />}
        />

        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Text fontSize="sm">Client ID #37002</Text>

                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("#151615", "gray.900")}
              borderColor={useColorModeValue("#3a3b3a", "gray.700")}
            >
              <MenuItem
                bg={useColorModeValue("#151615", "gray.900")}
                _hover={{ textDecoration: "underline" }}
              >
                Profile
              </MenuItem>
              <MenuItem
                bg={useColorModeValue("#151615", "gray.900")}
                _hover={{ textDecoration: "underline" }}
              >
                Settings
              </MenuItem>
              <MenuItem
                bg={useColorModeValue("#151615", "gray.900")}
                _hover={{ textDecoration: "underline" }}
              >
                Billing
              </MenuItem>
              <MenuDivider />
              <MenuItem
                bg={useColorModeValue("#151615", "gray.900")}
                _hover={{ textDecoration: "underline" }}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
}

export default MobileNav;
