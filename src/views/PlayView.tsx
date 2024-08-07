import {
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeckDrawer from "../components/DeckDrawer";
import NexusCard from "../components/NexusCard";
import PlayersTray from "../components/PlayersTray";
import { campaignDictionary } from "../data/campaignDictionary";
import { GameState } from "../data/types";

interface PlayViewProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const PlayView = ({ gameState, setGameState }: PlayViewProps) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [deckType, setDeckType] = useState<
    "enemyDeckZones" | "enemyTrickZones"
  >("enemyTrickZones");

  const handleDrawerOpen = (deck: "enemyDeckZones" | "enemyTrickZones") => {
    setDeckType(deck);
    onOpen(); // Call onOpen function to open the drawer
  };

  useEffect(() => {
    if (gameState.campaign === "" || gameState.sceneDetails.scene === 0)
      navigate("/");
  }, [gameState]);

  return (
    <Flex direction="column" width="100%" height="100vh" alignItems="center">
      <Flex direction="row" width="96%" justifyContent="center">
        <Heading mb={2}>
          {campaignDictionary[gameState.campaign]}, Scene{" "}
          {gameState.sceneDetails.scene.toString()}:{" "}
          {gameState.sceneDetails.name}
        </Heading>
      </Flex>
      <Flex direction="row" width="100%">
        <Flex width="100%" direction="row" justifyContent="center" mb={2}>
          <Wrap alignItems="center" justify="center" spacing="20px">
            {gameState.nexii.map((nexus, i) => (
              <WrapItem
                alignItems="center"
                justifyContent="center"
                key={nexus.name}
              >
                <NexusCard
                  gameState={gameState}
                  setGameState={setGameState}
                  index={i}
                />
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Flex>
      <Flex direction="row" width="50%" justifyContent="space-evenly" mb={2}>
        <Button
          ref={btnRef}
          onClick={() => handleDrawerOpen("enemyTrickZones")}
          width="50px"
          height="50px"
          colorScheme="orange"
        >
          <Text fontSize="22px">⚡</Text>
        </Button>
        {gameState.nexii.filter((nexus) => !nexus.isDead).length < 1 ? (
          <Flex>
            <Button
              colorScheme="yellow"
              width="150px"
              height="50px"
              onClick={() => navigate("/end")}
            >
              <Text fontSize="20px">Win Scenario</Text>
            </Button>
          </Flex>
        ) : (
          <Flex width="150px" />
        )}
        <Button
          ref={btnRef}
          onClick={() => handleDrawerOpen("enemyDeckZones")}
          width="50px"
          height="50px"
          colorScheme="purple"
        >
          <Text fontSize="22px">📖</Text>
        </Button>
      </Flex>
      <DeckDrawer
        gameState={gameState}
        setGameState={setGameState}
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        deckType={deckType}
      />
      <PlayersTray gameState={gameState} setGameState={setGameState} />
    </Flex>
  );
};
export default PlayView;
