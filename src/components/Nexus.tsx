import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Nexus as NexusType } from "../data/types";
import determineNexusColor from "../functions/determineNexusColor";

interface NexusProps {
  nexus: NexusType;
}

const Nexus = ({ nexus }: NexusProps) => {
  const [life, setLife] = useState<number>(20);
  const [isDead, setIsDead] = useState<boolean>(false);

  const color = determineNexusColor(nexus.color);

  const handleClick = (val: number) => {
    if (isDead && val > 0) setIsDead(false);
    const newLife = life + val;
    if (newLife <= 0) setIsDead(true);
    setLife(newLife);
  };

  return (
    <Flex
      height={{ base: "200px", md: "250px", lg: "300px" }}
      width={{ base: "300px", md: "350px", lg: "400px" }}
      border={isDead ? `1px gray dotted` : `1px black solid`}
      borderRadius="15px"
      direction="column"
      m={1}
      bgColor={isDead ? `white` : `black`}
    >
      <Flex
        bgColor={isDead ? color + `.500` : color + `.200`}
        direction="column"
        m={1}
        border={isDead ? `1px gray dotted` : `1px black solid`}
        borderRadius="15px"
        height="100%"
      >
        <Flex direction="row" justifyContent="center" m={2}>
          <Heading fontSize={{ base: "18px", md: "24px", lg: "30px" }}>
            {nexus.name}
          </Heading>
        </Flex>
        <Flex
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          m={2}
        >
          <Button
            colorScheme={color}
            height={{ base: "50px", md: "60px", lg: "70px" }}
            width={{ base: "50px", md: "60px", lg: "70px" }}
            onClick={() => handleClick(-1)}
            isDisabled={isDead}
          >
            <Text fontSize={{ base: "40px", md: "50px", lg: "60px" }}>-</Text>
          </Button>
          <Heading fontSize={{ base: "40px", md: "50px", lg: "60px" }}>
            {isDead ? `X` : life}
          </Heading>
          <Button
            colorScheme={color}
            height={{ base: "50px", md: "60px", lg: "70px" }}
            width={{ base: "50px", md: "60px", lg: "70px" }}
            onClick={() => handleClick(1)}
          >
            <Text fontSize={{ base: "40px", md: "50px", lg: "60px" }}>+</Text>
          </Button>
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          width="95%"
          height="95%"
          m={2}
        >
          <Text
            textAlign="center"
            fontSize={{ base: "14px", md: "18px", lg: "20px" }}
          >
            {nexus.aliveRules}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nexus;
