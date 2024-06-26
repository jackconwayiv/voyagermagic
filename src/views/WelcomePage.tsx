import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface WelcomePageProps {
  setPlayerCount: React.Dispatch<React.SetStateAction<number>>;
}

const WelcomePage = ({ setPlayerCount }: WelcomePageProps) => {
  const navigate = useNavigate();

  const handleClick = (num: number) => {
    setPlayerCount(num);
    // navigate("/campaigns");
    navigate("/play");
  };

  const renderButton = (num: number) => {
    return (
      <Button
        bgColor="yellow.200"
        key={num}
        onClick={() => handleClick(num)}
        width={{ base: "100px", md: "150px", lg: "200px" }}
        height={{ base: "100px", md: "150px", lg: "200px" }}
      >
        <Flex direction="column">
          <Text fontSize="50px">{num}</Text>
          <Text fontSize={{ base: "15px", md: "20px", lg: "30px" }}>
            {num === 1 ? `player` : `players`}
          </Text>
        </Flex>
      </Button>
    );
  };
  const mapButtons = () => {
    const buttons = [];
    for (let i = 1; i < 4; i++) {
      buttons.push(renderButton(i));
    }
    return buttons;
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      height="100vh"
      width="100vw"
      justifyContent="space-evenly"
    >
      <Heading>Welcome to Voyager Magic!</Heading>
      <Flex
        alignItems="space-evenly"
        justifyContent="space-between"
        width="90vw"
      >
        {mapButtons()}
      </Flex>
      <Heading>How many players?</Heading>
    </Flex>
  );
};

export default WelcomePage;
