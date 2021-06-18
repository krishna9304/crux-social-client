import {
  Flex,
  Text,
  Input,
  Circle,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Box,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "../../pages";

export const NavBar = () => {
  let isPageWide = useMediaQuery("(max-width: 743px)");
  return (
    <Flex
      justifyContent="space-between"
      shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      align="center"
      w="100%"
      h="60px"
      bg="#AE0032"
    >
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Fontdiner+Swanky&display=swap');
        </style>
      </Head>
      <Text
        p={3}
        fontSize={isPageWide ? "30px" : "36px"}
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        color="#ffffff"
        fontFamily="Fontdiner Swanky, cursive"
      >
        COLLEGE NAME
      </Text>
      {!isPageWide ? (
        <Flex width="50vh" justify="space-between" align="center">
          <Input
            maxWidth="15rem"
            m={3}
            bg="#E5E5E5"
            borderRadius="30px"
            shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            placeholder="Search"
            size="sm"
          />
          <img
            style={{
              margin: "10px",
              width: "1.5rem",
            }}
            src="/bell-3-128.png"
          />
          <img
            style={{
              margin: "10px",
              width: "1.5rem",
            }}
            src="/chat-4-256.png"
          />
          <Menu>
            <MenuButton
              bg={`url(${"/profile.jpeg"})`}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              ml={3}
              mr={3}
              shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              h="40px"
              borderRadius="50%"
              as={Button}
              _active={{
                bg: `url(${"/profile.jpeg"})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              _hover={{
                bg: `url(${"/profile.jpeg"})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>
                  <Link href="/">
                    <a>Docs</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>FAQ</a>
                  </Link>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      ) : null}
      {isPageWide ? (
        <Menu>
          <MenuButton
            bg={`url(${"/profile.jpeg"})`}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            ml={3}
            mr={3}
            shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            h="40px"
            borderRadius="50%"
            as={Button}
            _active={{
              bg: `url(${"/profile.jpeg"})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            _hover={{
              bg: `url(${"/profile.jpeg"})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></MenuButton>
          <MenuList>
            <MenuGroup title="Options">
              <Flex>
                <img
                  style={{
                    margin: "10px",
                    width: "1.5rem",
                    filter:
                      "invert() drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                  src="/bell-3-128.png"
                />
                <img
                  style={{
                    margin: "10px",
                    width: "1.5rem",
                    filter:
                      "invert() drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                  src="/chat-4-256.png"
                />
              </Flex>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>
                <Link href="/">
                  <a>Docs</a>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/">
                  <a>FAQ</a>
                </Link>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      ) : null}
    </Flex>
  );
};
