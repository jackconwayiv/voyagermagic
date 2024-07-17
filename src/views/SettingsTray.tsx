import { Button, Flex, Select, Spacer, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
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

  return (
    <Flex
      direction="row"
      width="100%"
      alignItems="space-between"
      justifyContent="space-between"
      margin={2}
    >
      {location.pathname === "/" ? (
        <Spacer />
      ) : (
        <Button
          onClick={() => navigate(pathSequenceArray[sequencePosition - 1])}
        >
          BACK
        </Button>
      )}
      <Flex
        direction="row"
        width="100%"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Flex direction="row" justifyContent="center">
          <Select
            value={gameState.playerCount}
            onChange={(e) => setPlayerCount(Number(e.target.value))}
          >
            <option value={1}>1 Player</option>
            <option value={2}>2 Players</option>
            <option value={3}>3 Players</option>
          </Select>
        </Flex>
        <Text>{gameState.campaign} Campaign</Text>
        {gameState.campaign !== "CORE" && gameState.scene > 0 && (
          <Text>Scene {gameState.scene}</Text>
        )}
      </Flex>
      <Spacer />
    </Flex>
  );
};

export default SettingsTray;
