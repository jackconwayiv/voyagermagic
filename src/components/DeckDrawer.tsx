import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { GameState } from "../data/types";
import drawCard from "../functions/drawCard";
import GameCard from "./GameCard";

interface DeckDrawerProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
  deckType: "enemyDeckZones" | "enemyTrickZones";
}

const DeckDrawer = ({
  gameState,
  setGameState,
  isOpen,
  onClose,
  btnRef,
  deckType,
}: DeckDrawerProps) => {
  const toast = useToast();
  const [selectedZone, setSelectedZone] = useState<
    "inPlay" | "graveyard" | "exile"
  >("inPlay");

  const handleDrawCard = () => {
    const result = drawCard(gameState[deckType]);
    if (result.status === "empty") {
      toast({
        title: "No cards left.",
        description: "There are no cards left in the library or graveyard.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      setGameState((prevState) => ({
        ...prevState,
        [deckType]: result.deck,
      }));
    }
  };

  const handleZoneChange = (nextValue: string) => {
    setSelectedZone(nextValue as "inPlay" | "graveyard" | "exile");
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="top"
      size="md"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <Flex direction="column" height="425px">
            <Flex direction="row" alignItems="center" mb={4}>
              <Button
                colorScheme={
                  deckType === "enemyTrickZones" ? "orange" : "purple"
                }
                mr={5}
                onClick={handleDrawCard}
              >
                📚 Draw{" "}
                {deckType === "enemyTrickZones" ? "Trick" : "Enemy Card"} (
                {gameState[deckType].library.length})
              </Button>
              <RadioGroup
                onChange={handleZoneChange}
                value={selectedZone}
                width="80%"
              >
                <Stack direction="row" justifyContent="space-evenly">
                  <Radio value="inPlay">
                    💥 In Play ({gameState[deckType].inPlay.length})
                  </Radio>
                  <Radio value="graveyard">
                    🪦 Graveyard ({gameState[deckType].graveyard.length})
                  </Radio>
                  <Radio value="exile">
                    🌀 Exile ({gameState[deckType].exile.length})
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
            <Flex direction="row" alignItems="center" overflowX="auto">
              {gameState[deckType][selectedZone].map((card, i) => (
                <GameCard
                  key={i}
                  card={card}
                  index={i}
                  fromZone={selectedZone}
                  deckType={deckType} // Pass the deckType prop
                  gameState={gameState}
                  setGameState={setGameState}
                />
              ))}
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DeckDrawer;
