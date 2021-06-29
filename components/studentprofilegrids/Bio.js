import Head from "next/head";
import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";
export const Bio = ({ bio }) => {
  return (
    <Flex justify="center" align="center" flexDirection="column">
      <Flex
        p={7}
        pt={0}
        mt={4}
        align="center"
        justify="flex-start"
        flexDirection="column"
        borderRadius="2vw 2vw 0 0"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        bg="#AE0032"
        w="48vw"
        h="auto"
        minHeight="52.2vh"
      >
        <Flex m={4} mt={6} w="100%" h="1vh" align="center" justify="center">
          <Text
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            fontWeight="bold"
            color="#ffffff"
            fontSize={22}
          >
            About Me
          </Text>
        </Flex>
        <Text color="#ffffff" fontSize={14}>
          {bio}
        </Text>
      </Flex>
    </Flex>
  );
};
