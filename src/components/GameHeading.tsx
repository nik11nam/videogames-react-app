import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  //Template literal
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;

  return (
    <Heading as="h1" size="2xl" paddingY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
