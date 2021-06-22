import {
  Box,
  Circle,
  Text,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  InputGroup,
  InputRightElement,
  Input,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";

export const Post = () => {
  const [isliked, setliked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        borderRadius="1vw 1vw 0 0"
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
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="35rem" maxH="35rem" minW="25rem" maxW="35vw">
          <ModalHeader>Comments</ModalHeader>
          <Divider />
          <ModalBody></ModalBody>
          <ModalFooter>
            <InputGroup>
              <Input variant="filled" placeholder="Write a message" />
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
