import { Box, Flex, Text } from "@chakra-ui/react";
import PostCarousel from "../postcarousel";

export const StudentPosts = () => {
  return (
    <Flex flexDir="column" justify="center" align="center">
      <Box
        mt={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        borderRadius="2vw"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
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
          All Posts
        </Text>
      </Box>
      <Flex
        borderRadius="2vw"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        ml={3}
        mr={3}
        bg="#ffffff"
        w="23vw"
        h="20rem"
        justify="center"
        align="center"
        flexDir="column"
      >
        <Box
          shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          ml={3}
          mr={3}
          bg="#ffffff"
          w="20vw"
          h="15rem"
        >
          <PostCarousel />
        </Box>
      </Flex>
    </Flex>
  );
};
