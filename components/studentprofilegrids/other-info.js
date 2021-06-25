import { Box, Flex, Circle, Text, Divider } from "@chakra-ui/react";
export const OtherInfo = () => {
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
          Other Info
        </Text>
      </Box>
      <Flex
        borderRadius="2vw"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        mr={3}
        ml={2}
        bg="#ffffff"
        w="23vw"
        h="20rem"
        justify="flex-start"
        align="center"
        flexDir="column"
        p={5}
      >
        <Flex align="center" w="100%" flexDir="column">
          <Text
            fontStyle="normal"
            fontWeight="bold"
            fontSize="2vh"
            color="#ae0032"
            lineHeight="22px"
            display="flex"
            alignItems="center"
            textAlign="center"
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            Clubs :
          </Text>
          <Flex
            justifyContent="center"
            align="center"
            flexWrap="wrap"
            justify="flex-start"
          >
            <Circle
              shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              m={1}
              ml={0}
              size="35px"
              bg="#AE0032"
            />
            <Circle
              shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              m={1}
              ml={0}
              size="35px"
              bg="#AE0032"
            />
            <Circle
              shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              m={1}
              ml={0}
              size="35px"
              bg="#AE0032"
            />
            <Circle
              shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              m={1}
              ml={0}
              size="35px"
              bg="#AE0032"
            />
          </Flex>
        </Flex>
        <Divider m={3} />
        <Flex align="center" w="100%" flexDir="column">
          <Text
            fontStyle="normal"
            fontWeight="bold"
            fontSize="2vh"
            color="#ae0032"
            lineHeight="22px"
            display="flex"
            alignItems="center"
            textAlign="center"
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            Social Links :
          </Text>
          <Flex
            justifyContent="center"
            align="center"
            flexWrap="wrap"
            justify="flex-start"
          >
            <Circle
              shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              m={1}
              ml={0}
              size="35px"
              bg="#AE0032"
            />
            <Circle
              shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              m={1}
              ml={0}
              size="35px"
              bg="#AE0032"
            />
            <Circle
              shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              m={1}
              ml={0}
              size="35px"
              bg="#AE0032"
            />
            <Circle
              shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              m={1}
              ml={0}
              size="35px"
              bg="#AE0032"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
