import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { nexiiData } from "../data/blbNexiiData";
import { blbScenes } from "../data/blbSceneData";
import { GameState } from "../data/types";
import determineCardColors from "../functions/determineCardColors";

interface PlayViewProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const EndView = ({ gameState, setGameState }: PlayViewProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const newGameState = { ...gameState };
    const newSceneDetails =
      blbScenes.filter(
        (sceneDetails) =>
          sceneDetails.scene === gameState.sceneDetails.scene + 1
      )[0] || gameState.sceneDetails;
    const newNexii = nexiiData.filter(
      (nexus) =>
        nexus.campaign === gameState.campaign &&
        nexus.scene === newSceneDetails.scene
    );
    setGameState({
      ...newGameState,
      sceneDetails: newSceneDetails,
      nexii: newNexii,
    });
    navigate("/scenes");
  };

  return (
    <Flex direction="column" p={3}>
      <Heading p={3}>
        Victory in Scene {gameState.sceneDetails.scene}:{" "}
        {gameState.sceneDetails.name}
      </Heading>
      <Text fontSize="14px" p={6} color="gray">
        {gameState.sceneDetails.pre}
      </Text>
      <Flex height="200px" alignItems="center" p={3} border="1px black solid">
        <Text fontSize="28px">{gameState.sceneDetails.post}</Text>
      </Flex>
      <Text fontSize="40px" p={3} textAlign="center">
        Reward: {gameState.sceneDetails.reward}
      </Text>
      <Flex p={3} justifyContent="center">
        <Button
          width="300px"
          height="150px"
          bgColor={`${determineCardColors(gameState.sceneDetails.color).a}.200`}
          onClick={handleClick}
          fontSize="20px"
          m={10}
        >
          Return to Campaign Lobby
        </Button>
      </Flex>
    </Flex>
  );
};
export default EndView;
