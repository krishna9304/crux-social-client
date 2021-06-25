import { Flex, Text } from "@chakra-ui/react";
export const ClubDescription = () => {
  return (
    <Flex justify="center" align="center" flexDirection="column">
      <Flex
        p={7}
        pt={0}
        mt={4}
        align="center"
        justify="flex-start"
        flexDirection="column"
        borderRadius="2vw 2vw 0 0"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        bg="#AE0032"
        w="48vw"
        h="auto"
        minHeight="52.2vh"
      >
        <Flex m={4} mt={6} w="100%" h="1vh" align="center" justify="center">
          <Text
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            fontWeight="bold"
            color="#ffffff"
            fontSize={18}
          >
            Club Description
          </Text>
        </Flex>
        <Text color="#ffffff" fontSize={14}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </Flex>
    </Flex>
  );
};
