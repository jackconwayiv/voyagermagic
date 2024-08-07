import { Button, Flex, Select, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { nexiiData } from "../data/blb/blbNexiiData";
import { blbScenes } from "../data/blb/blbSceneData";
import { campaignDictionary } from "../data/campaignDictionary";
import { initialDeckStats } from "../data/initialGameState";
import { GameState } from "../data/types";
import {
  assembleEnemyDeck,
  assembleTrickDeck,
} from "../functions/assembleTrickDeck";

interface SettingsTrayProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const SettingsTray = ({ gameState, setGameState }: SettingsTrayProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathSequenceArray = ["/", "/campaigns", "/scenes", "/play", "/end"];
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

  return (
    <Flex
      direction="row"
      width="100%"
      px={3}
      py={1}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex>
        <Button
          isDisabled={location.pathname === "/"}
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
