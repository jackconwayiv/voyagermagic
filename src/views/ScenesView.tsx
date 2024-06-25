import { Button, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import sceneColorArray from "../data/sceneColorArray";

interface ScenesViewProps {
  setScene: React.Dispatch<React.SetStateAction<number>>;
}

const ScenesView = ({ setScene }: ScenesViewProps) => {
  const navigate = useNavigate();

  const handleClick = (scene: number) => {
    setScene(scene);
    navigate("/lobby");
  };

  const renderButton = (num: number) => {
    return (
      <WrapItem
        key={num}
        width={{
          base: num === 11 ? "200px" : "100px",
          md: num === 11 ? "300px" : "150px",
          lg: num === 11 ? "400px" : "200px",
        }}
      >
        <Button
          bgColor={sceneColorArray[num]}
          onClick={() => handleClick(num)}
          height={{ base: "100px", md: "150px", lg: "200px" }}
          width="100%"
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
          >
            <Text fontSize={{ base: "15px", md: "20px", lg: "30px" }}>
              Scene
            </Text>
            <Text fontSize={{ base: "25px", md: "40px", lg: "50px" }}>
              {num}
            </Text>
          </Flex>
        </Button>
      </WrapItem>
    );
  };

  const mapButtons = () => {
    const buttons = [];
    for (let i = 1; i < 12; i++) {
      buttons.push(renderButton(i));
    }
    return buttons;
  };

  return (
    <Flex
      direction="column"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Heading>Choose a Scenario:</Heading>
      <Wrap
        spacing="20px"
        maxWidth="900px"
        alignItems="center"
        justify="center"
        width="100%"
      >
        {mapButtons()}
      </Wrap>
    </Flex>
  );
};

export default ScenesView;
