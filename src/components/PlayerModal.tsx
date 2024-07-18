import {
  Button,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { GameState } from "../data/types";

interface PlayerModalProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  index: number;
  isOpen: boolean;
  onClose: () => void;
}

const PlayerModal = ({
  gameState,
  setGameState,
  index,
  isOpen,
  onClose,
}: PlayerModalProps) => {
  const handleClick = (val: number, stat: string) => {
    const newPlayer = { ...gameState.playerStats[index] };
    if (stat === "life") newPlayer.life += val;
    if (stat === "woe") newPlayer.woe += val;
    if (stat === "weal") newPlayer.weal += val;
    if (stat === "tax") newPlayer.tax += val;
    const newGameState = {
      ...gameState,
      playerStats: gameState.playerStats.map((player, i) =>
        i === index ? newPlayer : player
      ),
    };

    setGameState(newGameState);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value.slice(0, 10); // Cap the name at 10 characters
    const newPlayer = { ...gameState.playerStats[index], name: newName };
    const newGameState = {
      ...gameState,
      playerStats: gameState.playerStats.map((player, i) =>
        i === index ? newPlayer : player
      ),
    };

    setGameState(newGameState);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Heading textAlign="center" size="lg" p={2}>
            {gameState.playerStats[index].name}'s Stats
          </Heading>
          <Flex
            direction="column"
            p={3}
            alignItems="center"
            justifyContent="center"
          >
            <Input
              value={gameState.playerStats[index].name}
              onChange={handleNameChange}
            />
            <Flex
              direction="row"
              p={3}
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Button
                height="75px"
                width="75px"
                bgColor="red.100"
                isDisabled={gameState.playerStats[index].life < 1}
                onClick={() => handleClick(-1, "life")}
              >
                -
              </Button>
              <Text fontSize="24px" width="125px" textAlign="center">
                {gameState.playerStats[index].life} LIFE{" "}
              </Text>
              <Button
                height="75px"
                width="75px"
                bgColor="green.100"
                onClick={() => handleClick(1, "life")}
              >
                +
              </Button>
            </Flex>
            <Flex
              direction="row"
              p={3}
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Button
                height="75px"
                width="75px"
                bgColor="red.100"
                isDisabled={gameState.playerStats[index].tax < 1}
                onClick={() => handleClick(-1, "tax")}
              >
                -
              </Button>
              <Text fontSize="24px" width="125px" textAlign="center">
                {gameState.playerStats[index].tax} TAX{" "}
              </Text>
              <Button
                height="75px"
                width="75px"
                bgColor="green.100"
                onClick={() => handleClick(1, "tax")}
              >
                +
              </Button>
            </Flex>
            <Flex
              direction="row"
              p={3}
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Button
                height="75px"
                width="75px"
                bgColor="red.100"
                isDisabled={gameState.playerStats[index].woe < 1}
                onClick={() => handleClick(-1, "woe")}
              >
                -
              </Button>
              <Text fontSize="24px" width="125px" textAlign="center">
                {gameState.playerStats[index].woe} WOE{" "}
              </Text>
              <Button
                height="75px"
                width="75px"
                bgColor="green.100"
                onClick={() => handleClick(1, "woe")}
              >
                +
              </Button>
            </Flex>
            <Flex
              direction="row"
              p={3}
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Button
                height="75px"
                width="75px"
                bgColor="red.100"
                isDisabled={gameState.playerStats[index].weal < 1}
                onClick={() => handleClick(-1, "weal")}
              >
                -
              </Button>
              <Text fontSize="24px" width="125px" textAlign="center">
                {gameState.playerStats[index].weal} WEAL{" "}
              </Text>
              <Button
                height="75px"
                width="75px"
                bgColor="green.100"
                onClick={() => handleClick(1, "weal")}
              >
                +
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PlayerModal;
