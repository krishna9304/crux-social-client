import { Flex, Circle, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
export const ClassmateCard = (props) => {
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
          bg: "#600008",
        }}
        justifyContent="flex-start"
        alignItems="center"
        borderRadius="1vw"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        bg="#ffffff"
        border="1px solid #ae0032"
        w="20vw"
        h="5vw"
        m={1}
        p={1}
      >
        <Circle
          m="1vw"
          shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          size="4vw"
          bg={`url(${props.url})`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
        <Text
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          fontWeight="light"
          color={isactive ? "white" : "#AE0032"}
          fontSize="max(1.3vw , 10px)"
        >
          {props.name}
        </Text>
      </Flex>
    </Link>
  );
};