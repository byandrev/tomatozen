import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import useTimer from "../hooks/useTimer";

function PomodoroTimer() {
  const theme = useTheme();
  const { timeDisplay } = useTimer();

  return (
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
            {timeDisplay}
          </Text>
        </Flex>
      </Box>
  );
}

export default PomodoroTimer;
