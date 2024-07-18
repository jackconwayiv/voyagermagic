import { Flex, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { GameState, Player } from "../data/types";
import PlayerModal from "./PlayerModal";

interface PlayersTrayProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const PlayersTray = ({ gameState, setGameState }: PlayersTrayProps) => {
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState<number>(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (index: number) => {
    setSelectedPlayerIndex(index);
    onOpen();
  };

  const renderPlayerCard = (player: Player, index: number) => {
    return (
      <Flex
        key={index}
        width="125px"
        direction="column"
        cursor="pointer"
        onClick={() => handleClick(index)}
      >
        <Text>{player.name}</Text>
        <Flex direction="row" justifyContent="space-evenly">
          <Text>❤️ {player.life}</Text> <Spacer /> <Text>💰 {player.tax}</Text>
        </Flex>
        <Flex direction="row" justifyContent="space-between">
          <Text>😭 {player.woe}</Text> <Spacer /> <Text>😀 {player.weal}</Text>
        </Flex>
      </Flex>
    );
  };

  return (
    <Flex
      width="100%"
      direction="row"
      alignItems="space-between"
      justifyContent="space-between"
      px={5}
    >
      {gameState.playerStats.map((player, index) => {
        if (index + 1 <= gameState.playerCount)
          return renderPlayerCard(player, index);
      })}
      <PlayerModal
        gameState={gameState}
        setGameState={setGameState}
        index={selectedPlayerIndex}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
};
export default PlayersTray;
