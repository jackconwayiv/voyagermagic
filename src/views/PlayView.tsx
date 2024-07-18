import { Button, Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import NexusCard from "../components/NexusCard";
import { campaignDictionary } from "../data/campaignDictionary";
import { GameState } from "../data/types";
import PlayersTray from "../components/PlayersTray";

interface PlayViewProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const PlayView = ({ gameState, setGameState }: PlayViewProps) => {
  const navigate = useNavigate();

  return (
    <Flex direction="column" width="100%" height="100vh" alignItems="center">
      <Flex direction="row" width="96%" justifyContent="center">
        <Heading>
          {campaignDictionary[gameState.campaign]}, Scene{" "}
          {gameState.sceneDetails.scene.toString()}:{" "}
          {gameState.sceneDetails.name}
        </Heading>
      </Flex>
      <Flex direction="row" width="100%">
        <Flex
          width="100%" //70%
          direction="row"
          justifyContent="center"
          p={2}
          m={3}
        >
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
        {/* <Flex
          alignItems="center"
          justifyContent="center"
          direction="column"
          width="30%"
          height="100%"
          border="1px black solid"
          p={5}
          m={5}
        >
          {cards.map((card) => (
            <GameCard
              // this needs to be refactored to use gameState
              playerCount={gameState.playerCount}
              card={card}
              key={card.name}
            />
          ))}
        </Flex> */}
      </Flex>
      {gameState.nexii.filter((nexus) => !nexus.isDead).length < 1 && (
        <Flex>
          <Button onClick={() => navigate("/end")}>Win Scenario</Button>
        </Flex>
      )}
      <PlayersTray gameState={gameState} setGameState={setGameState} />
    </Flex>
  );
};
export default PlayView;
