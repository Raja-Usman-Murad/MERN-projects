import React from "react";
import {
  Heading,
  VStack,
  Text,
  Button,
  HStack,
  AspectRatio,
  Stack,
  Image,
  Divider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  // const textColor = useColorModeValue("gray.600", "whiteAlpha.600");
  return (
    <VStack
      spacing={3}
      alignItems="flex-start"
      bg={bgColor}
      h="100%"
      w="100%"
      padding={10}
    >
      <Heading size="2xl" textAlign="center" mb={5}>
        Your Cart
      </Heading>
      <Text display="flex" flexDirection="column" gap={2}>
        if the price is too hard on your eyes,{" "}
        <Button onClick={toggleColorMode} variant="outline" w={["65vw", "50vw", "16vw"]} colorScheme="blak" justifyItems="start">
          <p size={["sm", "md"]}>try changing the theme.</p>
        </Button>
      </Text>
      <HStack spacing={[0, 4, 6]} alignItems="center" direction= {{
          base: "column",
          md: "row",
        }}>
          <AspectRatio ratio={1} w={[10, 15, 24]}>
            <Image src="/image.jpg" alt="skateboard" borderRadius={5} />
          </AspectRatio>
        <Stack
          spacing={0}
          w= "full"
          direction= {{
          base: "column",
          md: "row",
        }}
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} px= {2}alignItems="flex-start">
            <Heading size={["xs", "md"]}>Penny Board</Heading>
            <Text color="textColor" size={["xs", "md"]}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="xs" p={0} my={0} textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color="textColor">Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>

        <HStack justifyContent="space-between">
          <Text color="textColor">Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>

        <HStack justifyContent="space-between">
          <Text color="textColor">Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider/>
      <HStack justifyContent="space-between" w="full">
        <Text color="textColor">Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
      <HStack w="full">
      <Button w="full" size="lg">Place Items</Button>
      </HStack>
    </VStack>
  );
};

export default Cart;
