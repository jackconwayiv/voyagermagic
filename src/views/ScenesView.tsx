import { Card, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { nexiiData } from "../data/blbNexiiData";
import { blbScenes } from "../data/blbSceneData";
import { campaignDictionary } from "../data/campaignDictionary";
import { GameState, Scene } from "../data/types";
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
    setGameState(newGameState);
    navigate("/play");
    //refactor to stamp scenario text onto gameState object for easy rendering in future
  };

  const renderButton = (scene: Scene) => {
    const colors = determineCardColors(scene.color);
    return (
      <WrapItem
        key={scene.scene}
        width={{
          base: "210px",
          md: "260px",
          lg: "310px",
        }}
      >
        <Card
          bgGradient={`linear(to-tr, ${colors.a}.200, ${colors.c}.200, ${colors.b}.200)`}
          onClick={() => handleClick(scene.scene)}
          height={{ base: "200px", md: "250px", lg: "300px" }}
          width="100%"
          p={2}
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
          >
            <Text
              flexWrap={"wrap"}
              fontSize={{ base: "16px", md: "20px", lg: "24px" }}
            >
              {scene.name}
            </Text>
            <Text m={2} fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
              {campaignDictionary[gameState.campaign]} Scene {scene.scene}
            </Text>
            <Text
              flexWrap={"wrap"}
              m={2}
              textAlign={"justify"}
              fontSize={{ base: "10px", md: "12px", lg: "14px" }}
            >
              {scene.pre}
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
      alignItems="baseline"
      justifyContent="baseline"
    >
      <Heading m={2}>Choose a Scenario:</Heading>
      <Wrap
        spacing="20px"
        alignItems="center"
        justify="center"
        width="100%"
        m={2}
      >
        {blbScenes.map((scene) => renderButton(scene))}
      </Wrap>
    </Flex>
  );
};

export default ScenesView;
