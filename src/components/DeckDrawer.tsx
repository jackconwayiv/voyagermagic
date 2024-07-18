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
}

const DeckDrawer = ({
  gameState,
  setGameState,
  isOpen,
  onClose,
  btnRef,
}: DeckDrawerProps) => {
  const toast = useToast();
  const [selectedZone, setSelectedZone] = useState<
    "inPlay" | "graveyard" | "exile"
  >("inPlay");

  const handleDrawCard = () => {
    const result = drawCard(gameState.enemyTrickZones);
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
        enemyTrickZones: result.deck,
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
              <Button mr={5} onClick={handleDrawCard}>
                Draw
              </Button>
              <RadioGroup onChange={handleZoneChange} value={selectedZone}>
                <Stack direction="row">
                  <Radio value="inPlay">In Play</Radio>
                  <Radio value="graveyard">Graveyard</Radio>
                  <Radio value="exile">Exile</Radio>
                </Stack>
              </RadioGroup>
            </Flex>
            <Flex direction="row" alignItems="center" overflowX="auto">
              {gameState.enemyTrickZones[selectedZone].map((card, i) => (
                <GameCard
                  key={i}
                  card={card}
                  index={i}
                  fromZone={selectedZone}
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
