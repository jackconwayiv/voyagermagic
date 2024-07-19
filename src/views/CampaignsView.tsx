import { Button, Flex, Heading, Text, Wrap } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { GameState } from "../data/types";

interface CampaignsViewProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const CampaignsView = ({ gameState, setGameState }: CampaignsViewProps) => {
  const navigate = useNavigate();

  const setCampaign = (campaign: string) => {
    const newGameState = { ...gameState, campaign: campaign };
    setGameState(newGameState);
  };

  const handleClick = (code: string) => {
    setCampaign(code);
    if (code == "CORE") {
      navigate("/lobby");
    } else {
      navigate("/scenes");
    }
  };

  return (
    <Flex
      direction="column"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="baseline"
    >
      <Heading mb={4}>Choose a Campaign:</Heading>
      <Wrap justifyContent="space-between" my={4}>
        {/* refactor this to map over array of campaigns */}
        <Button
          bgColor="green.200"
          onClick={() => handleClick("BLB")}
          height="200px"
          width="200px"
        >
          <Text fontSize="20px">BLOOMBURROW</Text>
        </Button>
        {/* <Button
          bgColor="orange.200"
          onClick={() => handleClick("CORE")}
          height="200px"
          width="200px"
        >
          <Text fontSize="30px">CORE</Text>
        </Button> */}
      </Wrap>
    </Flex>
  );
};
export default CampaignsView;
