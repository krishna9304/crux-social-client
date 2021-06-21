import { Flex, Circle, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "../../pages";
export const OnlineCard = (props) => {
  let isPageWide = useMediaQuery("(max-width: 751px)");
  const [isactive, setActive] = useState(false);
  return (
    <Link href="/">
      <Flex
        onMouseEnter={() => {
          setActive(true);
        }}
        onMouseLeave={() => {
          setActive(false);
        }}
        _hover={{
          cursor: "pointer",
          bg: "#ddd",
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
          color={isactive ? "#600008" : "white"}
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
      </Flex>
    </Link>
  );
};
