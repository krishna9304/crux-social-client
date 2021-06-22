import { Flex, Circle, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useMediaQuery } from "../../pages";

export const MemberCard = (props) => {
  let isPageWide = useMediaQuery("(max-width: 751px)");
  return (
    <Link href="/studentProfile">
      <Flex
        className="main-container"
        _hover={{
          cursor: "pointer",
          bg: "#C4C4C4",
        }}
        justifyContent="flex-start"
        alignItems="center"
        shadow="sm"
        bg="#ddd"
        w="20vw"
        h="auto"
        maxH="4.5vw"
        color="black"
        m={1}
        p={1}
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
          fontSize={!isPageWide ? "1.1vw" : 8}
        >
          {props.name}
        </Text>
      </Flex>
    </Link>
  );
};
