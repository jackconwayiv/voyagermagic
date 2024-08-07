import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { GameState } from "../data/types";

interface WelcomePageProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const WelcomePage = ({ gameState, setGameState }: WelcomePageProps) => {
  const navigate = useNavigate();

  const handleClick = (num: number) => {
    const newGameState: GameState = { ...gameState, playerCount: num };
    setGameState(newGameState);
    navigate("/campaigns");
    // navigate("/scenes");
  };

  const renderButton = (num: number) => {
    return (
      <Button
        bgColor="yellow.200"
        key={num}
        onClick={() => handleClick(num)}
        width={{ base: "100px", md: "150px", lg: "200px" }}
        height={{ base: "100px", md: "150px", lg: "200px" }}
      >
        <Flex direction="column">
          <Text fontSize="50px">{num}</Text>
          <Text fontSize={{ base: "15px", md: "20px", lg: "30px" }}>
            {num === 1 ? `player` : `players`}
          </Text>
        </Flex>
      </Button>
    );
  };
  const mapButtons = () => {
    const buttons = [];
    for (let i = 1; i < 4; i++) {
      buttons.push(renderButton(i));
    }
    return buttons;
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      height="100vh"
      width="100vw"
      justifyContent="baseline"
    >
      <Heading mb={4}>Welcome to Voyager Magic!</Heading>
      <Flex
        alignItems="space-evenly"
        justifyContent="space-between"
        width="90vw"
        my={4}
      >
        {mapButtons()}
      </Flex>
      <Heading my={4}>How many players?</Heading>
    </Flex>
  );
};

export default WelcomePage;
