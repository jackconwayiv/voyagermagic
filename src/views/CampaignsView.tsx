import { Button, Flex, Heading, Text, Wrap } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface CampaignsViewProps {
  setCampaign: React.Dispatch<React.SetStateAction<string>>;
}

const CampaignsView = ({ setCampaign }: CampaignsViewProps) => {
  const navigate = useNavigate();

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
      justifyContent="space-evenly"
    >
      <Heading>Choose a Campaign:</Heading>
      <Wrap justifyContent="space-between">
        <Button
          bgColor="green.200"
          onClick={() => handleClick("MEL")}
          height="200px"
          width="200px"
        >
          <Text fontSize="30px">MELODIA</Text>
        </Button>
        <Button
          bgColor="orange.200"
          onClick={() => handleClick("CORE")}
          height="200px"
          width="200px"
        >
          <Text fontSize="30px">CORE</Text>
        </Button>
      </Wrap>
    </Flex>
  );
};
export default CampaignsView;
