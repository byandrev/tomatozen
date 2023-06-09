import { Box, Flex, Stack, Text, useTheme, Button } from "@chakra-ui/react";
import { FaPlay, FaPause, FaUndoAlt } from "react-icons/fa";

function Pomodoro() {
  const theme = useTheme();

  return (
    <Stack>
      <Box
        w="250px"
        h="250px"
        bg="brand.light"
        borderRadius="full"
        position="relative"
        _before={{
          content: "''",
          display: "block",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "80%",
          border: `5px solid ${theme.colors.brand.base}`,
          borderRadius: "50%",
        }}
      >
        <Flex h="100%" justifyContent="center" alignItems="center">
          <Text fontSize="4xl" fontWeight="bold" color="white">
            25:00
          </Text>
        </Flex>
      </Box>
      <Stack mt={4}>
        <Flex justifyContent="center">
          <Button
            variant="ghost"
            color="brand.base"
            leftIcon={<FaUndoAlt />}
            iconSpacing={0}
            fontSize="2rem"
          ></Button>
          <Button
            variant="ghost"
            color="brand.base"
            leftIcon={<FaPlay />}
            iconSpacing={0}
            fontSize="2rem"
          ></Button>
          <Button
            variant="ghost"
            color="brand.base"
            leftIcon={<FaPause />}
            iconSpacing={0}
            fontSize="2rem"
          ></Button>
        </Flex>
      </Stack>
    </Stack>
  );
}

export default Pomodoro;
