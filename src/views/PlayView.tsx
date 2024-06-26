import { Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import GameCard from "../components/GameCard";
import Nexus from "../components/Nexus";
import cards from "../data/cardConstructor";
import testNexii from "../data/testNexii";

interface PlayViewProps {
  campaign: string;
  playerCount: number;
  scene: number;
}

const PlayView = ({ campaign, playerCount, scene }: PlayViewProps) => {
  return (
    <Flex direction="column" width="100%" height="100vh" alignItems="center">
      <Flex
        direction="row"
        width="96%"
        justifyContent="center"
        border="1px black solid"
        p={5}
        m={5}
      >
        <Heading>Game Status and Navigation</Heading>
        <Heading>
          {JSON.stringify(campaign)} | {JSON.stringify(playerCount)} |{" "}
          {JSON.stringify(scene)}
        </Heading>
      </Flex>
      <Flex direction="row" width="100%" height="100%">
        <Flex
          alignItems="center"
          justifyContent="center"
          width="70%"
          height="100%"
          direction="row"
          border="1px black solid"
          p={5}
          m={5}
        >
          <Wrap alignItems="center" justify="center" spacing="20px">
            {testNexii.map((nexus) => (
              <WrapItem
                alignItems="center"
                justifyContent="center"
                key={nexus.name}
              >
                <Nexus nexus={nexus} />
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
        <Flex
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
            <GameCard playerCount={playerCount} card={card} key={card.name} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PlayView;
