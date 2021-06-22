import {
  Flex,
  Circle,
  Text,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  Modal,
  DrawerOverlay,
  Input,
  Button,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { useMediaQuery } from "../../pages";

export const OnlineCard = (props) => {
  let isPageWide = useMediaQuery("(max-width: 751px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      className="main-container"
      _hover={{
        cursor: "pointer",
        bg: "#ddd",
        color: "#600008",
      }}
      justifyContent="flex-start"
      alignItems="center"
      borderRadius="1vw"
      shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      bg="#600008"
      border="1px solid #ae0032"
      w="20vw"
      h="auto"
      maxH="4.5vw"
      color="white"
      m={1}
      p={1}
      pr={0}
      onClick={onOpen}
    >
      <Circle
        m="1vw"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        size="2.5vw"
        bg={`url(${props.url})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
      <Text
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        fontWeight="light"
        fontSize={!isPageWide ? "1.1vw" : "8"}
      >
        {props.name}
      </Text>
      <Flex flexGrow="1" justify="flex-end" align="center">
        <Circle
          float="right"
          m="1vw"
          shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          size="0.75vw"
          bg="green"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
      </Flex>
      <Flex>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#ffffff"
              fontWeight="light"
              bg="#AE0032"
              borderBottomWidth="1px"
            >
              {props.name}
            </DrawerHeader>
            <DrawerBody
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              p={2}
            >
              <InputGroup>
                <Input variant="filled" placeholder="Write a message" />
                <InputRightElement width="4.5rem">
                  <Button
                    _hover={{
                      bg: "#600008",
                    }}
                    color="#ffffff"
                    bg="#AE0032"
                    h="1.75rem"
                    size="sm"
                  >
                    Send
                  </Button>
                </InputRightElement>
              </InputGroup>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
};
