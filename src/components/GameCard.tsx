import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Card } from "../data/types";
import determineColors from "../functions/determineCardColors";

interface GameCardProps {
  card: Card;
  playerCount: number;
}

const GameCard = ({ card, playerCount }: GameCardProps) => {
  const colors = determineColors(card.cost);
  return (
    <Flex
      width={{ base: "200px", md: "250px", lg: "300px" }}
      height={{ base: "300px", md: "350px", lg: "400px" }}
      border="1px black solid"
      borderRadius="15px"
      direction="column"
      bgColor="black"
      m={1}
    >
      <Flex
        direction="column"
        height="100%"
        bgColor={colors.d + `.200`}
        borderRadius="15px"
        p={1}
        m={1}
      >
        <Flex
          border="1px black solid"
          direction="row"
          justifyContent="space-between"
          bgColor={colors.a + `.50`}
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
          bgColor={colors.b + `.50`}
        >
          <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>
            {card.type}
          </Text>
        </Flex>

        <Flex
          bgColor={colors.c + `.50`}
          border="1px black solid"
          m={2}
          p={3}
          height="100%"
        >
          <Text fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
            {card.generateText(playerCount)}
          </Text>
        </Flex>
        <Flex direction="row" mb={2} justifyContent="space-evenly">
          <Button colorScheme={colors.d} size="sm">
            GR
          </Button>{" "}
          <Button colorScheme={colors.d} size="sm">
            EX
          </Button>{" "}
          <Button colorScheme={colors.d} size="sm">
            LI
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GameCard;
