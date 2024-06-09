import {
  Avatar,
  Flex,
  IconButton,
  Stack,
  HStack,
  Container,
  VStack
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { Input, Button } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Show,
  Hide,
  Box,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navTitle = {
    color: "white",
    padding: "6px",
    fontFamily: "sans sarfi",
    fontSize: "22px",
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Show above="md">
        <Flex
          w="100vw"
          h="75px"
          bg="brand.700"
          justify="space-between"
          align="center"
          px={4}
        >
          <Container maxW="container-fluid" m="auto">
            <Stack alignItems="center" w="100%" flexDirection="row" >
              <VStack w="90%" >
                <nav className="navbar">
                  <Link className="navbar-brand" to="/" style={navTitle}>
                    Home
                  </Link>
                  <Link className="navbar-brand" to="/post" style={navTitle}>
                    PostPage
                  </Link>
                  <Link className="navbar-brand" to="/post1" style={navTitle}>
                    PostPage1
                  </Link>
                  <Link className="navbar-brand" to="/post2" style={navTitle}>
                    PostPage2
                  </Link>
                  <Link className="navbar-brand" to="/Cart" style={navTitle}>
                    CartPage
                  </Link>
                  <Link className="navbar-brand" to="/gallery" style={navTitle}>
                    PostGallery
                  </Link>
                  <Link
                    className="navbar-brand"
                    to="/galleryOne"
                    style={navTitle}
                  >
                    ImageGalleryOne
                  </Link>
                  <Link
                    className="navbar-brand"
                    to="/galleryTwo"
                    style={navTitle}
                  >
                    ImageGalleryTwo
                  </Link>
                  <Link
                    className="navbar-brand"
                    to="/galleryThree"
                    style={navTitle}
                  >
                    ImageGalleryThree
                  </Link>
                </nav>
              </VStack>
              <VStack w="10%">
                <Menu>
                  <MenuButton>
                    <Avatar
                      src="/Aizaz-Avtar.webp"
                      alt="post image"
                      size="sm"
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem justify="space-between">
                      <Avatar
                        src="/Aizaz-Avtar.webp"
                        alt="post image"
                        size="sm"
                      />
                      <Text ml="8px">Profile</Text>
                    </MenuItem>
                    <MenuItem>
                      <Avatar
                        src="/Aizaz-Avtar.webp"
                        alt="post image"
                        size="sm"
                      />
                      <Text ml="8px">Junaid</Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </VStack>
            </Stack>
          </Container>
        </Flex>
      </Show>

      <Show below="md">
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Flex
          h="75px"
          bg="brand.700"
          justify="space-between"
          align="center"
          px={4}
        >
          <IconButton
            onClick={onOpen}
            ref={btnRef}
            variant="ghost"
            fontSize="3xl"
            color="white"
            _hover={{ bg: "main.400" }}
          >
            <FaBars />
          </IconButton>
          <Menu>
            <MenuButton>
              <Avatar src="/Aizaz-Avtar.webp" alt="post image" size="sm" />
            </MenuButton>
            <MenuList>
              <MenuItem justify="space-between">
                <Avatar src="/Aizaz-Avtar.webp" alt="post image" size="sm" />
                <Text ml="8px">Profile</Text>
              </MenuItem>
              <MenuItem>
                <Avatar src="/Aizaz-Avtar.webp" alt="post image" size="sm" />
                <Text ml="8px">Junaid</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Show>
    </>
  );
};

export default NavBar;
