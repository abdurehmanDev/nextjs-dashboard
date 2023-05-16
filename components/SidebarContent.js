import React from 'react'
import { useState } from 'react';
import { AccordionIcon, Avatar,Img, Box, CloseButton, Flex, HStack, VStack, Icon, useColorModeValue, Link, Drawer, DrawerContent, Text, useDisclosure } from '@chakra-ui/react';
import NavItem from './NavItem';

function SidebarContent(props) {


  
    return (
      <Box transition="3s ease" bg={useColorModeValue('#262626', 'gray.900')} color="white" borderRight={1} borderRightColor={useColorModeValue('transparent', 'gray.700')} w={{ base: 'full', md: 60 }} pos="fixed" h="full" {...props}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
         <Img src="/logo.png" w="24" h="20" alt="logo"/>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={props.onClose} />
        </Flex>
       <NavItem />
      </Box>
    );
  }

export default SidebarContent