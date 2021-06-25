import { Box, Flex, Text } from "@chakra-ui/react";
import { arr } from "../../pages/homepage";
import { MemberCard } from "../membercard";
const Clubmembers = () => {
  return (
    <Flex flexDir="column" justify="center" align="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        borderRadius="2vw"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        mt={3}
        mr={3}
        ml={2}
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
          Club Members
        </Text>
      </Box>
      <Flex
        borderRadius="2vw"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        bg="#ffffff"
        w="23vw"
        h="22rem"
        justify="flex-start"
        align="center"
        flexDir="column"
        p={4}
        overflowY="scroll"
        overflowX="hidden"
      >
        {arr.map((item) => {
          return <MemberCard name={item.name} url={item.url} />;
        })}
        {arr.map((item) => {
          return <MemberCard name={item.name} url={item.url} />;
        })}
      </Flex>
    </Flex>
  );
};

export default Clubmembers;
