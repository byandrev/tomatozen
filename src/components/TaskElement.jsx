import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";

function TaskElement({ id, text, isCompleted, handleCompleted, handleDelete }) {
  const [isHover, setIsHover] = useState(false);

  const handleClick = () => {
    handleCompleted(id);
  };

  const handleClickDelete = (evt) => {
    evt.stopPropagation();
    handleDelete(id);
  };

  return (
    <Box
      p={4}
      bg="gray.100"
      _dark={{ bg: "gray.700" }}
      borderRadius=".5rem"
      onClick={handleClick}
      userSelect="none"
      cursor="pointer"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      height="60px"
    >
      <Text as={`${isCompleted ? "del" : ""}`}>{text}</Text>
      {isHover && (
        <Button
          colorScheme="red"
          variant="outline"
          leftIcon={<DeleteIcon />}
          iconSpacing={0}
          size="sm"
          onClick={handleClickDelete}
        ></Button>
      )}
    </Box>
  );
}

export default TaskElement;