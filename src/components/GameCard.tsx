import { Button, Flex, Heading, Text } from "@chakra-ui/react";

const GameCard = () => {
  const card = {
    name: "Scary Birds",
    cost: "U",
    type: "Creature Summon",
    color: "blue",
    text: "Encounter two 2/2 blue Bird creature tokens.",
  };

  return (
    <Flex
      width={{ base: "200px", md: "250px", lg: "300px" }}
      height={{ base: "300px", md: "350px", lg: "400px" }}
      border="1px black solid"
      borderRadius="15px"
      direction="column"
      bgColor="black"
    >
      <Flex
        direction="column"
        height="100%"
        bgColor={card.color + `.200`}
        borderRadius="15px"
        p={1}
        m={1}
      >
        <Flex
          border="1px black solid"
          direction="row"
          justifyContent="space-between"
          bgColor={card.color + `.50`}
          m={2}
          p={3}
        >
          <Heading fontSize={{ base: "18px", md: "20px", lg: "24px" }}>
            {card.name}
          </Heading>
          <Text fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
            {card.cost}
          </Text>
        </Flex>
        <Flex
          border="1px black solid"
          direction="row"
          justifyContent="center"
          m={2}
          p={3}
          bgColor={card.color + `.50`}
        >
          <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>
            {card.type}
          </Text>
        </Flex>

        <Flex
          bgColor={card.color + `.50`}
          border="1px black solid"
          m={2}
          p={3}
          height="100%"
        >
          <Text fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
            {card.text}
          </Text>
        </Flex>
        <Flex direction="row" mb={2} justifyContent="space-evenly">
          <Button size="sm">
            GR
          </Button>{" "}
          <Button size="sm">
            EX
          </Button>{" "}
          <Button size="sm">
            LI
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GameCard;
