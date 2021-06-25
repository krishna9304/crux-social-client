import { Box, Flex, Text } from "@chakra-ui/react";
import ClubCarousel from "../clubcarousel";
import { OnlineCard } from "../onlineCard";
import { arr } from "../../pages/homepage";
export const GridRight = () => {
  return (
    <Flex
      position="sticky"
      justify="center"
      align="center"
      flexDirection="column"
    >
      <Flex flexDir="column">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          borderRadius="2vw"
          shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          mt={3}
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
            Clubs
          </Text>
        </Box>
        <Box
          borderRadius="2vw"
          shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          ml={3}
          mr={3}
          bg="#ffffff"
          w="23vw"
          h="13rem"
        >
          <ClubCarousel />
        </Box>
      </Flex>
      <Flex flexDir="column">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          borderRadius="2vw"
          shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          mt={4}
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
            Online Members
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
          p={3}
          bg="#ffffff"
          w="23vw"
          h="50vh"
        >
          {arr.map((item, index) => {
            return <OnlineCard key={index} url={item.url} name={item.name} />;
          })}
          {arr.map((item, index) => {
            return <OnlineCard key={index} url={item.url} name={item.name} />;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
