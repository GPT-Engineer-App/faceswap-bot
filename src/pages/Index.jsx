import { Container, VStack, Image, Heading, Text, Button, Input, Box } from "@chakra-ui/react";
import { FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={8}>
        <Heading>Face Swap Demo</Heading>
        <Text>Upload two images to see a face swap simulation.</Text>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4}>
            <Image src="https://images.unsplash.com/photo-1713238392341-92fb2cdc12de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMG1hbnxlbnwwfHx8fDE3MTQ4NTgwNDd8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxSize="150px" objectFit="cover" />
            <Image src="https://images.unsplash.com/photo-1616840420121-7ad8ed885f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHdvbWFufGVufDB8fHx8MTcxNDg1ODA0OHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxSize="150px" objectFit="cover" />
            <Button leftIcon={<FaExchangeAlt />} colorScheme="teal" variant="solid">
              Swap Faces
            </Button>
          </VStack>
        </Box>
        <Box>
          <Text>Upload Image 1:</Text>
          <Input type="file" p={1} />
          <Text mt={4}>Upload Image 2:</Text>
          <Input type="file" p={1} />
        </Box>
        <Button colorScheme="blue" mt={4} onClick={() => alert("Processing face swap...")}>
          Process Face Swap
        </Button>
        <Text mt={4}>Result:</Text>
        <Image src="https://images.unsplash.com/photo-1619708034906-df5e011f2e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYWNlc3dhcCUyMHJlc3VsdHxlbnwwfHx8fDE3MTQ4NTgwNDh8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxSize="300px" objectFit="cover" />
      </VStack>
    </Container>
  );
};

export default Index;
