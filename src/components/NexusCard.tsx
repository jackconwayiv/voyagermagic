import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { GameState } from "../data/types";
import determineNexusColor from "../functions/determineNexusColor";

interface NexusProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  index: number;
}

const NexusCard = ({ gameState, setGameState, index }: NexusProps) => {
  const color = determineNexusColor(gameState.nexii[index].color);

  const handleClick = (val: number) => {
    const newNexus = gameState.nexii[index];
    newNexus.life += val;
    if (newNexus.isDead && val > 0) newNexus.isDead = false;
    if (newNexus.life <= 0) newNexus.isDead = true;
    const newGameState = {
      ...gameState,
      nexii: gameState.nexii.map((nexus, i) =>
        i === index ? newNexus : nexus
      ),
    };

    setGameState(newGameState);
  };

  return (
    <Flex
      height={{ base: "400px", md: "500px", lg: "600px" }}
      width={{ base: "300px", md: "350px", lg: "400px" }}
      border={
        gameState.nexii[index].isDead ? `1px gray dotted` : `1px black solid`
      }
      borderRadius="15px"
      direction="column"
      m={1}
      bgColor={gameState.nexii[index].isDead ? `white` : `black`}
    >
      <Flex
        bgColor={
          gameState.nexii[index].isDead ? color + `.500` : color + `.200`
        }
        direction="column"
        m={1}
        border={
          gameState.nexii[index].isDead ? `1px gray dotted` : `1px black solid`
        }
        borderRadius="15px"
        height="100%"
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          m={1}
        >
          <Heading fontSize={{ base: "18px", md: "24px", lg: "30px" }}>
            {gameState.nexii[index].name}
          </Heading>
          <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
            Enemy Nexus #{gameState.nexii[index].campaign.toLowerCase()}.
            {gameState.nexii[index].scene}.{gameState.nexii[index].id}
          </Text>
        </Flex>
        <Flex direction="row" justifyContent="center">
          <Text fontSize="10px"></Text>
        </Flex>
        <Flex
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          m={2}
          p={2}
        >
          <Button
            colorScheme={color}
            height={{ base: "50px", md: "60px", lg: "70px" }}
            width={{ base: "50px", md: "60px", lg: "70px" }}
            onClick={() => handleClick(-1)}
            isDisabled={gameState.nexii[index].isDead}
          >
            <Text fontSize={{ base: "40px", md: "50px", lg: "60px" }}>-</Text>
          </Button>
          <Heading fontSize={{ base: "40px", md: "50px", lg: "60px" }}>
            {gameState.nexii[index].isDead ? `X` : gameState.nexii[index].life}
          </Heading>
          <Button
            colorScheme={color}
            height={{ base: "50px", md: "60px", lg: "70px" }}
            width={{ base: "50px", md: "60px", lg: "70px" }}
            onClick={() => handleClick(1)}
          >
            <Text fontSize={{ base: "40px", md: "50px", lg: "60px" }}>+</Text>
          </Button>
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="baseline"
          width="95%"
          height="95%"
          border={
            gameState.nexii[index].isDead
              ? `1px gray dotted`
              : `1px black solid`
          }
          borderRadius="15px"
          bgColor={gameState.nexii[index].isDead ? `silver` : `white`}
          m={2}
        >
          <Flex direction="column">
            {gameState.nexii[index].aliveRules.map((rule, i) => (
              <Text
                key={i}
                p={2}
                m={2}
                textAlign="justify"
                fontSize={{ base: "14px", md: "18px", lg: "20px" }}
              >
                {rule}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NexusCard;
