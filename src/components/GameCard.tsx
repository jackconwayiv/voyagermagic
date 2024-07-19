import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Card, GameState } from "../data/types";
import determineColors from "../functions/determineCardColors";
import moveCard from "../functions/moveCard";

interface GameCardProps {
  card: Card;
  index: number;
  fromZone: "library" | "inPlay" | "graveyard" | "exile";
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const GameCard = ({
  card,
  index,
  fromZone,
  gameState,
  setGameState,
}: GameCardProps) => {
  const colors = determineColors(card.cost);

  const handleMoveCard = (
    toZone: "library" | "graveyard" | "exile" | "inPlay"
  ) => {
    const updatedDeck = moveCard(
      gameState.enemyTrickZones,
      fromZone,
      toZone,
      index,
      gameState.enemyTrickZones[toZone].length
    );
    setGameState((prevState) => ({
      ...prevState,
      enemyTrickZones: {
        ...prevState.enemyTrickZones,
        ...updatedDeck,
      },
    }));
  };

  return (
    <Flex
      width={{ base: "175px", md: "200px", lg: "225px" }}
      minWidth={{ base: "175px", md: "200px", lg: "225px" }}
      height={{ base: "275px", md: "300px", lg: "325px" }}
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
          m={1}
          p={1}
        >
          <Heading fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
            {card.name}
          </Heading>
          <Text fontSize={{ base: "8px", md: "10px", lg: "12px" }}>
            {card.cost}
          </Text>
        </Flex>
        <Flex
          border="1px black solid"
          direction="row"
          justifyContent="center"
          m={1}
          p={1}
          bgColor={colors.b + `.50`}
        >
          <Text fontSize={{ base: "10px", md: "12px", lg: "14px" }}>
            {card.type}
          </Text>
        </Flex>

        <Flex
          bgColor={colors.c + `.50`}
          border="1px black solid"
          m={1}
          p={2}
          height="100%"
        >
          <Text
            textAlign="justify"
            fontSize={{ base: "11px", md: "13px", lg: "15px" }}
          >
            {card.generateText(gameState)}
          </Text>
        </Flex>
        <Flex direction="row" mb={1} justifyContent="space-evenly">
          {fromZone !== "inPlay" && (
            <Button
              bgColor={`${colors.d}.100`}
              size="sm"
              onClick={() => handleMoveCard("inPlay")}
            >
              💥
            </Button>
          )}
          {fromZone !== "graveyard" && (
            <Button
              bgColor={`${colors.d}.100`}
              size="sm"
              onClick={() => handleMoveCard("graveyard")}
            >
              🪦
            </Button>
          )}
          {fromZone !== "exile" && (
            <Button
              bgColor={`${colors.d}.100`}
              size="sm"
              onClick={() => handleMoveCard("exile")}
            >
              🌀
            </Button>
          )}
          {fromZone !== "library" && (
            <Button
              bgColor={`${colors.d}.100`}
              size="sm"
              onClick={() => handleMoveCard("library")}
            >
              📚
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GameCard;
