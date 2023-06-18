import { Box, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <footer>
      <Box textAlign="center">
        <Text>
          Development by{" "}
          <Link
            href="https://byandrev-blog.vercel.app"
            target="_blank"
            color="brand.base"
            fontWeight="bold"
          >
            Andres Parra
          </Link>
        </Text>
      </Box>
    </footer>
  );
}

export default Footer;