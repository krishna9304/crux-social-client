import { Flex, Text } from "@chakra-ui/layout";
const Loader = () => {
  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Text fontSize={50} textColor="#ae0032" animation="forwards">
        The Coterie CRUx
      </Text>
    </Flex>
  );
};

export default Loader;
