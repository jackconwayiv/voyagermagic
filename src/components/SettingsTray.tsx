import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

interface SettingsTrayProps {
  playerCount: number;
  campaign: string;
  scene: number;
}

const SettingsTray = ({ playerCount, campaign, scene }: SettingsTrayProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathSequenceArray = ["/", "/campaigns", "/scenes", "/lobby"];
  const sequencePosition = pathSequenceArray.indexOf(location.pathname);

  return (
    <Flex
      direction="row"
      width="100%"
      alignItems="space-between"
      justifyContent="space-between"
      margin="20px"
    >
      {location.pathname === "/" ? (
        <Spacer />
      ) : (
        <Button
          onClick={() => navigate(pathSequenceArray[sequencePosition - 1])}
        >
          BACK
        </Button>
      )}
      <Flex
        direction="row"
        width="100%"
        alignItems="center"
        justifyContent="space-evenly"
      >
        {playerCount > 0 && <Text>{playerCount} Players</Text>}
        {<Text>{campaign} Campaign</Text>}
        {campaign !== "CORE" && scene > 0 && <Text>Scene {scene}</Text>}
      </Flex>
      <Spacer />
    </Flex>
  );
};

export default SettingsTray;
