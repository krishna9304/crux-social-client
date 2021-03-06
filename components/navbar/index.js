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
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  PopoverCloseButton,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "../../pages";
import { MessageCard } from "../messageCards";
import { arr } from "../../pages/homepage";
import { useSelector } from "react-redux";

export const NavBar = () => {
  let globalState = useSelector((state) => state);
  let isPageWide = useMediaQuery("(max-width: 743px)");
  let [isclose, setclose] = useState(true);
  return (
    <Flex
      justifyContent="space-between"
      shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      align="center"
      w="100%"
      h="7vh"
      bg="#AE0032"
    >
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Fontdiner+Swanky&display=swap');
        </style>
      </Head>
      {isclose ? (
        <Text
          p={3}
          fontSize={isPageWide ? "30px" : "36px"}
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          color="#ffffff"
          fontFamily="Fontdiner Swanky, cursive"
          width="max-content"
        >
          {globalState.college}
        </Text>
      ) : null}
      {!isPageWide ? (
        <Flex width="50vw" justify="flex-end" align="center">
          <Input
            w="25vw"
            m={3}
            bg="#E5E5E5"
            borderRadius="30px"
            shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            placeholder="Search"
            size="sm"
          />

          <Popover isLazy>
            <PopoverTrigger>
              <Button
                _hover={{
                  bg: "none",
                }}
                bg="none"
                p={0}
              >
                <img
                  style={{
                    margin: "10px",
                    width: "1.5rem",
                  }}
                  src="/bell-3-128.png"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader fontWeight="semibold">Notifications</PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover isLazy>
            <PopoverTrigger>
              <Button
                _hover={{
                  bg: "none",
                }}
                bg="none"
                p={0}
              >
                <img
                  style={{
                    margin: "10px",
                    width: "1.5rem",
                  }}
                  src="/chat-4-256.png"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader fontWeight="semibold">Inbox</PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                {arr.map((item, index) => {
                  return (
                    <MessageCard key={index} name={item.name} url={item.url} />
                  );
                })}
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Menu>
            <MenuButton
              bg={`url(${globalState.user.profilepPic})`}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              ml={3}
              mr={3}
              shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              h="40px"
              borderRadius="50%"
              as={Button}
              _active={{
                bg: `url(${globalState.user.profilepPic})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              _hover={{
                bg: `url(${globalState.user.profilepPic})`,
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
        <Flex
          position="absolute"
          float="right"
          justify="flex-end"
          width="inherit"
        >
          {isclose ? (
            <img
              onClick={() => {
                setclose(false);
              }}
              style={{
                cursor: "pointer",
                margin: "10px",
                width: "1.5rem",
              }}
              src="/search-13-128.png"
            />
          ) : (
            <Flex w="100%" mr="5px">
              <Input
                ml={3}
                mt={1}
                bg="#E5E5E5"
                borderRadius="30px"
                shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                placeholder="Search"
                size="sm"
              />
              <img
                onClick={() => {
                  setclose(true);
                }}
                style={{
                  cursor: "pointer",
                  margin: "0.8rem",
                  width: "0.8rem",
                }}
                src="/x-mark-128.png"
              />
            </Flex>
          )}
          <Menu>
            <MenuButton
              float="right"
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
                <Link href="/">
                  <MenuItem>
                    <a>Docs</a>
                  </MenuItem>
                </Link>
                <Link href="/">
                  <MenuItem>
                    <a>FAQ</a>
                  </MenuItem>
                </Link>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      ) : null}
    </Flex>
  );
};
