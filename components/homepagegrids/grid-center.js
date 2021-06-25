import Head from "next/head";
import Link from "next/link";
import { Box, Flex, Text, Button, Textarea } from "@chakra-ui/react";
import { Post } from "../post";
import { arr } from "../../pages/homepage";
export const GridCenter = () => {
  return (
    <Flex justify="center" align="center" flexDirection="column">
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        textAlign="center"
        borderRadius="2vw"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        mt={3}
        mr={3}
        ml={3}
        bg="#AE0032"
        w="48vw"
        h="4vh"
      >
        <Text
          ml={3}
          mb={1}
          mr={2}
          fontStyle="normal"
          fontWeight="light"
          fontSize="4vh"
          color="#ffffff"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        >
          +
        </Text>
        <Text
          fontStyle="normal"
          fontWeight="bold"
          fontSize="1.5vh"
          color="#ffffff"
          lineHeight="22px"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        >
          Create Post
        </Text>
      </Box>
      <Flex
        align="center"
        justify="center"
        flexDirection="column"
        borderRadius="2vw"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        bg="#ffffff"
        w="48vw"
        minH="9rem"
      >
        <Textarea
          bg="#E5E5E5"
          mt={3}
          ml={5}
          mr={5}
          w="45vw"
          minHeight="5rem"
          fontSize={12}
          placeholder="Write a post..."
        />
        <Flex width="48vw" justify="space-between">
          <Flex>
            <Button
              display="flex"
              _hover={{ bg: "#600008" }}
              _active={{ bg: "#fff" }}
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              borderRadius="2vw"
              shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              mt={2}
              mr={1}
              ml={5}
              mb={1}
              bg="#AE0032"
              w="8vh"
              h="30px"
            >
              {" "}
              <img width="20px" src="/photo-128.png" />{" "}
            </Button>
            <Button
              display="flex"
              _hover={{ bg: "#600008" }}
              _active={{ bg: "#fff" }}
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              borderRadius="2vw"
              shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              mt={2}
              mr={3}
              ml={1}
              mb={1}
              bg="#AE0032"
              w="8vh"
              h="30px"
            >
              <img width="20px" src="/video-call-128.png" />
            </Button>
          </Flex>
          <Button
            display="flex"
            _hover={{ bg: "#600008" }}
            _active={{ bg: "#fff" }}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            borderRadius="2vw"
            shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            mt={2}
            mr={5}
            ml={1}
            mb={1}
            bg="#AE0032"
            w="8vh"
            h="30px"
          >
            {" "}
            <Text fontSize="1.5vh" color="#ffffff" fontWeight="bold">
              Post
            </Text>{" "}
          </Button>
        </Flex>
      </Flex>
      <Flex
        p={4}
        mt={4}
        align="center"
        justify="flex-start"
        flexDirection="column"
        borderRadius="2vw 2vw 0 0"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        bg="#ffffff"
        w="48vw"
        h="auto"
        minHeight="67vh"
      >
        <Post />
        <Post />
        <Post />
        <Post />
      </Flex>
    </Flex>
  );
};
