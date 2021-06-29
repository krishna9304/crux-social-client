import Link from "next/link";
import { Box, Flex, Text, Circle } from "@chakra-ui/react";
import { ClassmateCard } from "../classmatecard";
import { arr } from "../../pages/homepage";
import { useSelector } from "react-redux";

export const GridLeft = () => {
  let globalState = useSelector((state) => state);
  return (
    <Flex
      position="sticky"
      justify="center"
      align="center"
      flexDirection="column"
    >
      <Flex
        justifyContent="flex-start"
        alignItems="center"
        borderRadius="2vw"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        m={3}
        bg="#ffffff"
        w="23vw"
        h="10vw"
      >
        <Flex
          m={3}
          mr={1}
          justifyContent="center"
          alignItems="center"
          w="7vw"
          h="10vw"
        >
          <Circle
            shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            size="6.5vw"
            bg={`url(${globalState.user.profilepPic})`}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          />
        </Flex>
        <Flex mr={2} flexDir="column" justify="center">
          <Text
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            fontWeight="bold"
            color="#AE0032"
            fontSize="max(1.1vw , 10px)"
          >
            {globalState.user.name}
          </Text>
          <Link href="/">
            <a
              style={{
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontWeight: "bold",
                fontSize: "max(1.1vw , 10px)",
              }}
            >
              <Text
                _hover={{
                  color: "#600008",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                View Profile
              </Text>
            </a>
          </Link>
        </Flex>
      </Flex>
      <Flex flexDir="column">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          borderRadius="2vw"
          shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          mt={1}
          mr={3}
          ml={3}
          bg="#AE0032"
          w="23vw"
          h="4vh"
        >
          <Text
            fontStyle="normal"
            fontWeight="bold"
            fontSize="1.5vh"
            color="#ffffff"
            lineHeight="22px"
            display="flex"
            alignItems="center"
            textAlign="center"
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            Classmates
          </Text>
        </Box>
        <Flex
          overflowY="scroll"
          flexDir="column"
          justify="flex-start"
          align="center"
          borderRadius="2vw"
          shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          ml={3}
          mr={3}
          p={2}
          bg="#ffffff"
          w="23vw"
          h="65vh"
        >
          {globalState.classmates.map((item, index) => {
            return (
              <ClassmateCard
                key={index}
                id={item._id}
                url={item.profilepPic}
                name={item.name}
              />
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
