import {
  Button,
  Card,
  Flex,
  Heading,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nexiiData } from "../data/blb/blbNexiiData";
import { blbScenes } from "../data/blb/blbSceneData";
import { campaignDictionary } from "../data/campaignDictionary";
import { initialDeckStats } from "../data/initialGameState";
import { GameState, Scene } from "../data/types";
import {
  assembleEnemyDeck,
  assembleTrickDeck,
} from "../functions/assembleTrickDeck";
import determineCardColors from "../functions/determineCardColors";

interface ScenesViewProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const ScenesView = ({ gameState, setGameState }: ScenesViewProps) => {
  const navigate = useNavigate();

  const handleClick = (scene: number) => {
    const newGameState = { ...gameState, scene: scene };
    const newNexii = nexiiData.filter(
      (nexus) => nexus.campaign === gameState.campaign && nexus.scene === scene
    );
    newGameState.nexii = newNexii;
    newGameState.sceneDetails = blbScenes.filter(
      (sceneDetails) => sceneDetails.scene === scene
    )[0];

    newGameState.enemyTrickZones = {
      ...initialDeckStats,
      library: assembleTrickDeck(newGameState.sceneDetails),
    };
    newGameState.enemyDeckZones = {
      ...initialDeckStats,
      library: assembleEnemyDeck(newGameState.sceneDetails),
    };
    setGameState(newGameState);
  };

  useEffect(() => {
    if (gameState.campaign === "") navigate("/");
  }, [gameState]);

  const renderStoryView = () => {
    const colors = determineCardColors(gameState.sceneDetails.color);
    return (
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        p={7}
      >
        <Heading size="lg" textAlign="center">
          Scene {gameState.sceneDetails.scene}: {gameState.sceneDetails.name}
        </Heading>
        <Text height="100px" fontSize="20px" m={2}>
          {gameState.sceneDetails.pre}
        </Text>
        <Button
          m={2}
          width="250px"
          height="100px"
          fontSize="26px"
          disabled={gameState.sceneDetails.scene === 0}
          bgGradient={`linear(to-tr, ${colors.a}.200, ${colors.c}.200, ${colors.b}.200)`}
          onClick={() => navigate("/play")}
        >
          Begin Scenario {gameState.sceneDetails.scene}
        </Button>
      </Flex>
    );
  };

  const renderButton = (scene: Scene) => {
    const colors = determineCardColors(scene.color);
    return (
      <WrapItem
        key={scene.scene}
        m={1}
        width={{
          base: "85px",
          md: "100px",
          lg: "120px",
        }}
      >
        <Card
          bgGradient={`linear(to-tr, ${colors.a}.200, ${colors.c}.200, ${colors.b}.200)`}
          onClick={() => handleClick(scene.scene)}
          height={{ base: "25px", md: "50px", lg: "75px" }}
          width="100%"
          p={2}
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
          >
            <Text m={2} fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
              Scene {scene.scene}
            </Text>
          </Flex>
        </Card>
      </WrapItem>
    );
  };

  return (
    <Flex
      direction="column"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="baseline"
    >
      <Heading textAlign="center" mb={4}>
        Choose a {campaignDictionary[gameState.campaign]} Scenario:
      </Heading>
      <Wrap
        spacing="20px"
        alignItems="center"
        justify="center"
        width="100%"
        my={4}
      >
        {blbScenes.map((scene) => renderButton(scene))}
      </Wrap>
      {gameState.sceneDetails.scene !== 0 && renderStoryView()}
    </Flex>
  );
};

export default ScenesView;
