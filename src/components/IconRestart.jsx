import { Icon } from "@chakra-ui/react";
import { RiRestartLine } from "react-icons/ri";

function IconRestart({ handleClick }) {
  return (
    <Icon
      color="brand.alt"
      as={RiRestartLine}
      fontSize="1rem"
      cursor="pointer"
      onClick={handleClick}
      title="Restart"
    />
  );
}

export default IconRestart;