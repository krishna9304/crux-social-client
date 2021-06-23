import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";

const arr = [
  {
    id: 1,
    name: "Sports Club",
    show: "block",
    url: "https://source.unsplash.com/WLUHO9A_xik/1440x960",
  },
  {
    id: 2,
    name: "Dance Club",
    show: "none",
    url: "https://source.unsplash.com/DNE9iZ1Kqzk/1440x960",
  },
  {
    id: 3,
    name: "Singing Club",
    show: "none",
    url: "https://source.unsplash.com/6ccJQ5qPFvY/1440x960",
  },
  {
    id: 4,
    name: "Robotics Club",
    show: "none",
    url: "https://source.unsplash.com/qTLyiHW1nIc/1440x960",
  },
  {
    id: 5,
    name: "Coding Club",
    show: "none",
    url: "https://source.unsplash.com/fxX__3GRtsg/1440x960",
  },
];

export default function PostCarousel() {
  const [value, setValue] = React.useState(1);
  const [delay, setDelay] = React.useState(5000);
  const [isliked, setliked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e) => {
    if (e.target.id === "+") {
      value === 4 ? setValue(0) : setValue(value + 1);
      arr.map((i) => {
        return (i.show = "none");
      });
      arr[value].show = "block";
    } else if (e.target.id === "-") {
      if (value - 1 === -1) {
        setValue(4);
      } else {
        setValue(value - 1);
      }
      arr.map((i) => {
        return (i.show = "none");
      });
      arr[value].show = "block";
    }
  };
  useInterval(() => {
    value === 4 ? setValue(1) : setValue(value + 1);
    arr.map((i) => {
      return (i.show = "none");
    });
    arr[value].show = "block";
  }, delay);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {arr.map((item, key) => {
          return (
            <Box
              onClick={onOpen}
              _hover={{
                cursor: "pointer",
                opacity: "1",
                backgroundBlendMode: "overlay",
              }}
              shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              backgroundColor="#222"
              backgroundImage={`url(${item.url})`}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              width="20vw"
              height="10rem"
              display={item.show}
              key={key}
              borderRadius="0"
            ></Box>
          );
        })}
      </div>
      <Button
        onClick={onOpen}
        fontWeight="light"
        color="#ffffff"
        borderRadius={0}
        bg="#AE0032"
        _hover={{
          bg: "#600008",
        }}
        w="100%"
      >
        View
      </Button>
      <Flex mt={0} height="3rem" justify="space-between" alignItems="center">
        <Button
          mb={2}
          h="2rem"
          bg="#ddd"
          w="2vw"
          borderRadius="0 2vw 2vw 0"
          _hover={{ bg: "#600008" }}
          _active={{ bg: "#fff" }}
          style={{
            fontWeight: "bold",
            color: "#ffffff",
            fontSize: "max(1.5vw , 25px)",
          }}
          onClick={handleChange}
          id="-"
        >{`<`}</Button>
        {arr.map((item) => {
          if (item.show === "block")
            return (
              <Text
                mb={2}
                fontStyle="normal"
                fontWeight="light"
                fontSize="max(1.5vw , 15px)"
                color="#AE0032"
                lineHeight="22px"
                display="flex"
                alignItems="center"
                textAlign="center"
                textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                {item.id}/{arr.length}
              </Text>
            );
        })}
        <Button
          mb={2}
          h="2rem"
          w="1vw"
          bg="#ddd"
          borderRadius="2vw 0 0 2vw"
          _hover={{ bg: "#600008" }}
          _active={{ bg: "#fff" }}
          style={{
            fontWeight: "bold",
            color: "#ffffff",
            fontSize: "max(1.5vw , 25px)",
          }}
          onClick={handleChange}
          id="+"
        >
          {`>`}
        </Button>
      </Flex>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="83vh" maxH="83vh" minW="20rem" maxW="80vw">
          <Flex flexGrow="1" h="83vh">
            <Box
              m={2}
              w="55%"
              h="auto"
              bg={`url(${"/profile.jpeg"})`}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundPosition="center"
            />

            <Flex flexDir="column" w="45%" h="83vh">
              <Flex
                fontSize={20}
                justify="center"
                align="center"
                fontWeight="light"
                color="#ffffff"
                flexDir="column"
                bg="#AE0032"
                h="10vh"
                w="100%"
              >
                Krishna Mahato
              </Flex>
              <Text h="auto" w="100%" fontSize={14} p={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
              <Flex w="100%" h="auto" justify="center" align="center">
                <Button
                  onClick={() => {
                    isliked ? setliked(false) : setliked(true);
                  }}
                  _hover={{ cursor: "pointer" }}
                  justify="center"
                  align="center"
                  w="11.6vw"
                  h="4vh"
                  border="2px solid #AE0032"
                  borderRadius="2vw"
                  shadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                  bg={isliked ? "#AE0032" : "white"}
                >
                  <Text
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize="1.5vh"
                    color={isliked ? "white" : "#AE0032"}
                    lineHeight="22px"
                    textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  >
                    {isliked ? "Liked" : "Like"}
                  </Text>
                </Button>
                <Button
                  onClick={onOpen}
                  _hover={{ cursor: "pointer" }}
                  justify="center"
                  align="center"
                  w="11.6vw"
                  h="4vh"
                  border="2px solid #AE0032"
                  borderRadius="2vw"
                  shadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                  bg="#ffffff"
                >
                  <Text
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize="1.5vh"
                    color="#AE0032"
                    lineHeight="22px"
                    textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  >
                    Comment
                  </Text>
                </Button>
                <Button
                  _hover={{ cursor: "pointer" }}
                  justify="center"
                  align="center"
                  w="11.6vw"
                  h="4vh"
                  border="2px solid #AE0032"
                  borderRadius="2vw"
                  shadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                  bg="#ffffff"
                >
                  <Text
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize="1.5vh"
                    color="#AE0032"
                    lineHeight="22px"
                    textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  >
                    Share
                  </Text>
                </Button>
              </Flex>
              <Flex mb={2} bg="blackAlpha.100" w="100%" h="100%"></Flex>
              <InputGroup mb={2}>
                <Input
                  flexWrap="wrap"
                  variant="filled"
                  placeholder="Write a message"
                />
                <InputRightElement mr={1} width="5rem">
                  <Button
                    _hover={{
                      bg: "#600008",
                    }}
                    color="#ffffff"
                    bg="#AE0032"
                    h="2rem"
                    size="sm"
                    p={2}
                  >
                    Comment
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
