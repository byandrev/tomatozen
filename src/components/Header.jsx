import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { SettingsIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" py={10}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="lg" color="brand.light" colorScheme="white">
          TomatoZen
        </Heading>
        <Stack direction="row" spacing={2}>
          <Button
            variant="ghost"
            colorScheme="gray"
            leftIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            iconSpacing={0}
            onClick={toggleColorMode}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="red"
            leftIcon={<SettingsIcon />}
            iconSpacing={0}
          ></Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Header;
