import { Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import NexusCard from "../components/NexusCard";
import { campaignDictionary } from "../data/campaignDictionary";
import { GameState } from "../data/types";

interface PlayViewProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const PlayView = ({ gameState, setGameState }: PlayViewProps) => {
  return (
    <Flex direction="column" width="100%" height="100vh" alignItems="center">
      <Flex direction="row" width="96%" justifyContent="center">
        <Heading>
          {campaignDictionary[gameState.campaign]}, Scene{" "}
          {gameState.scene.toString()}
        </Heading>
      </Flex>
      <Flex direction="row" width="100%" height="100%">
        <Flex
          width="100%" //70%
          height="100%"
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
    </Flex>
  );
};
export default PlayView;
