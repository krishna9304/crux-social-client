import {
  Flex,
  Circle,
  Text,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { useMediaQuery } from "../../pages";

export const MessageCard = (props) => {
  let isPageWide = useMediaQuery("(max-width: 751px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      onClick={onOpen}
      className="main-container"
      _hover={{
        cursor: "pointer",
        bg: "#ddd",
        color: "#600008",
      }}
      justifyContent="flex-start"
      alignItems="center"
      shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      bg="white"
      border="1px solid #ae0032"
      w="100%"
      h="auto"
      maxH="4vw"
      color="black"
      m={1}
      p={1}
      pr={0}
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
