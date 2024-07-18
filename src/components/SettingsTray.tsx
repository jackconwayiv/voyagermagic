import { Button, Flex, Select, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { nexiiData } from "../data/blbNexiiData";
import { blbScenes } from "../data/blbSceneData";
import { campaignDictionary } from "../data/campaignDictionary";
import { GameState } from "../data/types";

interface SettingsTrayProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const SettingsTray = ({ gameState, setGameState }: SettingsTrayProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathSequenceArray = ["/", "/campaigns", "/scenes", "/play"];
  const sequencePosition = pathSequenceArray.indexOf(location.pathname);

  const setPlayerCount = (numberOfPlayers: number) => {
    const newGameState = { ...gameState, playerCount: numberOfPlayers };
    setGameState(newGameState);
  };
  const setScene = (scenario: number) => {
    const newGameState = {
      ...gameState,
      sceneDetails: blbScenes.filter(
        (sceneDetails) => scenario === sceneDetails.scene
      )[0],
    };
    const newNexii = nexiiData.filter(
      (nexus) =>
        nexus.campaign === gameState.campaign && nexus.scene === scenario
    );
    newGameState.nexii = newNexii;
    setGameState(newGameState);
  };

  return (
    <Flex
      direction="row"
      width="100%"
      p={3}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex>
        <Button
          // disabled={location.pathname === "/"}
          onClick={() => navigate(pathSequenceArray[sequencePosition - 1])}
        >
          BACK
        </Button>
      </Flex>

      <Flex>
        <Select
          value={gameState.playerCount}
          onChange={(e) => setPlayerCount(Number(e.target.value))}
        >
          <option value={1}>1 Player</option>
          <option value={2}>2 Players</option>
          <option value={3}>3 Players</option>
        </Select>
      </Flex>
      <Flex>
        <Text>{campaignDictionary[gameState.campaign]} Campaign</Text>
      </Flex>

      <Flex>
        <Select
          value={gameState.sceneDetails.scene || 1}
          onChange={(e) => setScene(Number(e.target.value))}
        >
          {blbScenes.map((scene) => (
            <option key={scene.scene} value={scene.scene}>
              Scene {scene.scene}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  );
};

export default SettingsTray;
