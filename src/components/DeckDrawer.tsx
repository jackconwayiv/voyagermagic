import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";
import { GameState } from "../data/types";
import drawCard from "../functions/drawCard";
import GameCard from "./GameCard";

interface DeckDrawerProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
}

const DeckDrawer = ({
  gameState,
  setGameState,
  isOpen,
  onClose,
  btnRef,
}: DeckDrawerProps) => {
  const handleDrawCard = () => {
    const updatedDeck = drawCard(gameState.enemyTrickZones);
    setGameState((prevState) => ({
      ...prevState,
      enemyTrickZones: updatedDeck,
    }));
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="top"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <Flex direction="row" height="350px" alignItems="center">
            <Button onClick={handleDrawCard} mr={4}>Draw</Button>
            {gameState.enemyTrickZones.inPlay.map((card, i) => (
              <GameCard
                key={i}
                card={card}
                index={i}
                gameState={gameState}
                setGameState={setGameState}
              />
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DeckDrawer;
