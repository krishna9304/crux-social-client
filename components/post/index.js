import { Box, Circle, Text, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";

export const Post = () => {
  const [isliked, setliked] = useState(false);
  return (
    <Flex
      mt={2}
      mb={10}
      w="35vw"
      justify="center"
      align="center"
      flexDir="column"
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        textAlign="center"
        borderRadius="2vw"
        shadow="xl"
        mr={3}
        ml={3}
        bg="#AE0032"
        w="35vw"
        h="4vh"
      >
        <Circle
          shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          size="22px"
          bg={`url(${"/profile.jpeg"})`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          m={2}
        />
        <Text
          fontStyle="normal"
          fontWeight="bold"
          fontSize="1.5vh"
          color="#ffffff"
          lineHeight="22px"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        >
          Krishna Mahato
        </Text>
      </Box>
      <Box
        bg={`url(${"/profile.jpeg"})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        textAlign="center"
        borderRadius="2vw 2vw 0 0"
        shadow="xl"
        mr={3}
        ml={3}
        w="35vw"
        h="30vw"
      />
      <Flex
        shadow="xl"
        p={3}
        w="35vw"
        h="auto"
        bg="#ddd"
        borderRadius="0 0 2vw 2vw"
      >
        <Text fontSize={12}>
          <Text fontWeight="bold" as="span" fontSize={12}>
            Krishna Mahato :{" "}
          </Text>
          What you can do is use CSS selectors to find the elements you want to
          watch in this way, and then watch for mouse events. The standard
          events are mouseover and mouseout, but they can be a bit tricky to
          work with because they bubble (you get mouseout, for instance,
          whenever the mouse leaves any descendant element).
        </Text>
      </Flex>
      <Flex>
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
    </Flex>
  );
};